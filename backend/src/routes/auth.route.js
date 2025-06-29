import express from "express";
import {checkAuth,signup,login,logout} from "../controllers/auth.controller.js"
import {protectRoute} from "../middleware/auth.middleware.js"
import { updateProfile } from "../controllers/auth.controller.js";


const router = express.Router();
router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

router.post("/update-Profile",protectRoute, updateProfile);


router.get("/check",protectRoute,checkAuth);

export default router;


