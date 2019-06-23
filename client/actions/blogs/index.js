import req from '../async_config';
import {blog} from "../action_type";

//博客逻辑操作
/*
*博客展示
* */
export const blog_display = () => async dispatch => {
    let {data, status, statusText} = await req.get('/api/blog/display');
    console.log(dispatch);
    dispatch({
        type: blog.display,
        page: 1,
        content: data,
        status: status,
        statusText: statusText
    });
};

/*
* 博客更多项
* */
export const blog_more = () => async (dispatch, getState) => {
    let {blog:{page}} = getState();
    page++;
    let {data, status, statusText} =  await req.get('/api/blog/more',{page: page});
    dispatch({
        type: blog.more,
        page: page,
        content: data,
        status: status,
        statusText: statusText
    })
};