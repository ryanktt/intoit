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
        //encrypt password
        const salt =  await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //register user
        user = new User({name, email, password: hashedPassword});
        await user.save()
        res.json('Sucesso');

        const payload = {
            user: {
              id: user.id
            }
        }
        jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            { expiresIn: '15 days' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });
    } catch (err) {
        console.error(err);
        res.status(500);
    }

};

exports.postLogin = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user ) {
          return res.status(400).json({errors:[{msg: 'Credenciais Inválidas'}]});
        }

        const passwordMatch  =  await bcrypt.compare(password, user.password);

        if(!passwordMatch ) { 
          return res.status(400).json({errors:[{msg: 'Credenciais Inválidas'}]});
        }

        const payload = {
            user: {
              id: user.id,
              name: user.name
            }
        }

        jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            { expiresIn: '15 days' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch (err) {
        console.error(err);
        res.status(500).send('Erro de Servidor');
    }

};