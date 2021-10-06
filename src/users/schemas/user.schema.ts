import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    coins: {
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: false
    },
    blackJackCoins: {
        oneCoins: Number,
        fiveCoins: Number,
        twentyFiveCoins: Number,
        hundredCoins: Number,
        fiveHundredCoins: Number,
    }
});

