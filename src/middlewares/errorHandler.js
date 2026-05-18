export const notFoundHandler =(req, res, next)=>{
  return res.status(404).json({message:"Route not found"}) 
}

export const errorHandler = (err, req, res, next)=>{
  // console.log(err);

  const status = err.statusCode || 400;
  res.status(status).json({message: err.message || "Something went wrong", stack: err.stack})
}