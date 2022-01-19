import React from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { dangKy } from '../../redux/actions/QuanLyNguoiDungAction';
// import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    matKhau: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const Register = (props) => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP01',
            hoTen: '',
        },
        validationSchema:{SignupSchema},
        onSubmit: values => {
            const action = dangKy(values);
            dispatch(action)
            console.log('values', values)
        },
    });
    // console.log("login",formik)

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e)
        }} className="lg:w-1/2 xl:max-w-screen-sm">
            <div className="py-5 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div className="cursor-pointer flex items-center">
                    <div>
                        <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                        .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                    " }} />
                            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                    <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Movie</div>
                </div>
            </div>
            <div className="mt-2 px-12 sm:px-24 md:px-48 lg:px-12 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Register</h2>
                <div className="mt-10">
                    <div>
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Tài Khoản</div>
                            <input name="taiKhoan" onChange={formik.handleChange} placeholder="Nhập vào tài khoản" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                        </div>

                        <div className="mt-6">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Mật Khẩu</div>
                            <input name="matKhau" onChange={formik.handleChange} placeholder="Nhập vào mật khẩu" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                        </div>

                        <div className="mt-6">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Email</div>
                            <input name="email" onChange={formik.handleChange} placeholder="Nhập vào Email" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                        </div>

                        <div className="mt-6">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Số Điện Thoại</div>
                            <input name="soDt" onChange={formik.handleChange} placeholder="Nhập vào SDT" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                        </div>

                        {/* <div className="mt-6">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">Mã Nhóm</div>
                                    <input name="maNhom" onChange={formik.handleChange} placeholder="Nhập vào mã nhóm" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                                </div> */}

                        <div className="mt-6">
                            <div className="text-sm font-bold text-gray-700 tracking-wide">Họ Tên</div>
                            <input name="hoTen" onChange={formik.handleChange} placeholder="Nhập vào họ tên" className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" />
                        </div>

                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                          font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                          shadow-lg">
                                Đăng Nhập
                            </button>
                        </div>
                    </div>
                    <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        {/* Bạn Chưa Có Tài Khoản <a href="/" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Đăng Kí</a> */}
                    </div>
                </div>
            </div>
        </form>
    )
}


export default Register