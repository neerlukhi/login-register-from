
var rgmodel = require('../model/register')

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

exports.register = async (req, res) => {
    var data = await rgmodel.create(req.body);
    res.status(200).json({
        status: 'Register Success',
        data
    })
}

localStorage.setItem('mykey', 0);

exports.login = async (req, res) => {

    var data = await rgmodel.find({ email: req.body.email });
    var key = localStorage.getItem('mykey');

    // var key1 = 0;

    if (key == 0) {

        if (data.length == 1) {
            if (data[0].password == req.body.password) {
                localStorage.setItem('mykey', 1)
                // key1 = 1;
                res.status(200).json({
                    status: 'Login Success'
                })
            }
            else {
                res.status(200).json({
                    status: 'Check Your email and password'
                })
            }
        }
        else {
            res.status(200).json({
                status: 'Check Your email and password'
            })
        }
    }
    else {
        res.status(200).json({
            status: 'already Login'
        })
    }
}