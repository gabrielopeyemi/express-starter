import UserModel from './../../schema/userSchema/users.modal';
import { json } from 'body-parser';
import express from 'express';
import { userArgs, UserTypes } from '../../types';
import { generateJWTToken } from '../../utils/jwt';
const bcrypt = require('bcrypt');

const userModal = UserModel;

class UserService {
    constructor() {}


    // create user
    async createUser(users: userArgs, res: express.Response): Promise<any>{
        // if (users.userRole === "admin" || "user")){
            const saltRounds = 10;


            if((await userModal.findOne({ username: users.username }).exec())) {
               res.status(404).json({ 
                message: "Username already exist",
              });
              return 
            }

            if((await userModal.findOne({ email: users.email }).exec())) {
                res.status(404).json({ 
                 message: "Email already exist",
               });
               return 
            }
            
            const hashedPassword = bcrypt.hashSync(users.password, bcrypt.genSaltSync(saltRounds));
            console.log({ hashedPassword });

            const createdUser = new userModal({
                firstName: users.firstName,
                lastName: users.lastName,
                username: users.username,
                email: users.email,
                userRole: users.userRole,
                password: hashedPassword,  //hash
            });
            await createdUser.save();

            const newDetails = {
                _id: createdUser._id,
                firstName: createdUser.firstName,
                lastName: createdUser.lastName,
                username: createdUser.username,
                email: createdUser.email,
                userRole: createdUser.userRole,
                date: createdUser.date,
              }
            const token = generateJWTToken(newDetails);
            res.send({
                success: true,
                data: newDetails,
                token
            });
        // }
        // console.log(users.userRole);
        // res.status(500).send('usertype should be admin or user');
        // return;
    }

    async checkUser(email: string, password: string) {
        //... fetch user from a db etc.

        try {
            const user: any = await userModal.findOne({ email });
            const match = await bcrypt.compare(password, user.password);
            if (match){
                const newDetails = {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    email: user.email,
                    userRole: user.userRole,
                    date: user.date,
                  }
                const token = generateJWTToken(newDetails)
                return {
                    match,
                    data: newDetails,
                    token,
                }
            }
            return {
                match,
                data: undefined,
                token: undefined,
            }

    
        } catch(err){
            return (err);
        }
        
    }

    // find all users
    async findAllUsers(res: express.Response){
        console.log('hello world')
        try{
            const response = await userModal.find();
            res.json(response);
            return ;
        }catch(err){
            console.log({ err });
            res.json({message: err});
            return;
        }
    }

    // update user
    async updateUser(req: express.Request, res: express.Response){
        const users = req.body;
        try{
            const response = await userModal.updateOne({ _id: users._id }, 

                { $set: {
                    firstName: users.firstName,
                    lastName: users.lastName,
                    username: users.username,
                    email: users.email,
                    userRole: users.userRole,
                } }, 

                { upsert: true });
                res.status(200).json(response)
        }catch(error){
            res.json(error)
        }
    }


    // find a user
    async existUser({ email, phoneNumber, id, username }: { email?: string, phoneNumber?: string, id?: string, username: string }): Promise<any>{
        const query = {
            ...(email ? { email } : {}),
            ...(phoneNumber ? { phoneNumber } : {}),
            ...(id ? { _id: id} : {}),
            ...(username ? { username } : {}),
        };

        if (Object.keys(query).length <= 0) {
            return ("Provide an email or userName or an Id")
        };

        try {
            let doc = await userModal.findOne({ query }).exec()
            console.log({ query })
            return doc ? { user: doc, bool: true } : { user: undefined, bool: false}
           } catch (e: any) {
            console.log(e.message)
        }
    }
}

module.exports = UserService;   