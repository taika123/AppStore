import React, { useState } from 'react'
import { Modal, Button } from 'antd';
import './Film_Flip.css'
import { Icon } from '@iconify/react';
// import { NavLink } from 'react-router-dom';
import { history } from '../../App';
import ReactPlayer from 'react-player'
export default function Film_Flip(props) {
    // 
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState(`${props.item.hinhAnh}`);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };
    const { item } = props;

    return (
        <div>
            <div className="flip-card mt-2">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div style={{ backgroundSize: '100%', backgroundPosition: 'center', background: `url(${item.hinhAnh}) no-repeat` }}>
                            <img src={item.hinhAnh} alt={item.hinhAnh} style={{ width: 300, height: 300 }} />
                        </div>
                    </div>
                    <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                        <div style={{ position: 'absolute', top: 0, left: 0 }}>
                            <img src={item.hinhAnh} alt={item.hinhAnh} style={{ width: 300, height: 250 }} />
                        </div>
                        <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                    className="rounded-full  cursor-pointer ">
                                    <Button onClick={showModal} type="dashed ghost" style={{
                                        backgroundColor: 'transparent',
                                        // backgroundRepeat: 'no-repeat',
                                        border: 'none',
                                        // overflow: 'hidden',
                                    }}>
                                        <Icon icon="ant-design:play-circle-outlined" style={{ fontSize: '100px', color: '#ffffff', paddingBottom:'45px' }} />
                                    </Button>
                                    <Modal
                                        title={item.tenPhim}
                                        visible={visible}
                                        onOk={handleOk}
                                        confirmLoading={confirmLoading}
                                        onCancel={handleCancel}
                                    >
                                        {/* <p>{modalText}</p> */}
                                        <ReactPlayer
                                            url={item.trailer} className="text-center"
                                            controls
                                            playbackRate={2}
                                            width="750px"
                                            height="450px"

                                        />
                                        {/* <a href= alt="{item.trailer}">{item.trailer}</a> */}
                                    </Modal>
                                </div>
                                <div className="  mt-5 text-2xl font-bold" >{item.tenPhim}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={() => {
                    history.push(`/detail/${item.maPhim}`)
                }}
                    className="text-center cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold">Đặt vé</div>

            </div>
        </div>
    )
}
