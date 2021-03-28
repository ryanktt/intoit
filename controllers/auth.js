const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postSignup = async (req, res) => {
    const {name, email, password} = req.body;

    try {
        //checks if user already exists
        let user = await User.findOne({email: email});

        if(user) {
            return res.status(400).json({errors: [{msg: 'Usuário já Existe'}]});
        }
        //register user
        user = new User({name, email, password});
        await user.save()
        res.json('Sucesso');
    } catch (err) {
        console.error(err);
        res.status(500);
    }

};

exports.postLogin = async (req, res) => {
    const {name, email, password} = req;
    console.log(req.body)
    try {
        //checks if user already exists
        let user = await User.find({email: email});
        console.log(user);
        if(user) {
            return res.status(400).json({errors: [{msg: 'Usuário já Existe'}]});
        }
        //register user
        user = new User(req.body);
        await user.save()
        res.json('Sucesso');
    } catch (err) {
        console.error(err);
        res.status(500);
    }

};