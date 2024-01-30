import express from 'express';
import * as userController from '../controllers/user.controller';
// import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// Sign-up API -------------------------

//route to create a new signup user
router.post('/signup', userController.signup);

// Sign-In API ------------------------

//route to create a new signin user
router.post('/signin', userController.signin);


// ----------------------
// //route to create a new user
// router.post('', newUserValidator, userController.newUser);

// //route to get a single user by their user id
// router.get('/email', userController.getUser);

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

// //route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);

export default router;
