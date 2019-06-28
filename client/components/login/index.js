import React from 'react';
import {Modal, Button, Form, Checkbox, message} from 'antd';
import {connect} from 'react-redux';

import {login} from '&actions/account';
import {ControlInput} from '&components/input';
import {loginForAuthorization} from '&actions/account';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: {
                visible: false
            },
        }
    }
    open_modal = () => {
        this.setState({
            modal: {
                visible: true
            }
        })
    };
    close_modal = () => {
        this.setState({
            modal:{
                visible: false
            }
        })
    };
    login = () => {
        let username = this.username_input.state.value;
        let password = this.password_input.state.value;
        const {login} = this.props;
        if(password === ''){
            message.info('密码不能为空');
            return;
        }
        if(username === ''){
            message.info('账号不能为空');
            return;
        }
        login(username, password);
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {account} = this.props;
        if(account.code === 1 && prevProps.account.time !== account.time){
            message.info(account.msg);
        }
    }
    componentDidMount() {
        const {loginForAuthorization} = this.props;
        loginForAuthorization();
    }

    render() {
        const {open_modal, close_modal, login} = this;
        let {modal} = this.state;
        return (
            [
                <Button key={1} onClick={open_modal}>登录</Button>,
                <Modal visible={modal.visible} key={2} footer={null} onCancel={close_modal}>
                    <Form onSubmit={login}>
                        <Form.Item>
                            账号密码登录
                        </Form.Item>
                        <Form.Item>
                            <ControlInput
                                type={'text'}
                                icon={'user'}
                                placeholder={'Input Your Username'}
                                ref={input => this.username_input = input}
                            />
                        </Form.Item>
                        <Form.Item>
                            <ControlInput
                                type={'password'}
                                icon={'lock'}
                                placeholder={'Input Your Password'}
                                ref={input => this.password_input = input}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>Remember me</Checkbox>
                            <a className="login-form-forgot" href="#">
                                Forgot password
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block={true} htmlType={'submit'}>
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            ]
        )
    }
}

const mapStateToProps = state => {
    return {account: state.get('account')};
};
const mapDispatchToProps = dispatch => {
    return {
        login: function (username, password) {
            dispatch(login(username,password));
        },
        loginForAuthorization: function () {
            dispatch(loginForAuthorization());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);