const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    fullname :{
        firstname:{
            type:String,
            required:true,
            minlength:[3, 'First Name must be at least 3 characters long']
        },
        lastname:{
            type:String,
            minlength:[3, 'Last Name must be at least 3 characters long']
        }

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5, 'Email must be at least 5 character long']
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
    },
})


userSchema.method.generateAuthTokken = function(){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET );
    return token;
}


userSchema.method.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

userSchema.method.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

