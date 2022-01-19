import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { history } from '../../App';
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';


export default function News(props) {

    const { arrPhim } = useSelector(state => state.QuanLyPhimReducer)
    // console.log(arrPhim);
    // const {arrPhim  } = layDanhSachPhimAction
    const dispatch = useDispatch();
    React.useEffect(() => {
        const action = layDanhSachPhimAction()
        dispatch(action)
    }, [])
    console.log(arrPhim);
    const renderPhims = () => {
        return arrPhim?.map((item, index) => {
            return <Fragment className="flex flex-wrap m-4">
                <div className="p-4 md:w-1/3" key={index}>
                    <div className="h-max border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <img className="w-full object-cover object-center" style={{ height: 500 }} src={item.hinhAnh} alt={item.hinhAnh} />
                        <div className="p-6">
                            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3 text-center">{item.tenPhim}</h1>
                            <p className="leading-relaxed mb-3">{item.moTa.length > 80 ? <span>{item.moTa.slice(0, 100)} ...</span> : <span>{item.moTa}</span>} </p>
                            <div className="flex items-center flex-wrap ">
                                {/* <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            </a> */}
                                <div onClick={() => {
                                    history.push(`/detail/${item.maPhim}`)
                                }}
                                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer">Đặt vé</div>
                                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx={12} cy={12} r={3} />
                                    </svg>1.2K
                                </span>
                                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                    </svg>{item.danhGia}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        })
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h3 className="text-4xl text-center leading-2 font-bold p-8">The New Phim</h3>
                <div className="flex flex-wrap -m-4">
                    {renderPhims()}
                </div>
            </div>
        </section>
    )
} 
