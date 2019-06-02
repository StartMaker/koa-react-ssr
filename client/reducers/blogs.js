import {blog} from "../actions/action_type";

export default function (state = {}, action) {
    switch (action.type) {
        case blog.display:
            const {page, status, content, statusText} = action;
            return {
                page,
                status,
                statusText,
                content,
                time: Date.now()
            };
        default:
            return state;
    }
}