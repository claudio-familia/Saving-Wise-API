import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { CreateUserDto } from 'src/features/users/models/create-user.dto';
import { UsersService } from 'src/features/users/services/users.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private userService: UsersService
    ) { }
    
    @Post('login')
    @UseGuards(LocalAuthGuard)
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('sign-in')
    async signin(@Request() req) {
        const payload = req.body as CreateUserDto;
        return this.userService.create(payload);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
