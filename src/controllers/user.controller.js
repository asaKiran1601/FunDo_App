import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
// import User from '../models/user.model'


// Sign-up API
// Get All Users data
// export const signupGetAllUsers = async (req, res, next) => {
//   try {
//     const data = await UserService.signupGetAllUsers();
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'All users fetched successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// To created signup user
export const signup = async (req, res, next) => {

  try {
    const data = await UserService.signup(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });

  } catch (error) {
    next(error);
  }
};

// // To delete signup user
// export const deleteUser = async (req, res, next) => {
// try {
//   await UserService.deleteUser(req.params._id);
//   res.status(HttpStatus.OK).json({
//     code: HttpStatus.OK,
//     data: [],
//     message: 'User deleted successfully'
//   });
// } catch (error) {
//   next(error);
// }
// };

// Sign-In API
// To check signIn user
export const signin = async (req, res, next) => {

  try {
    const data = await UserService.signin(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Login successfully'
    });
  } catch (error) {
    next(error);
  }
};

// // To update the created signup user
// export const updateSigninUser = async (req, res, next) => {
//   try {
//     const data = await UserService.updateSigninUser(req.params._id, req.body);
//     res.status(HttpStatus.ACCEPTED).json({
//       code: HttpStatus.ACCEPTED,
//       data: data,
//       message: 'User updated successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };


// To update the created signup user
// export const updateSignupUser = async (req, res, next) => {
//   try {
//     const data = await UserService.updateSignupUser(req.params._id, req.body);
//     res.status(HttpStatus.ACCEPTED).json({
//       code: HttpStatus.ACCEPTED,
//       data: data,
//       message: 'User updated successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// Sign-In API

  


// export const getAllUsers = async (req, res, next) => {
//   try {
//     const data = await UserService.getAllUsers();
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'All users fetched successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  * Controller to get a single user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const getUser = async (req, res, next) => {
//   try {
//     const data = await UserService.getUser(req.params._id);
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: data,
//       message: 'User fetched successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  * Controller to create a new user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const newUser = async (req, res, next) => {
//   try {
//     const data = await UserService.newUser(req.body);
//     res.status(HttpStatus.CREATED).json({
//       code: HttpStatus.CREATED,
//       data: data,
//       message: 'User created successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  * Controller to update a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const updateUser = async (req, res, next) => {
//   try {
//     const data = await UserService.updateUser(req.params._id, req.body);
//     res.status(HttpStatus.ACCEPTED).json({
//       code: HttpStatus.ACCEPTED,
//       data: data,
//       message: 'User updated successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// /**
//  * Controller to delete a user
//  * @param  {object} req - request object
//  * @param {object} res - response object
//  * @param {Function} next
//  */
// export const deleteUser = async (req, res, next) => {
//   try {
//     await UserService.deleteUser(req.params._id);
//     res.status(HttpStatus.OK).json({
//       code: HttpStatus.OK,
//       data: [],
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     next(error);
//   }
// };
