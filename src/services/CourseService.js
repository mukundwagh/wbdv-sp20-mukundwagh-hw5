import {COURSE_API_URL} from "../common/constants";

export const findAllCourses = () =>
    fetch(COURSE_API_URL)
        .then(response => response.json());


export const findCourseById = async (courseId) => {
    const response = await fetch(`${COURSE_API_URL}/${courseId}`, {
        method: 'GET'
    });
    return await response.json()
};

export const createCourse = async (course) => {
    let response = await fetch(COURSE_API_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export const deleteCourse = async (courseId) => {
    let response = await fetch(`${COURSE_API_URL}/${courseId}`, {
        method: 'DELETE'
    });
    return await response.json()
}

export const updateCourse = async (course) => {
    let response = await fetch(`${COURSE_API_URL}/${course._id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

