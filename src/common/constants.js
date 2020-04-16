export const API_URL = "https://wbdv-generic-server.herokuapp.com/api/001893314";
export const WIDGET_API_URL= "http://localhost:8080/api/";
export const TOPIC_API_URL= "http://localhost:8080/api";
export const COURSE_API_URL = `${API_URL}/courses`
export const MODULES_API_URL = `${API_URL}/modules`
export const LESSONS_API_URL = `${API_URL}/lessons`
export const TOPICS_API_URL = `${TOPIC_API_URL}/topics`
export const COURSES_MODULES_API_URL = (courseId) => `${API_URL}/courses/${courseId}/modules`
export const MODULES_LESSONS_API_URL = (moduleId) => `${API_URL}/modules/${moduleId}/lessons`
export const LESSONS_TOPICS_API_URL = (lessonId) => `${TOPIC_API_URL}/lessons/${lessonId}/topics`
