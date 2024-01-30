import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';
// import User from '../models/user.model'

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
