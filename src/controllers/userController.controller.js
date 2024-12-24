
import { User } from "../models/user.models.js";
import asyncHandler from "../utils/asyncHandler.js";

//Logout Controller 

const logoutUser=asyncHandler(async(requestAnimationFrame,res)=>{

    //Custom middleware creates user
    const user=req.user


    //find user by id and update 
    await User.findByIdAndUpdate(
        user,
        {
            $set:{          
                refreshToken:undefined      //remove refreshToken if logging out 
            }
        },
        {
            new:true
        }
    )

    const options={   //for securing the http process
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)    //clearing tokens passed through cookies while logging in
    .clearCookie("refreshToken",options)
    .json({message:"User Logged Out seccessfully"})
    

})

export {logoutUser}
