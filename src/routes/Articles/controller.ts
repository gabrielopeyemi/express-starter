import express, { Router } from 'express';
const ArticlesService = require('./service');
import { jwtSecret } from '../../../config/serverConfig';
const jwt = require('jsonwebtoken');

// path
const { userValidationRules, validate } = require('./../../utils/vaildate');
import { userArgs } from '../../types';


const ArticlesServiceInstance = new ArticlesService();

const authUser = async (req: express.Request | any, res: express.Response, next: express.NextFunction) => {
    console.log('check auth user...');
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null) return res.sendStatus(401);
    
    jwt.verify(token, jwtSecret, (err: any, details: any)=>{

        if (err) return res.sendStatus(403);
        req.user = details;
    });

    next();
}

const router = Router();

// create a user
router.post('/create', authUser, async (req?: express.Request | any, res?: express.Response) => {
    return await ArticlesServiceInstance.createArticle(res, req.body, req.user)
});

// Get all user
router.get('/', authUser, async (req: express.Request, res: express.Response) => {
    return await ArticlesServiceInstance.findAllUsers(res)
});

// update one user
router.post('/update/:id', authUser, async (req: express.Request, res: express.Response) => {
    return await ArticlesServiceInstance.updateArticles(req, res)
});

// delete one user
router.post('/delete/:id', authUser, async (req: express.Request, res: express.Response) => {
    return await ArticlesServiceInstance.deleteArticles(req, res)
});



module.exports = router;