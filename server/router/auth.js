const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`hello2`);
});

// using promice method 

// router.post('/register', (req, res) => {
//     const { fname, lname, email, password, cpassword} = req.body;

//     // valedation
//     if (!fname || !lname || !email || !password || !cpassword){
//         return res.status(422).json({ error: "Plz fill the data"});
//     }

//     User.findOne({email:email})
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({error: "Email already exist"});
//         }

//         const user = new User({fname, lname, email, password, cpassword})

//         user.save().then(() =>{
//             res.status(201).json({message: "User register successfully"});
//         }).catch((err)=> res.status(500).json({error: "fail to register"}));
//     }).catch(err => { consol.log(err); });
// })


// using async

router.post('/register', async (req, res) => {
    const { fname, lname, email, password, cpassword } = req.body;

    // valedation
    if (!fname || !lname || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill the data" });
    }
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matcing" });
        } else {
            const user = new User({ fname, lname, email, password, cpassword });

            await user.save();

            res.status(201).json({ message: "User register successfully" });
        }
    } catch (err) {
        console.log(err);
    }
});

// login route

router.post('/login', async (req, res) => {
    try {
        // let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "plz fill the data" })
        }

        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "invalid cradencial" });
            } else {
                res.json({ message: "login successfully" });
            }
        } else {
            res.status(400).json({ error: "invalid cradencial" });
        }
    } catch (err) {
        2
        console.log(err)
    }
})


module.exports = router;