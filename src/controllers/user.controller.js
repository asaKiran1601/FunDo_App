import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
// import User from '../models/user.model'

export const signup = async (req, res, next) => {

  try {
    const data = await UserService.signup(req.body,userID);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User created successfully'
    });

  } catch (error) {
    next(error);
  }
};


export const signin = async (req, res, next) => {

  try {
    // console.log(req.body);
    const data = await UserService.signin(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      Token: data,
      message: 'Login successfully'
    });
  } catch (error) {
    next(error);
  }
};
