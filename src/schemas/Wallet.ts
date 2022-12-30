import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './User';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema()
export class Wallet {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    owner: User;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);