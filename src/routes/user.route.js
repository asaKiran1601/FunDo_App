import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();


//route to create a new signup user
router.post('/signup', userController.signup);


//route to create a new signin user
router.post('/signin', userController.signin);

export default router;
