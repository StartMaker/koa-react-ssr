import req from '../async_config';
import {blog} from "../action_type";

export const blog_display = (page,owner) => async dispatch => {
    let {data, status, statusText} = await req.get('/api/blog/display',{page, owner});
    console.log(data);
    console.log(statusText);
    dispatch({
        type: blog.display,
        page: page,
        content: data,
        status: status,
        statusText: statusText
    });
};