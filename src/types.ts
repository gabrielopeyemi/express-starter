export interface userArgs  { 
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    userRole: 'admin' | 'user'; // set user's roles
    password: string;
}

export interface LoginArgs{
    username: string;
    email: string;
    password: string;
}

export enum UserTypes {
    admin = 'admin',
    user = 'user',
}