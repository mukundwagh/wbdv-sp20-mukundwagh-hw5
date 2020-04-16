import {COURSES_MODULES_API_URL, MODULES_API_URL} from "../common/constants";

export const findModuleForCourse = (courseId) =>
    fetch(COURSES_MODULES_API_URL(courseId))
        .then(response => response.json())

export const createModule = (courseId, module) =>
    fetch(COURSES_MODULES_API_URL(courseId), {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())


export const deleteModule = async (moduleId) => {
    let response = await fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'DELETE'
    })
    return await response.json()
};

export const updateModule = async (moduleId,module) => {
    let response = await fetch(`${MODULES_API_URL}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};



