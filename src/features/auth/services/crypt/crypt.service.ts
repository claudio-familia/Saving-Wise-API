import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CryptService {
    hash: number;
    constructor() {
        this.hash = 10//process.env.HASH_KEY || ''
    }
    async encrypt(value: string): Promise<string> {
        return  await bcrypt.hash(value, this.hash);
    }

    async match(value: string, compare: string): Promise<boolean> {
        return await bcrypt.compare(value, compare);
    }
}
