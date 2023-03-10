import express from "express"
import { getUser, getUsers, deleteUser, updateUser } from "../controllers/user.js";
import User from "../models/User.js";

import { verifyToken, verifyUser, verifyAdmin } from "./utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next)=>{
//     res.send("Hello user, you are logged in!")
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next)=>{
//     res.send("Hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next)=>{
//     res.send("Hello admin, you are logged in and you can delete all account")
// })


//get
router.get("/:id",verifyUser, getUser);

//update
router.put("/:id",verifyUser, updateUser);

//delete
router.delete("/:id",verifyUser, deleteUser);
 
//getall
router.get("/",verifyAdmin, getUsers);

router.get("/", (req, res)=>{
    res.send("this is the auth endpoint")
})

router.get("/register", (req, res)=>{
    res.send("this is the auth register endpoint")
})

export default router
