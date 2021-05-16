import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institute } from '../../entities/institute.entity';
import { Organization } from '../../entities/organization.entity';
import { Skill } from '../../entities/skills.entity';
import { User } from '../../entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Skill, Institute, Organization])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
