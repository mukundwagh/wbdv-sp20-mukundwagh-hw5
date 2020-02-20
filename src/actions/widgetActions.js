export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC = "FIND_WIDGETS_FOR_TOPIC"

export const MOVE_UP="MOVE_UP"
export const MOVE_DOWN = "MOVE_DOWN"

export const createWidgetAction = (newWidget) => ({
    type: CREATE_WIDGET,
    newWidget: newWidget
})

export const deleteWidgetAction = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
})

export const findWidgetsForTopicAction = (widgets) => ({
    type: FIND_WIDGETS_FOR_TOPIC,
    widgets: widgets
})

export const updateWidgetAction = (widgetId, widget) => ({
    type: UPDATE_WIDGET,
    newWidget: widget,
    widgetId: widgetId
})


export const moveUpAction = (index,widgetId) => ({
    type: MOVE_UP,
    index: index,
    widgetId: widgetId
})



export const moveDownAction = (index,widgetId) => ({
    type: MOVE_DOWN,
    index: index,
    widgetId: widgetId
})
