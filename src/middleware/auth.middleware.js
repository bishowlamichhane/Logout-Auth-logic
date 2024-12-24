import { User } from "../models/user.models.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'



// verification function to verify the jwt 
export const verifyJWT=asyncHandler(async(req,res,next)=>{

try{
    //get token from cookies ( which were saved during logging in ) or from the req header from Bearer
    const token=req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")

    if(!token){
        res.status(401).json({message:"Unauthorized Access"})
    }

    //match token with access token

    const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)


    //filter the user model removing the password and refreshToken on the user side 

    const user = await User.findById(decodedToken?._id).select(
        "-password -refreshToken"
    )

    if(!user)
        res.status(401,"Invalid Access token")


    //create a new req.user 
    req.user=user

    //call the next function after this middleware completes
    next()

}catch(error){
    res.status(401,error?.message || "Invalid access token")
}

})
