import {Map} from 'immutable';
import {blog} from "../actions/action_type";

export default function (state = Map({}), action) {
    switch (action.type) {
        case blog.display:
            return {
                page: action.page,
                status: action.status,
                statusText: action.statusText,
                content: action.content,
                time: Date.now()
            };
        case blog.more:
            return {
                page: action.page,
                status: action.status,
                statusText: action.statusText,
                content: state.content.concat(action.content),
                time: Date.now()
            };
        default:
            return state;
    }
}