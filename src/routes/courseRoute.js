import express from "express";
import * as controller from "../controllers/courseController.js";
import  { authMiddleware }  from "../middlewares/authenticationMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, controller.createCourse);
router.get("/", controller.getCourses);
router.get("/:id", controller.getCourseById);
router.put("/:id", authMiddleware, controller.updateCourse);
router.delete("/:id", authMiddleware, controller.deleteCourse);

export default router;