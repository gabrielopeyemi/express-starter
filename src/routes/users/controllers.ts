import express, { Router } from 'express';
const UserService = require('./service');
import { body, validationResult } from 'express-validator';

// path
const { userValidationRules, validate } = require('./../../utils/vaildate');
import { userArgs } from '../../types';


const UserServiceInstance = new UserService();

const validateUser = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log('hello johnson');
    next();
    // +33 6 26 52 02 09
}

const router = Router();

// create a user
router.post('/create', userValidationRules(), validateUser, async (req: express.Request, res: express.Response) => {
    validate(req, res);
    const { username, email, password }: userArgs = req.body;
    await UserServiceInstance.createUser(req.body, res);
    return;
});

// Get all user
router.get('/',async (req: express.Request, res: express.Response) => {
    return await UserServiceInstance.findAllUsers(res)
});

// update one user
router.put('/update/:id  ', async (req: express.Request, res: express.Response) => {
    return await UserServiceInstance.updateOne(res, req);
});



module.exports = router;