export interface userArgs  { 
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    userRole: 'admin' | 'user'; // set user's roles
    password: string;
}