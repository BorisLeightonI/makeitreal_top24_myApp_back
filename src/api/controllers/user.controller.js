const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const genToken = (id) => jwt.sign({ id }, process.env.SECRET_KEY||'secretkey', { expiresIn: 60 * 60 * 24 })
const errMessage = (res, message, err) => res.status(400).json({ message, error: err })

module.exports = {
  
  signup(req, res) {
    const {name, email, password } = req.body
    bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUNDS)||8)
          .then(encPassword => User.create({name, email, password: encPassword, provider:'local'})
            .then(user => res.status(200).json({ message: "User created successfully", data: { email, token: genToken(user._id) } }))
            .catch(err => errMessage(res, "User could not be created", err))
          )
          .catch(err => errMessage(res, "encryption could not be created", err))
  },

  signupAuth0(req,res){
    console.log(req.body)
    const {name, email, provider} = req.body
    User.create({name, email, provider})
      .then(user => res.status(201).json({ message: "User created successfully", data: { email, token: genToken(user._id) } }))
      .catch(err => errMessage(res, "User could not be created", err))
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body

      const user = await User.findOne({ email })
      if (!user) throw new Error("Email o contraseña invalidos")

      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) throw new Error("Email o contraseña invalidos")

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY||'secretkey',{ expiresIn: 60 * 60 * 24 })

      res.status(201).json({ message: "User login successfully", data: { email, token } })
    } catch (error) {
      res.status(400).json({ message: "User could not login", error: error.message })

    }
  }
}