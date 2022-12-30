import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CryptService } from '../../common/services/crypt/crypt.service';
import { User, UserDocument } from 'src/schemas/User';
import { CreateUserDto } from '../models/create-user.dto';
import { MailService } from '../../common/services/mail/mail.service';
import { ConfirmationContext } from 'src/features/common/models/email.context';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<UserDocument>,
        private cryptService: CryptService,
        private mailService: MailService,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            createUserDto.password = await this.cryptService.encrypt(createUserDto.password)
    
            const createdUser = new this.userModel(createUserDto);
    
            const token = await this.cryptService.encrypt(createUserDto.username)

            const context: ConfirmationContext = {
                name: `${createdUser.firstname} ${createdUser.lastname}`,
                subject: 'Welcome to Saving Wise',
                to: createdUser.email,
                username: createdUser.username,
                data: {
                    title: 'Welcome to Saving Wise',
                    action: 'https://www.google.com',
                    body: ''
                }
            }
    
            this.mailService.sendUserConfirmation(context);
    
            return createdUser;
        }catch(ex) {
            throw new Error(ex.message)
        }
    }
    
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }
    
    async findByUsername(username: string): Promise<User | undefined> {
        return await this.userModel.findOne({ username: username }).exec();
    }
}
