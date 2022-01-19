import React, { useState } from 'react';
import {
    Form,
    Input,
    Radio,
    DatePicker,
    InputNumber,
    Switch,
} from 'antd';
import moment from 'moment'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { themPhimUploadHinhAction } from '../../../../redux/actions/QuanLyPhimActions'
import { GROUPID } from '../../../../util/settings/config';

const AddNew = (props) => {
    const [componentSize, setComponentSize] = useState('default');
    const dispatch = useDispatch()
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            danhGia: 0,
            hinhAnh: {},


        },
        onSubmit: (values) => {
            // console.log(values);
            values.maNhom = GROUPID

            //tạo đối tượng formData từ service => đưa giá trị values từ formik vào formData
            let formData = new FormData();
            // formData.append('tenPhim', formik.values.tenPhim)
            console.log('formData', formData.get('tenPhim'));

            for (let key in values) {
                formData.append(key, values[key]);
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
                console.log(formData.get('File'));
                //gọi API gửi các giá trị từ formData về backend xử lý
                const action = themPhimUploadHinhAction(formData)
                dispatch(action)
                // console.log(action);
            }
        }
    })
    //lấy ngày tháng năm trên field
    const handleChangeDatePicker = (value) => {
        console.log('handleChangeDatePicker');
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');

        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu)
    }

    //lấy name form input
    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }
    //lấy name form input number
    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    //lấy hình ảnh trong {}
    const handleChangeFile = (e) => {
        //lấy file ra từ e
        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/gif' || file.type === 'image/png' || file.type === 'image/jpg');
        // console.log('file', file);
        //tạo đối tượng để đọc file
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            // console.log(e.target.result);
            setImgSrc(e.target.result);//hinh base 64
        }

        //đem dữ liệu file lưu vào formik
        formik.setFieldValue('hinhAnh', file);
    }

    //
    const [imgSrc, setImgSrc] = useState('')

    return (
        <Form
            onSubmitCapture={formik.handleSubmit}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            initialValues={{
                size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
        >
            <h3>Thêm Phim Mới</h3>
            <Form.Item label="Form Size" name="size">
                <Radio.Group>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="Tên phim">
                <Input name="tenPhim" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Trailer">
                <Input name="trailer" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Mô Tả">
                <Input name="moTa" onChange={formik.handleChange} />
            </Form.Item>

            <Form.Item label="Ngày khởi chiếu">
                <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
            </Form.Item>

            <Form.Item label="Đang chiếu">
                <Switch name="dangChieu" onChange={
                    // (value) =>{
                    // console.log('value',value);}
                    handleChangeSwitch('dangChieu')
                } />
            </Form.Item>

            <Form.Item label="Sắp chiếu">
                <Switch name="sapChieu" onChange={handleChangeSwitch('sapChieu')} />
            </Form.Item>

            <Form.Item label="Hot">
                <Switch name="hot" onChange={handleChangeSwitch('hot')} />
            </Form.Item>

            <Form.Item label="Số Sao">
                <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
            </Form.Item>

            <Form.Item label="Hình Ảnh">
                <Input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg, image/jpg, image/gif, image/png," />
                <br />
                <img style={{ width: "100px", height: "100px" }} src={imgSrc} alt="" />
            </Form.Item>

            <Form.Item label="Tác vụ">
                <button type="submit" className="bg-blue-300 text-white p-1">Thêm phim </button>
            </Form.Item>

        </Form>
    );
};
export default AddNew