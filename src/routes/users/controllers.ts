import express, { Router } from 'express';
const UserService = require('./service');
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUi from 'swagger-ui-express';
const UserServiceInstance = new UserService();


const router = Router();

// create users
// Routes:
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.post('/', async (req: any, res: any) => {
    const response = await UserServiceInstance.createUser();
    return response
});

// Get all user
router.get('/all',async (req, res) => {
    return 'all users';
});

// update one user
router.put('/update', async (req, res) => {
    return 'you are updated!'
});



module.exports = router;