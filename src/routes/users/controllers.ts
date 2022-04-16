import express, { Router } from 'express';
const UserService = require('./service');
import { body, validationResult } from 'express-validator';
import { userArgs } from '../../types';
const UserServiceInstance = new UserService();


const router = Router();


const requestLogger = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    body('email').isEmail();
    
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
    }
    next();
  }

router.post('/', requestLogger, body('username').isEmail(), async (req: express.Request, res: express.Response) => {
    const user: userArgs = req.body;
    const response = await UserServiceInstance.createUser(user);
    return res.status(200).send(response);
});

// Get all user
router.get('/all',async (req: express.Request, res: express.Response) => {
    return 'all users';
});

// update one user
router.put('/update', async (req: express.Request, res: express.Response) => {
    return 'you are updated!'
});



module.exports = router;