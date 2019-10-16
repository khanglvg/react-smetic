import React from 'react';
import '../css/login-page.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            isShowError: false,
        };
    }

    _handleUserNameChange(e) {
        this.setState({userName: e.target.value});
    }

    _handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    _handleLogin() {
        console.log(this.props.onClick())
        if (this.state.userName === 'admin') {
            if (this.state.password === 'admin123456') {
                // callback login thanh cong w admin
                this.props.authenCallback(true);
            }
        }
        else if (this.state.userName === 'user') {
            if (this.state.password === 'user123456') {
                // callback login thanh cong w user
                this.props.authenCallback(true);
            }
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
                    className={'d-flex flex-wrap m-0 mt-5 mb-3 login-my-row'}>
                      <div
                        className={'col-12 col-xl-3 p-0 d-flex justify-content-center align-items-center'}>
                          <p className={'login-my-title m-0'}>User
                              Name:</p>
                      </div>
                      <div className={'col-12 col-xl-9'}>
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
                                 type={'text'}
                                 placeholder={`Input user name`}
                                 value={userName}
                                 onChange={this._handleUserNameChange.bind(this)}/>
                      </div>
                  </div>

                  <div
                    className={'d-flex flex-wrap m-0 mt-3 mb-2 login-my-row'}>
                      <div
                        className={'col-12 col-xl-3 p-0 d-flex justify-content-center align-items-center'}>
                          <p
                            className={'login-my-title m-0'}>Password:</p>
                      </div>
                      <div className={'col-12 col-xl-9'}>
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
                                 type={'text'}
                                 placeholder={`Input password`}
                                 value={password}
                                 onChange={this._handlePasswordChange.bind(this)}/>
                      </div>
                  </div>

                  {
                      isShowError ?
                        <div className={'d-flex mt-2 align-items-center justify-content-center login-error-msg'}>
                            <p className={'m-0'}>*User name or password is incorrect!</p>
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