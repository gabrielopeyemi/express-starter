import { verifyJWTToken } from './../../utils/jwt';
import express from 'express';
const bcrypt = require('bcrypt');
import { LoginArgs } from '../../types';

const UserService = require('../users/service');

const UserServiceInstance = new UserService();

class AuthService {
    constructor() {};

    async login(req: express.Request, res: express.Response){

        const { email, password } = req.body;
        const { match, token, data } = await UserServiceInstance.checkUser(email, password);

        if(!match){
            res.status(400).send(`user not found!`);
        }

        if(match){
            res.status(200).json({
                success: match,
                data,
                token,
            });
        }

        await UserServiceInstance.checkUser(email, password)
        
    }

    
}

module.exports = AuthService;