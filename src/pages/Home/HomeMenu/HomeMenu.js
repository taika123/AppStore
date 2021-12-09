import React, { Fragment, useEffect, useState } from 'react'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const { TabPane } = Tabs;


export default class Demo extends React.PureComponent {
  state = {
    tabPosition: 'left',
  };

  // const [state, setState] = useState({
  //     tabPosition: 'left',
  // })

  changeTabPosition = e => {
    this.setState({ tabPosition: e.target.value });
  };

  // useEffect (() => {
  // })



  renderHeThongRap = () => {
    return this.props.heThongRapChieu?.map((heThongRap, index) => {
      let { tabPosition } = this.state;
      return <TabPane tab={<img src={heThongRap.logo} className="rounded-full" width="50" alt={heThongRap.logo} />} key={index}>
        <Tabs tabPosition={tabPosition}>
          {heThongRap.lstCumRap?.map((item, index) => {
            return <TabPane tab={
              <div style={{ width: '200px' }}>
                <img src={heThongRap.logo} className="rounded-full" width="50" alt={heThongRap.logo} /><br />
                <div className="text-left ml-2">
                  {item.tenCumRap}
                  <p className="text-red-300">Chi Tiết</p>
                </div>
              </div>

            } key={index}>
              
              {/* //load danh sách tương ứng */}
              {item.danhSachPhim?.slice(0, 4).map((danhSachPhim, index) => {
                return <Fragment key={index} >
                  <div className="my-2" style={{ display: 'flex' }} >
                    <div style={{ display: 'flex' }}>
                      <img src={danhSachPhim.hinhAnh} alt={danhSachPhim.hinhAnh} style={{ width: '100px', height: '100px' }}
                        onError={(e) => {e.target.onerror = null; e.target.src = "https://picsum.photos/100/100"}} />
                      <div className="ml-2">
                        <h1 className="ml-3 text-2xl text-red-500">{danhSachPhim.tenPhim}</h1>
                        <p className="ml-3">{item.diaChi}</p>
                        <div className="grid grid-cols-6 ml-3 gap-10 my-4">
                          {danhSachPhim.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                            return <NavLink className="text-green-400 text-xl" to={`/checkout/${lichChieu.maLichChieu}`} key={index}>
                              {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                            </NavLink>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              })}

            </TabPane>
          })}
        </Tabs>

      </TabPane>
    })
  }


  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <Tabs tabPosition={tabPosition}>
          {this.renderHeThongRap()}
        </Tabs>
      </>
    )
  }
}
