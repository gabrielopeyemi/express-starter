import express from 'express';
const { body, validationResult, check } = require('express-validator');

const userValidationRules = () => {
  console.log('here')
  return [

    // firstname
    body('firstName').isLength({ min: 2 })
    .withMessage('Please firstName a valid data'),

    // lastName
    body('lastName').isLength({ min: 2 })
    .withMessage('Please lastName a valid data'),

    // username
    body('username').isLength({ min: 2 })
    .withMessage('Please username a valid data'),

    // userRole
    body('userRole').isLength({ min: 2 })
    .withMessage('Please userRole a valid data'),

    // email
    body('email').isEmail(),

    // password
    check('password')
    .isLength({ min: 5 })
    .matches(/\d/)
    .withMessage('must be at least 5 chars long, must contain a number'),
  ]
}

const validate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return;
  }

  const extractedErrors: any[] = [];

  errors.array().map((err: any) => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}
