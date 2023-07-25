import User from "../models/user.model.js"
import createError from "../utils/createError.js"
// import jwt from "jsonwebtoken";


const deleteUser = async (req, res, next) => {
   await User.findByIdAndDelete(req.params.id)
   res.status(200).json({ "message": "deleted" })
}

const getUser = async (req, res, next) => {
   const user = await User.findById(req.params.id)

   if (!user) {
      return next(createError(404, "No user found with this userId"))
   }

   res.status(200).send(user)
}

const getAllUser = async (req, res, next) => {
   const users = await User.find()
   if (!users) {
      return next(createError(404, "No user found"))
   }
   res.status(200).send(users)
}
const createUser = async (req, res, next) => {
   const newUser = new User({
      username: req.body.username,
      age: req.body.age,
      gender: req.body.gender,

   })
   try {
      const savedUser = await newUser.save()
      res.status(201).json(savedUser)

   } catch (error) {
      next(error)
   }
}

export { deleteUser, getUser, getAllUser, createUser }