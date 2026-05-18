import express from "express";
const router = express.Router();

import * as registrationController  from "../controllers/registrationController.js";
import * as loginController from "../controllers/loginController.js"

router.post("/register", registrationController.registration);
router.post("/login", loginController.login);

export default router;