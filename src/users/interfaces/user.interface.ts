export interface User {
    id?: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    status?: boolean;
    date: Date;
    coins?: number;
}