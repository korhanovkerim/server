import express from "express";
import {getUsers, creatUsers} from "../controllers/users.js"

const router = express.Router()

router.get("/", getUsers);
router.post("/users", creatUsers);

export default router;