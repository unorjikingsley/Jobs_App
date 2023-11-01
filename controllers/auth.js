const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors')
// const bcrypt = require('bcryptjs'); // for storing password in encrypted code and not string
// const jwt = require('jsonwebtoken')

const register = async (req, res) => {
  const { name, email, password } = req.body

  // if(!name || !email || !password) {
  //   throw new BadRequestError('Please provide name, email and password')   
  // }

  // sent to models/User.js 
  // const salt = await bcrypt.genSalt(10); // salt means random bytes and we do that by runnin gemsalt
  // const hashedPassword = await bcrypt.hash(password, salt) // hash looks for the password n d salt

  // const tempUser = { name, email, password: hashedPassword }

  // const user = await User.create({ ...tempUser })

  const user = await User.create({ ...req.body });
  // const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtSecret', { expiresIn: '30d'})
  // res.status(StatusCodes.CREATED).json({ user }) // this shows the user details in postman 

  const token = user.createJWT()
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  res.send('login user')
}

module.exports = { register, login }
