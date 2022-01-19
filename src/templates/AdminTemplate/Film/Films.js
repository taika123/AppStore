import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanLyPhimActions';
import { EditOutlined } from '@ant-design/icons/lib/icons';
import { NavLink } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons/lib/icons';
import { history } from '../../../App';



export default function Films() {

    const { arrFilmDefault } = useSelector(state => state.QuanLyPhimReducer)

    console.log(arrFilmDefault);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layDanhSachPhimAction())
    }, [])

    const { Search } = Input;
    const columns = [
        {
            title: 'Mã Phim',
            dataIndex: 'maPhim',
            width: '15%',
            // value:(text,oj) =>{
            //     return <span>{text}</span>
            // },
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend'],
            // sortOrder:'descend'
        },
        {
            title: 'Tên Phim',
            dataIndex: 'tenPhim',
            width: '15%',
            defaultSortOrder: 'descend',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            }
        },
        {
            title: 'Mô Tả Phim',
            dataIndex: 'moTa',
            width: '25%',
            defaultSortOrder: 'descend',
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1;
                }
                return -1;
            }, 
            render: (text,film) => {
                return <Fragment>
                    {film.moTa.length > 100 ? film.moTa.substr(0,100) + ' ... ' : film.moTa}
                </Fragment>
            }
        },
        {
            title: 'Hình Ảnh',
            dataIndex: 'hinhAnh',
            width: '25%',
            render: (text, film) => {
                return <Fragment>
                    <img src={film.hinhAnh} alt={film.tenPhim} style={{ width: '50px', height: '50px' }}
                        onError={(e) => {
                            e.target.onError = null; e.target.src = `https://picsum.photos/id/${film.maPhim}/50/50`
                        }} />
                </Fragment>
            },
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Hành Động',
            dataIndex: 'hanhDong',
            width: '25%',
            render: (text, film) => {
                return <Fragment>
                    <NavLink to="/" className="text-white mr-2 text-2xl" style={{color: 'blue'}}><EditOutlined/></NavLink>
                    <NavLink to="/" className="text-white  mr-2 text-2xl" style={{color: 'red'}}><DeleteOutlined/></NavLink>
                </Fragment>
            },
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
    ];
    const data = arrFilmDefault

    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    // const suffix = (
    //     <AudioOutlined
    //         style={{
    //             fontSize: 16,
    //             color: '#1890ff',
    //         }}
    //     />
    // );
    const onSearch = value => console.log(value);
    return (
        <div >

            <Search
                className="mb-5"
                placeholder="input search text"
                enterButton={<SearchOutlined />}
                size="large"
                // suffix={suffix}
                onSearch={onSearch}
            />
            <h3 className="text-4xl py-5">Quản Lý Phim</h3>
            <Button className="mb-5" onClick={() => { 
                history.push('/admin/films/addnew')
            }}>Thêm Phim</Button>
            <Table columns={columns} dataSource={data} onChange={onChange} />

        </div>
    )
}
