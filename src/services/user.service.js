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
  

//delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };


//update single updatesignupuser
// export const updateSignupUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };



//get all users
// export const signupGetAllUsers = async () => {
//   const data = await User.find();
//   return data;
// };




// //create new user
// export const newUser = async (body) => {
//   const data = await User.create(body);
//   return data;
// };

// //update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };

// //delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };
