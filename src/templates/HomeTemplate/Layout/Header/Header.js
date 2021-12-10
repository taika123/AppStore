import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { history } from '../../../../App'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { TOKEN, USER_LOGIN } from '../../../../util/settings/config'

const { Option } = Select;
// const arrMenuItem = [{title:''}]

export default function Header(props) {

    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value);
    }
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <React.Fragment>
                <button onClick={() => {
                    history.push('/login')
                }} className="self-center px-8 py-3 rounded">{t('signin')}</button>
                <button onClick={() => {
                    history.push('/register')
                }} className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">{t('register')}</button>
                
            </React.Fragment>
        }

        return <Fragment> <button onClick={() => {
            history.push('/Profile')
        }} className="self-center px-8 py-3 rounded">{t('hello')}: {userLogin.taiKhoan}</button>
            <button className="text-yellow-500 mr-5" onClick={() =>{
                    localStorage.removeItem(USER_LOGIN)
                    localStorage.removeItem(TOKEN)
                    history.push('/home');
                    window.location.reload();
                }}>Đăng Xuất</button>
        </Fragment>
    }
    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-10" >
            <div className="container flex justify-between h-16 mx-auto">
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="Tix" className="h-12" />
                </NavLink>
                <div>
                    <ul className="items-stretch hidden space-x-3 lg:flex" style={{ lineHeight: '2rem' }}>
                        <li className="flex">
                            <NavLink to="/" href="#" className=" items-center px-4 -mb-1 border-b-1 border-transparent text-violet-600 border-violet-600" activeclassname="border-b-1 border-white">{t('home')}</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/contact" href="#" className=" items-center px-4 -mb-1 border-b-1 border-transparent" activeclassname="border-b-1 border-white">{t('contact')}</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/news" href="#" className=" items-center px-4 -mb-1 border-b-1 border-transparent" activeclassname="border-b-1 border-white">{t('news')}</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {renderLogin()}
                    <Select defaultValue="En" style={{ width: 100 }} onChange={handleChange}>
                    <Option value="en">Eng</Option>
                    <Option value="chi">Chi</Option>
                    <Option value="vi">Vi</Option>
                </Select>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}
