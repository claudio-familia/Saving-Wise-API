import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/features/auth/guards/jwt-auth.guard';
import { UsersService } from '../services/users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
    constructor(private userService: UsersService) {}
    
    @Get()
    getAll() {
        return this.userService.findAll();
    }
}
