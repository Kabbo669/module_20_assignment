import * as authRepository from "../repositories/authRepository.js"
import  {signAuthToken} from "../utils/tokenHelper.js"
import bcrypt from "bcrypt";


export const registerUser = async(email, password, name)=>{
  const existingUser = await authRepository.findUserByEmail(email)
  if(existingUser){
    throw new Error("User already exists")
  }
  const hashedPassword =await bcrypt.hash(password,10)
  const user = await authRepository.createUser(email, hashedPassword, name);
  return user
}

export const loginUser =async (email, password)=>{
 const existingUser = await authRepository.findUserByEmail(email)
//  console.log(existingUser.password);
 if(!existingUser){
  throw new Error("Invalid credentials")
 }
 const isValid =await bcrypt.compare(password, existingUser.password)

 if(!isValid){
  throw new Error("Invalid credentials")
 }
 const token = signAuthToken({id:existingUser._id, email: existingUser.email})
 return {existingUser, token}
}