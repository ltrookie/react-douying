import React, { useState, useEffect } from 'react'
import Bottom from '../../components/common/Bottom'
import { Wrapper } from './style'
import { Image,Tabs } from 'antd-mobile'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom';
import DetailvideoNav from '../../components/DetailvideoNav'
import { Outlet } from "react-router-dom"
import { connect } from 'react-redux'







 function Mine() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);



  useEffect(() => {
    setShow(true)
    // if (!hotList.length) {
    //     getHotKeywordsDispatch()
    // }
  }, [])


  return (
    <CSSTransition
      in={show}
      timeout={300}
      appear={true}
      classNames="fly"
      unmountOnExit
      onExit={() => {
        navigate(-1)
      }}
    >
      <Wrapper>
        <div>
          <div className="back_picture">
            <i className='fa fa-angle-left fa-2x' onClick={() => navigate(-1)}> </i>
            <div className="right">
              <i class="fa fa-search fa-x" aria-hidden="true" ></i>
              <i class="fa fa-ellipsis-h fa-x" aria-hidden="true"></i>
            </div>


          </div>
          <div className='detail_header'>
            <div className="topbar">
              <div className="topbar_information">
                <Image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202105%2F29%2F20210529001057_aSeLB.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660034061&t=7ad0677f4e19db2c0128d3d940da92fc"
                  width={88}
                  height={88}
                  fill="cover"
                  className='picture'
                  style={{ borderRadius: 88 }}>

                </Image>
              </div>
              <div className="topbar_information">
                <p>获赞</p>
                <p className='number'>66</p>
              </div>
              <div className="topbar_information">
                <p>关注</p>
                <p className='number'>66</p>
              </div>
              <div className="topbar_information">
                <p>粉丝</p>
                <p className='number'>66</p>
              </div>
            </div>
            <div className="username">
              <h2>LT</h2>
              <p>抖音号: lt_9898898</p>
            </div>
          </div>
          <div className="detail_container" >
            <p className='description'>记录生活！</p>
            <p>Ip属地: 江西</p>
            <div className="guanzhu">
              <button className='edit_data' >编辑资料 </button>
              <button className='addfriend' >添加朋友</button>
            </div>
          </div>

          {/* <DetailvideoNav /> */}
          <Tabs activeLineMode="fixed"
            style={{
              color: "#78777d",
              "--active-title-color": "#171723",
              "--fixed-active-line-width": "33.333%",
              "--active-line-color": "#171723",
              "--content-padding": "0"
            }} >
            <Tabs.Tab title="作品" key='photo'>
              <div className='playshow'>
                <div className="play"  >
                  {/* <img src={item.img}></img> */}
                  {/* <i className='iconfont icon-aixin'>0</i> */}
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab title='收藏' key='collect'>

            </Tabs.Tab>
            <Tabs.Tab title='喜欢' key='like'>
             
           </Tabs.Tab>
          </Tabs>


          <Bottom />
        </div>
      </Wrapper>
    </CSSTransition>


  )
}

const mapStateToProps = (state) => {
  return {
    videosList: state.videos.videosList

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideosListDispatch() {
      dispatch(getVideosList())
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine)