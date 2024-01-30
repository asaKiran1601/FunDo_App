import User from '../models/user.model';
import bcrypt from 'bcrypt';


// signUp - API
export const signup = async (body) => {

  let {Email} = body;
  const existingUser = await User.findOne({Email : Email});

  if(existingUser){
    throw new Error("User already exist with same Email!");
  }
    // hash the password using bycrypt
    const saltRounds = 2;
    const hasdedPassword = await bcrypt.hash(body.password ,saltRounds);
    body.password = hasdedPassword
  
  const data = await User.create(body);
  return data;
};

// signIn - API
export const signin = async (body) => {
  const { Email, password } = body;
  const checkEmail = await User.findOne({ Email :Email });
  if (!checkEmail) {
    throw new Error('Invalid Email');
  } else {
    // to check the password which we have entered and the bcrypt password in the database
    const passwordMatched = await bcrypt.compare(password, checkEmail.password )
    if (!passwordMatched) {
      throw new Error('Invalid Password');
    } else {
      return checkEmail;
    }
  }
};