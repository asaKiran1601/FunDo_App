import express from 'express';
import * as userController from '../controllers/user.controller';
// import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();


//route to create a new signup user
router.post('/signup', userController.signup);


//route to create a new signin user
router.post('/signin', userController.signin);

export default router;
