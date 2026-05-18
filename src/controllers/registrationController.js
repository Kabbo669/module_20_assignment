import { emailRegex } from "../helpers/emailRegex.js";
import { passwordRegex } from "../helpers/passwordRegex.js";
import * as authService  from "../service/authService.js";

export const registration =async (req, res, next) => {
  try{
   const {email, password, name} = req.body;
    if(!email || !password || !name){
      return res.status(400).json({message: "Email, password and name are required"});
    }
    if(!emailRegex(email)){
      return res.status(400).json({message: "Invalid email format"});
    }
    if(!passwordRegex(password)){
      return res.status(400).json({message: "Strong password is required with minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"});
    }
    const user = await authService.registerUser(email,password,name)
    return res.status(201).json({email: user.email, id: user._id});
    
  }catch(error){
    next(error)
  }
} 