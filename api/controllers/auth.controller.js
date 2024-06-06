import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import errorHandler from '../utils/error.js'

const signup = async(req , res , next)=>{

   const{username , email , password} = req.body;
   if(!username || !email || !password || username === '' || password === ''|| email === '')
    next(errorHandler(400 , 'All fields are required'))

const hashedPassword = bcryptjs.hashSync(password , 10);


   const newUser = new User({
    username,
    email,
    password:hashedPassword,
   });

   try {
   await newUser.save();
   res.json({message:'Sign up successful'})
   }
   catch(error){
    next(error);
   }
}
export default signup