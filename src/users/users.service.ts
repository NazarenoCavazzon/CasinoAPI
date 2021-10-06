import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly users: Model<User>) {}
    
    async findAll(): Promise<User[]> {
        return await this.users.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.users.findOne({ _id: id });
    }

    async create(user: User): Promise<User> {
        const newUser = new this.users(user);
        return await newUser.save();
    }

    async delete(id: string): Promise<User> {
        return await this.users.findByIdAndRemove(id);
    }

    async update(id: string, user: User): Promise<User> {
        return await this.users.findByIdAndUpdate(id, user, { new: true });
    }
}
