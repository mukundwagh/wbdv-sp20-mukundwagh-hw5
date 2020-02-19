import {LESSONS_TOPICS_API_URL,TOPICS_API_URL} from "../common/constants";

export const findTopicsForLesson = (lessonId) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId))
        .then(response => response.json())

export const createTopic = (lessonId, topic) =>
    fetch(LESSONS_TOPICS_API_URL(lessonId), {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteTopic = async (topicId) => {
    let response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'DELETE'
    });
    return await response.json()
};

export const updateTopic = async (topicId,topic) => {
    let response = await fetch(`${TOPICS_API_URL}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json()
};

export default {
    findTopicsForLesson, createTopic, deleteTopic, updateTopic
}
