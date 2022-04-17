import express, { Router } from 'express';
const UserService = require('./service');
import { body, validationResult } from 'express-validator';

// path
const { userValidationRules, validate } = require('./../../utils/vaildate');
import { userArgs } from '../../types';


const UserServiceInstance = new UserService();



const router = Router();


router.post('/', userValidationRules(), async (req: express.Request, res: express.Response) => {
    validate(req, res);
    const user: userArgs = req.body;
    const response = await UserServiceInstance.createUser(user);
    return res.status(200).send(response);
});

// Get all user
router.get('/all',async (req: express.Request, res: express.Response) => {
    return await UserServiceInstance.findAllUsers(res)
});

// update one user
router.put('/update', async (req: express.Request, res: express.Response) => {
    return 'you are updated!'
});



module.exports = router;