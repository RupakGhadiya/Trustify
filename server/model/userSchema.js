const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default:Date.now
    },
    message:[
        {
            name:{
                type: String,
                // require: true
            },
            email:{
                type: String,
                // require: true
            },
            messages:{
                type: String,
                require: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
});

// password hash 

userSchema.pre('save', async function (next) {
    console.log("hii from inside")
    if (this.isModified('password')) {
        console.log("hii i am per password")
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// token generate 

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err)
    }
}

// store of message 

userSchema.methods.addMessage = async function (name,email,message) {
    try{
        this.messages = this.messages.concat({name,email,message});
        await this.save();
        return this,messages;

    } catch (error){
        console.log(error)
    }

}


const User = mongoose.model('USER', userSchema);

module.exports = User;