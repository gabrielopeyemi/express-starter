import express from 'express';
import { userArgs } from '../../types';
const postModal = require('../../schema/users.modal')

class UserService {
    constructor() {}

    async createUser(users: userArgs){
        const createdUser = new postModal({
            firstName: users.firstName,
            lastName: users.lastName,
            username: users.username,
            email: users.email,
            userRole: users.userRole,
            password: users.password,  //hash
        });
        createdUser.save();
        return  createdUser;
    }

    findAllUsers(){
        return 'all user';
    }

    updateUser(){
        return 'user updated';
    }
}

module.exports = UserService;