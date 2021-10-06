export class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly status: boolean;
    readonly date: Date;
    readonly coins: number;
}

export class UpdateUserDto {
    readonly username: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly status: boolean;
    readonly date: Date;
    readonly coins: number;
}

