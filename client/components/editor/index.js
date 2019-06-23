import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Index extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            title: ''
        }
    }
    titleChange = (ev) => {
        this.setState({
            title: ev.target.value
        });
    };
    textChange = (content, delta, source, editor) => {
        console.log(content);
        console.log(delta);
        console.log(source);
        console.log(editor);
        // this.setState({
        //     text: value
        // })
    };

    render() {
        const option = {
            toolbar: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
                ['link','image'],

                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction

                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],

                ['clean']
            ]
        };
        const {titleChange, textChange} = this;
        const {text} = this.props;

        return (
            [
                <div className={'input-title'} key={1}>
                    <input type={'text'} placeholder={'输入文章标题...'} onChange={titleChange}/>
                </div>,
                <ReactQuill modules={option} onChange={textChange}  key={2} defaultValue={"111"} />
            ]
        )
    }
}

export default Index;