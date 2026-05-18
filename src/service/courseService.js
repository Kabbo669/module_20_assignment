import * as repo from "../repositories/courseRepository.js";

export const createCourse = (data, userId) => {
  return repo.createCourse({
    ...data,
    createdBy: userId,
  });
};

export const getCourses = () => {
  return repo.getAllCourses();
};

export const getCourseById = (id) => {
  return repo.getById(id);
};

export const updateCourse = (id, data) => {
  return repo.update(id, data);
};

export const deleteCourse = (id) => {
  return repo.remove(id);
};