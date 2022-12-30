import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    email: string;

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    birthdate: Date;

    @Prop()
    createdAt: Date;

    constructor() {
        this.createdAt = new Date();
    }
}

export const UserSchema = SchemaFactory.createForClass(User);