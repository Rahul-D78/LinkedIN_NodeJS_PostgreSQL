import { Controller, Get, Post } from '@nestjs/common';
import { User } from '../../entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    
    @Get()
    async getAllUser(): Promise<User[]>{
        return await this.usersService.getAllUsers();
    }

    @Post()
    async registerUser(): Promise<User> {
        return await this.usersService.registerUser();
    }
}
