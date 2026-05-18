import Course from "../models/courseModel.js";

export const createCourse = (data) => Course.create(data);

export const getAllCourses = () => Course.find();

export const getById = (id) => Course.findById(id);

export const update = (id, data) =>
  Course.findByIdAndUpdate(id, data, { new: true });

export const remove = (id) => Course.findByIdAndDelete(id);