import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user.entity';
import { Repository } from 'typeorm';
import { Skill } from 'src/entities/skills.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Skill) private readonly skillsRepo: Repository<Skill>){}

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

        const user = new User();
        user.email = "name@gmail.com",
        user.name = "name",
        user.password = "pass",
        user.skills = [skill, skill_b]
        await this.userRepo.save(user);
        return user;
    }
}