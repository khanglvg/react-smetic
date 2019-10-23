import React from 'react';
import '../css/header.css';
import Icon from './fragments/icon';
import {
    Link,
    withRouter,
} from 'react-router-dom';
import zStorage from '../../storage/storage';
import apiModel from '../../api/apiModel';
import { ROLE_ADMIN } from '../../utils/const';
import fakeAuth from '../../fake-auth-data';
import userConfig from '../../storage/user-config';

const SEARCH_PATH = '/search-result';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            searchValue: '',
        };
        this.handleEnterEvent = this.handleEnterEvent.bind(this);
    }

    async componentDidMount() {
        let temp = [];
        if (userConfig.getRole() === ROLE_ADMIN) {
            const adminId = userConfig.getAdminId();
            console.log(adminId)
            temp = await apiModel.getAdmin({adminId});
        }
        else {
            const userId = userConfig.getUserId();
            temp = await apiModel.getUser({userId});
        }

        if (temp) {
            this.user = temp[0];
        }
        else {
            this.user = {};
        }

        console.log(this.user)
        this.inputNode = document.getElementById('search-input');
        this.inputNode.addEventListener('keyup', this.handleEnterEvent);
        this.setState({
            isLoading: false,
        });
    }

    componentWillUnmount() {
        this.inputNode.removeEventListener('keyup', this.handleEnterEvent);
    }

    handleEnterEvent(e) {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    }

    handleSearchValue = (e) => {
        this.setState({searchValue: e.target.value});
    };

    handleLogOut() {
        fakeAuth.signout(() => {
            zStorage.clearStorage();
            const a = document.createElement('a');
            a.href = '/login';
            a.click();
        });
    }

    handleSearch = () => {
        const arr = this.state.searchValue.split(';');
        let genderValue = [],
            skinTypeValue = '',
            ageRangeValue = {
                minAge: 0,
                maxAge: 100,
            };
        switch (arr.length) {
            case 1: {
                genderValue = arr[0];
                break;
            }
            case 2: {
                genderValue = arr[0];
                skinTypeValue = arr[1].trim();
                break;
            }
            case 3: {
                genderValue = arr[0];
                skinTypeValue = arr[1].trim();
                const min = arr[2].split('-')[0];
                const max = arr[2].split('-')[1];
                ageRangeValue = {
                    minAge: parseInt(min) ?
                        min :
                        0,
                    maxAge: parseInt(max) ?
                        max :
                        100,
                };
                break;
            }
            default:
                break;
        }
        let forMale = false, forFemale = false;
        if (genderValue.includes('cho'.toLowerCase())) {
            genderValue = genderValue.replace('cho', '').trim();
        }
        if (genderValue.toLowerCase() === 'nam') {
            forMale = true;
        }
        if (genderValue.toLowerCase() === 'nữ') {
            forFemale = true;
        }

        let props = {
            isForMale: forMale,
            isForFemale: forFemale,
            skinType: skinTypeValue,
            minAge: ageRangeValue.minAge,
            maxAge: ageRangeValue.maxAge,
        };

        if (arr.length === 1 && this.state.searchValue === '') {
            props = {
                isGetAll: true,
            };
        }
        if (this.props.location.pathname === SEARCH_PATH) {
            this.props.history.replace(SEARCH_PATH, props);
        }
        else {
            this.props.history.push(SEARCH_PATH, props);
        }
    };

    handleCartClick = () => {
        let path = `/checkout`;
        this.props.history.push(path);
    };

    getUserName() {
        if (!this.state.isLoading && this.user && this.user['HovaTen']) {
            const arrName = this.user['HovaTen'].split(' ');
            return arrName[arrName.length - 1];
        }
        else {
            return 'Unknown';
        }
    }

    render() {
        const cartCount = zStorage.getCartCount();
        const {isEng} = this.props;
        const role = userConfig.getRole();
        const {searchValue} = this.state;
        return (
            <header className="App-header">
                <div
                    className="container-fluid d-flex header-container my-navbar">
                    <div
                        className="header-logo-container d-flex align-items-center">
                        <Link href="https://google.com.vn"
                           aria-label="Smetic">
                            <img
                                src="https://www.upsieutoc.com/images/2019/09/26/nho.png"
                                alt="Logo"/>
                        </Link>
                    </div>
                    <div className="row w-100 p-0 m-0">

                        <div
                            className="col-3 p-0 pl-2 d-flex justify-content-center align-items-center header-content-container">
                            <div className="navbar-nav-scroll w-100">
                                <ul
                                    className="navbar-nav bd-navbar-nav flex-row justify-content-around align-items-center">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link active"
                                            to="/home"
                                            onClick="">
                                            {
                                                isEng ?
                                                    'Home' :
                                                    'Trang chủ'
                                            }
                                        </Link>
                                    </li>
                                    <li
                                        className="nav-item dropdown header-content-menu">
                                        <Link className="nav-link "
                                           to="/home"
                                           id="dropdownMenu"
                                           data-toggle="dropdown"
                                           aria-haspopup="true"
                                           aria-expanded="false">
                                            {
                                                isEng ?
                                                    'Menu' :
                                                    'Danh sách'
                                            }
                                        </Link>
                                        <div
                                            className="dropdown-menu header-content-menu-dropdown"
                                            aria-labelledby="dropdownMenu">
                                            <div className="d-flex">
                                                <div
                                                    className="col-4 p-0">
                                                    <div>
                                                        <Link className=""
                                                              to={"/home"}>ABC</Link>
                                                    </div>
                                                    <div>
                                                        <Link className=""
                                                              to={"/home"}>XYZ</Link>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-4 p-0">
                                                    <div>
                                                        <Link className=""
                                                              to={"/home"}>ABC</Link>
                                                    </div>
                                                    <div>
                                                        <Link className=""
                                                              to={"/home"}>XYZ</Link>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-4 p-0">
                                                    <div>
                                                        <Link className=""
                                                              to={"/home"}>ABC</Link>
                                                    </div>
                                                    <div>
                                                        <Link className=""
                                                              to={"/home"}>XYZ</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link "
                                           to={"/home"}
                                           onClick="ga('send', 'event', 'Navbar', 'Community links', 'Examples');">
                                            {
                                                isEng ?
                                                    'About Us' :
                                                    'Về chúng tôi'
                                            }
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link"
                                           to={"/home"}
                                           onClick="ga('send', 'event', 'Navbar', 'Community links', 'Themes');"
                                           target="_blank"
                                           rel="noopener">{
                                            isEng ?
                                                'Contact Us' :
                                                'Liên hệ'
                                        }
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="col-9 p-0 d-flex justify-content-end align-items-center">

                            <div
                                className="col-9 m-0 p-0 d-flex align-items-center">
                                <div className="input-group">
                                    <input type="text"
                                           id={'search-input'}
                                           className="form-control remove-outline"
                                           placeholder={isEng ?
                                               'What are you looking for?' :
                                               'Bạn đang tìm gì?'}
                                           aria-label="Recipient's username"
                                           aria-describedby="basic-addon2"
                                           value={searchValue}
                                           onChange={this.handleSearchValue}/>
                                    <div className="input-group-append">
                                        <button
                                            className="btn header-search-box-button remove-outline"
                                            onClick={this.handleSearch}
                                            type="button">
                                            <Icon
                                                name={'searchIcon'}
                                                width={20}
                                                height={20}
                                                color={'white'}/>
                                            <span
                                                className="ml-2">
                                                {
                                                    isEng ?
                                                        'Search' :
                                                        'Tìm Kiếm'
                                                }
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 row p-0 m-0 ml-2">
                                <div
                                    className="col-5 p-2 d-flex align-items-center header-shopping-cart">
                                    <button
                                        onClick={this.handleCartClick}
                                        className="btn w-100 d-flex justify-content-around align-items-center remove-outline">
                                        <Icon
                                            name={'shoppingCart'}
                                            width={20}
                                            height={20}
                                            color={'white'}/>
                                        <span
                                            className="header-shopping-cart-title">
                                        {
                                            isEng ?
                                                'Cart' :
                                                'Giỏ'
                                        }
                                    </span>
                                        <span
                                            className="header-shopping-cart-count">
                                            {cartCount}
                                    </span>
                                    </button>
                                </div>
                                <div
                                    className="col-7 p-2 d-flex align-items-center header-user-account dropdown">
                                    <button
                                        className="btn w-100 d-flex justify-content-around align-items-center dropdown-toggle remove-outline"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                        <Icon
                                            name={'userShape'}
                                            width={20}
                                            height={20}
                                            color={'white'}/>
                                        <span>
                                            {
                                                this.getUserName()
                                            }
                                    </span>
                                        <Icon
                                            name={'downArrow'}
                                            width={17}
                                            height={17}
                                            color={'white'}/>
                                    </button>
                                    <div className="dropdown-menu"
                                         aria-labelledby="dropdownMenuButton">
                                        {
                                            role === ROLE_ADMIN ?
                                                <Link
                                                    className="dropdown-item"
                                                    to="/order-report/">
                                                    {isEng ?
                                                        'Orders management' :
                                                        'Quản lý đơn hàng'}
                                                </Link>
                                                :
                                                null
                                        }
                                        {
                                            role === ROLE_ADMIN ?
                                                <Link
                                                    className="dropdown-item"
                                                    to="/product-report/">
                                                    {isEng ?
                                                        'Products by vendor management' :
                                                        'Qyản Lý sản phẩm theo vendor'}
                                                </Link>
                                                :
                                                null
                                        }
                                        {
                                            role !== ROLE_ADMIN ?
                                                <Link className="dropdown-item"
                                                      to="/checkout">{isEng ?
                                                    'My orders' :
                                                    'Giỏ hàng của tôi'}</Link>
                                                :
                                                null
                                        }
                                        <div
                                            className="dropdown-divider"/>
                                        <button
                                            className="color-red dropdown-item"
                                            onClick={this.handleLogOut.bind(this)}>
                                            {
                                                isEng ?
                                                    'Log out' :
                                                    'Đăng xuất'
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);