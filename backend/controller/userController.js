const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../model/userModel')
const randomstring = require("randomstring");
const asyncHandler = require('express-async-handler');
const Users = require('../config/users');
// get User Data 
// [route: GET /user/me] 
// [@public]
const getUserData = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "User Data",
    });
})


// register User 
// [route: POST /user] 
// [@public]
const registerUser = asyncHandler(async (req, res) => {
    const {
        fullname,
        username,
        email,
        password,
        country,
        ethAddress,
        btcAddress,
        usdtAddress,
        inviteRefCode,
    } = req.body;

    const userData = new Users(
        fullname,
        username,
        email,
        password,
        country,
        ethAddress,
        btcAddress,
        usdtAddress,
        userRefCode,
        inviteRefCode
    );

    userData.fieldsValid(res);

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(password, salt);

    // Generate User RefCode
    const refRand = randomstring.generate({
        length: 8,
        charset: "alphanumeric ",
    });
    userData.userRefCode = `${username}-${refRand}`;


    if (user) {
        res.status(201).json(user);
    } else {
        res.status(400);
        throw new Error("user data is not valid");
    }
    res.status(200).json({
        message: "Register User",
    });
});


// Authenticate User 
// [route: Post /user/login] 
// [@public]
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: `Login user`,
    });

});

// delete User 
// [route: DELETE /user] 
// [@private]
const deleteUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: `delete user ${req.params.id}`,
    });
})  ;

module.exports = {
    getUserData,
    registerUser,
    loginUser,
    deleteUser,
};