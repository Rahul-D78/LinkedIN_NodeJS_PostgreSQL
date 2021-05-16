import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { Skill } from '../../entities/skills.entity';
import { Institute } from '../../entities/institute.entity';
import { Organization } from '../../entities/organization.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Skill) private readonly skillsRepo: Repository<Skill>,
    @InjectRepository(Institute) private readonly instituteRepo: Repository<Institute>,
    @InjectRepository(Organization) private readonly organizationRepo: Repository<Organization>
    ){}

    async getAllUsers(): Promise<User[]> {
        return await this.userRepo.find();
    }

    async registerUser(): Promise<User> {

        const skill = new Skill();
        skill.name = "java";
        await this.skillsRepo.save(skill);

        const skill_b = new Skill();
        skill_b.name = "javascript";
        await this.skillsRepo.save(skill_b);

        const organization = new Organization();
        organization.name = "Google";
        organization.startYear = new Date("2021-01-11");
        organization.endYear = new Date("2025-01-11");

        const user = new User();
        user.email = "name@gmail.com",
        user.name = "name",
        user.password = "pass",
        user.organization = [organization],
        user.skills = [skill, skill_b]
        await this.userRepo.save(user);
        return user;
    }
}