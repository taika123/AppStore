import React, { useEffect, useState, Fragment } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { useSelector } from 'react-redux'
import { Redirect, NavLink } from "react-router-dom";
import { Route } from 'react-router';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import _ from 'lodash';
import { USER_LOGIN, TOKEN } from '../../util/settings/config'
import { history } from '../../App'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
    const { Component, ...restProps } = props
    const { userLogin } = useSelector(state => state.QuanLyNguoiDungReducer)

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    // if(!localStorage.getItem(USER_LOGIN)){
    //     alert('Bạn không có quyền truy cập vào trang này !')
    //     return <Redirect to ="/"/>
    // }
    // if(userLogin.maLoaiNguoiDung !== 'QuanTri'){
    //     alert('Bạn không có quyền truy cập vào trang này !')
    //     return <Redirect to ="/"/>
    // }

    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <Fragment>
            <button onClick={() => {
                history.push('/Profile')
            }} className="self-center px-8 py-3 rounded"> {userLogin.taiKhoan}</button>
            <button className="text-yellow-500 mr-5" onClick={() => {
                localStorage.removeItem(USER_LOGIN)
                localStorage.removeItem(TOKEN)
                history.push('/home');
                window.location.reload();
            }}>Đăng Xuất</button></Fragment> : ''}
    </Fragment>

    return <Route {...restProps} render={(propsRoute) => {//props.location.props.history.props.match

        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo p-5">
                        <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="Tix" className="h-12 bg-black" />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <NavLink to="/admin/users" >Users</NavLink>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<FileOutlined />} title="Films">
                            <Menu.Item key="2" icon={<FileOutlined />}>
                                <NavLink to="/admin/films" >Films</NavLink>
                            </Menu.Item>
                            <Menu.Item key="10" icon={<FileOutlined />}>
                                <NavLink to="/admin/films/addnew" >Add New</NavLink>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="3" icon={<UserOutlined />}>
                            <NavLink to="/admin/showtimes" >Showtime</NavLink>
                        </Menu.Item>

                        {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item> */}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background bg-gray-100" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Component {...propsRoute} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}

export default AdminTemplate;