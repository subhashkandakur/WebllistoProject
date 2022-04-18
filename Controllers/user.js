const bcrypt = require("bcrypt")
const userModel = require("../Models/user")

const jwt = require("jsonwebtoken")

module.exports.userSignUp = (req, res) => {

    const { User_Name, email_id, Password, Phone_Number,role } = req.body
    console.log(req.body)
    const saltsRound = 10;
    bcrypt.genSalt(saltsRound, function (err, salt) {
        bcrypt.hash(Password, salt, function (err, hash) {
            if (err) {
                res.json({ message: "Unable to create new User" })
            }
            userModel.find({ email_id: email_id }).then((result) => {
                console.log('res---', result);
                if (result.length > 0) {
                    res.status(200).json({ message: "This EmailId is already regesistered " })

                } else {
                    userModel.create({ User_Name, email_id, Phone_Number, Password: hash, role }).then(() => {
                        res.status(201).json({ message: 'Successfuly create new user' })
                    }).catch(err => {
                        res.status(403).json(err);
                    })
                }
            })


        })
    })

}




function generateAccessToken(id) {
    return jwt.sign(id, process.env.TOKEN_SECRET);
}



module.exports.userLogin = (req, res) => {
    const { email_id, Password } = req.body;
    console.log(req.body);
    userModel.find({ email_id: email_id }).then(user => {
        if (user.length > 0) {

            console.log(email_id, Password)
            bcrypt.compare(Password, user[0].Password, function (err, response) {
                if (err) {
                    console.log(err)
                    return res.json({ success: false, message: 'Something went wrong' })
                }
                if (response) {
                    console.log(JSON.stringify(user))
                    const jwttoken = generateAccessToken(user[0].id);
                    res.json({ token: jwttoken, success: true, message: 'Successfully Logged In' })
                    // Send JWT
                } else {
                    // response is OutgoingMessage object that server response http request
                    return res.status(401).json({ success: false, message: 'passwords do not match' });
                }
            });
        } else {
            console.log(email_id)
            return res.status(404).json({ success: false, message: 'passwords do not match' })
        }
    })
}


module.exports.admin= (req,res)=>{
    const role = req.body.role

    if(role==="admin"){
        



    }

    
    
    

}







