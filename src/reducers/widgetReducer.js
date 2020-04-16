import {
  CREATE_WIDGET,
  DELETE_WIDGET,
  FIND_WIDGETS_FOR_TOPIC,
  MOVE_DOWN,
  MOVE_UP,
  UPDATE_WIDGET
} from '../actions/widgetActions'

const arrayMove = require('array-move');

const initialState = {
    widgets : []
}

const widgetReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            }

        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }

        case FIND_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            }

        case UPDATE_WIDGET:
            const updateWidgetIndex = state.widgets.findIndex(i => i._id === action.widgetId)
            state.widgets.splice(updateWidgetIndex, 1, action.newWidget)
            return {
                widgets : state.widgets
            }

        case MOVE_UP:
            state.widgets = arrayMove(state.widgets,action.index, action.index-1);
            return {
                widgets : state.widgets
            }

        case MOVE_DOWN:
            state.widgets = arrayMove(state.widgets,action.index, action.index+1);
            return {
                widgets : state.widgets
            }
        default:
            return state
    }
}

export default widgetReducer