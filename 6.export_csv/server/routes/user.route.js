import express from "express";
import { deleteUser, getUser, getAllUser, createUser } from "../controllers/user.controller.js"

const router = express.Router();

router.delete("/:id", deleteUser)
router.get("/:id", getUser);
router.get("/", getAllUser);
router.post("/", createUser);

export default router;