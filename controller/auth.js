import User from "../model/user";
import jwt from "jsonwebtoken";
// Đăng kí
export const signup = async (req,res) => {
    const {email,name,password}=  req.body
    try {
        const exitUser = await User.findOne({email}).exec();
        if(exitUser){
           res.json({
               message:"Email của bạn đã tồn tại"
           })
        };
        const user = await new User({email,name,password}).save();
        res.json({
            user:{
                _id :user._id,
                email:user.email,
                name:user.name,
                role:user.role

            }
        })
    } catch (error) {
        
    }
}
// Đăng nhập

export const signin = async (req,res)=>{
    const {email,password}= req.body;


    try {
        const user = await User.findOne({email}).exec();
        if(!user){
            res.status(400).json({
                message:"Email đã tồn tại"
            })
        }
        if(!user.authenticate(password)){
            res.status(400).json({
                message:"Sai thông tin mật khẩu"
            })
        }
        const token = jwt.sign({_id:user.id},'123456',{expiresIn: 60*60});

    res.json({
        message:"Bạn đã đăng nhập thành công",
        token,
        user:{
           
            _id:user._id,
            email:user.email,
            name:user.name,
            role:user.role
        }
    })
    } catch (error) {
        
    }
}

