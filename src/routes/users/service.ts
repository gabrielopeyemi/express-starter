import { json } from 'body-parser';
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

    async findAllUsers(res: express.Response){
        console.log('hello world')
        try{
            const response = await postModal.find()
            console.log({ response });
            return res.json(response);
        }catch(err){
            console.log({ err });
            return res.json({message: err});
        }
    }

    updateUser(){
        return 'user updated';
    }
}

module.exports = UserService;