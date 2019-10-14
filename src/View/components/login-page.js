import React from 'react';
import '../css/login-page.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    _handleUserNameChange(e) {
        this.setState({userName: e.target.value});
    }

    _handlePasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        const {userName, password} = this.state;
        return (
          <div
            className={'d-flex justify-content-center align-items-center login-background-container'}>
              <div className={'login-container'}>
                  <div
                    className={'d-flex justify-content-center align-items-center login-header'}>
                      <h2 className={'p-0 m-0'}>Smetic Login</h2>
                  </div>

                  <div className={'d-flex flex-wrap m-0 mt-5 mb-3 login-my-row'}>
                      <div className={'col-12 col-xl-3 p-0 d-flex justify-content-center align-items-center'}>
                          <p className={'login-my-title m-0'}>User Name:</p>
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

                  <div className={'d-flex flex-wrap m-0 mt-3 mb-2 login-my-row'}>
                      <div className={'col-12 col-xl-3 p-0 d-flex justify-content-center align-items-center'}>
                          <p className={'login-my-title m-0'}>Password:</p>
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

                  <div className={'d-flex align-items-center justify-content-around login-btn-container'}>
                      <button
                        className="d-flex btn login-my-btn align-items-center justify-content-around"
                        onClick={'a'}>
                          LOGIN
                      </button>
                  </div>
              </div>
          </div>
        );
    }

}

export default LoginPage;