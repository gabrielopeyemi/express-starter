import express, { Router } from 'express';

const AuthService = require('./service');

const router = Router();

const AuthServiceInstance = new AuthService();

router.post('/login', async (req: express.Request, res: express.Response) => {
    await AuthServiceInstance.login(req, res);
    // res.send({response, succes: true});
});


module.exports = router;