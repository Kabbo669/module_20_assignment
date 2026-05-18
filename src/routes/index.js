import express from "express";
const router = express.Router();
import authRoute from "./authRoute.js";
import courseRoute from "./courseRoute.js";  


router.use("/api/v1", authRoute);
router.use("/courses", courseRoute)

export default router;