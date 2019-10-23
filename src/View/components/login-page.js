import React from 'react';
import '../css/login-page.css';
import {
    ROLE_ADMIN,
    ROLE_USER,
} from '../../utils/const';
import fakeAuth from '../../fake-auth-data';
import userConfig from '../../storage/user-config';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isShowError: false,
        };

        this.userNameNodeKeyUp = this.userNameNodeKeyUp.bind(this);
        this.passwordNodeKeyUp = this.passwordNodeKeyUp.bind(this);
    }

    componentDidMount() {
        this.userNameNode = document.getElementById('username-input');
        this.passwordNode = document.getElementById('password-input');
        this.userNameNode.addEventListener('keyup', this.userNameNodeKeyUp);
        this.passwordNode.addEventListener('keyup', this.passwordNodeKeyUp);
    }

    userNameNodeKeyUp(e) {
        if (e.key === 'Enter') {
            this.passwordNode.focus();
        }
    }

    passwordNodeKeyUp(e) {
        if (e.key === 'Enter') {
            this._handleLogin();
        }
    }

    _handleUserNameChange(e) {
        this.setState({userName: e.target.value});
    }

    _handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    _handleLogin() {
        let history = this.props.history;
        const {userName, password} = this.state;
        if (userName === 'phamvy' && password === '123456') {
            // callback login thanh cong w admin
            fakeAuth.authenticate(() => {
                const userId = 'SA-01';
                userConfig.setAdminId(userId);
                userConfig.setRole(ROLE_ADMIN);
                history.push('/home');
            });
        }
        else if (userName === 'levogiakhang' && password === '123456') {
            // callback login thanh cong w user
            fakeAuth.authenticate(() => {
                const userId = 'SM-0410';
                userConfig.setUserId(userId);
                userConfig.setRole(ROLE_USER);
                history.push('/home');
            });
        }
        else {
            this.setState({isShowError: true});
        }
    }

    render() {
        const {userName, password, isShowError} = this.state;
        return (
            <div
                className={'d-flex justify-content-center align-items-center login-background-container'}>
                <div className={'login-container'}>
                    <div
                        className={'d-flex justify-content-center align-items-center login-header'}>
                        <h2 className={'p-0 m-0'}>Smetic Login</h2>
                    </div>

                    <div
                        className={'d-flex pr-5 pl-5 flex-wrap m-0 mt-5 mb-3 login-my-row'}>
                        <div
                            className={'col-12 col-xl-3 p-0 d-flex justify-content-start align-items-center'}>
                            <p className={'login-my-title m-0'}>
                                User name:</p>
                        </div>
                        <div className={'col-12 col-xl-9 p-0'}>
                            <input style={{
                                minWidth: '100px',
                                width: '100%',
                                minHeight: '34px',
                                height: '100%',
                                borderRadius: '5px',
                                outline: 'none',
                                fontSize: '1rem',
                                textAlign: 'center',
                            }}
                                   id={'username-input'}
                                   type={'text'}
                                   placeholder={`Input user name`}
                                   value={userName}
                                   onChange={this._handleUserNameChange.bind(this)}/>
                        </div>
                    </div>

                    <div
                        className={'d-flex pr-5 pl-5 flex-wrap m-0 mt-3 mb-2 login-my-row'}>
                        <div
                            className={'col-12 col-xl-3 p-0 d-flex justify-content-start align-items-center'}>
                            <p
                                className={'login-my-title m-0'}>Password:</p>
                        </div>
                        <div className={'col-12 col-xl-9 p-0'}>
                            <input style={{
                                minWidth: '100px',
                                width: '100%',
                                minHeight: '34px',
                                height: '100%',
                                borderRadius: '5px',
                                outline: 'none',
                                fontSize: '1rem',
                                textAlign: 'center',
                            }}
                                   id={'password-input'}
                                   type={'password'}
                                   placeholder={`Input password`}
                                   value={password}
                                   onChange={this._handlePasswordChange.bind(this)}/>
                        </div>
                    </div>

                    {
                        isShowError ?
                            <div
                                className={'d-flex mt-2 align-items-center justify-content-center login-error-msg'}>
                                <p className={'m-0'}>*User name or
                                    password is incorrect!</p>
                            </div>
                            :
                            null
                    }

                    <div
                        className={'d-flex align-items-center justify-content-center login-btn-container'}>
                        <button
                            className="d-flex btn login-my-btn align-items-center justify-content-around"
                            onClick={this._handleLogin.bind(this)}>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginPage;