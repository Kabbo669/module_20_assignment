import User from "../models/userModel.js"

export const findUserByEmail=async (email)=>{
  const user = await User.findOne({email})
  return user
}

export const createUser = async(email, password, name)=>{
  const user = new User({email, password, name})
  await user.save()
  return user
}