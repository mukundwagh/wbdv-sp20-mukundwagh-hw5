import {LESSONS_API_URL, MODULES_LESSONS_API_URL} from "../common/constants";

export const findLessonsForModule = (moduleId) =>
    fetch(MODULES_LESSONS_API_URL(moduleId))
        .then(response => response.json())

export const createLesson = (moduleId, lesson) =>
    fetch(MODULES_LESSONS_API_URL(moduleId), {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteLesson = async (lessonId) => {
    let response = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const updateLesson = async (lessonId,lesson) => {
    let response = await fetch(`${LESSONS_API_URL}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export default {
    updateLesson, createLesson, deleteLesson, findLessonsForModule
}
