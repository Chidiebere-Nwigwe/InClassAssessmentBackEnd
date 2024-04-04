const userData = require('../models/user');

const getUsers = (req,res)=>{
    res.json(userData);
}

module.exports = getUsers;