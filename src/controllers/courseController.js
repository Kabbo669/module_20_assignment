import * as courseService from "../service/courseService.js";

export const createCourse = async (req, res, next) => {
  try {
    const course = await courseService.createCourse(req.body, req.user.id);
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};

export const getCourses = async (req, res, next) => {
  const courses = await courseService.getCourses();
  res.json(courses);
};

export const getCourseById = async (req, res) => {
  const course = await courseService.getCourseById(req.params.id);
  res.json(course);
};

export const updateCourse = async (req, res) => {
  const course = await courseService.updateCourse(req.params.id, req.body);
  res.json(course);
};

export const deleteCourse = async (req, res) => {
  await courseService.deleteCourse(req.params.id);
  res.json({ message: "Deleted" });
};