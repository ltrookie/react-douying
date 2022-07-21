import React, { useState, useEffect, memo } from 'react'
import Bottom from '../../components/common/Bottom'
import { Wrapper } from './style'
import { Image, Tabs, Empty } from 'antd-mobile'
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom';
import { ShowplayerWrapper } from '../../components/DetailvideoNav/style'
import { PictureOutline } from 'antd-mobile-icons'
import { connect } from 'react-redux'


function Mine(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [more, setmore] = useState(false)
  const { mylikeLists } = props


  console.log(mylikeLists, "mylikelist");
  useEffect(() => {
    setShow(true)
    // if (!hotList.length) {
    //     getHotKeywordsDispatch()
    // }
    if (mylikeLists.length > 0) {
      setmore(true)
    }
  }, [])

  console.log(mylikeLists);


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
          <ShowplayerWrapper>
            <Tabs activeLineMode="fixed"
              style={{
                color: "#78777d",
                "--active-title-color": "#171723",
                "--fixed-active-line-width": "33.333%",
                "--active-line-color": "#171723",
                "--content-padding": "0"
              }} >
              <Tabs.Tab title="作品" key='photo'>
                {/* <div className='playshow'>
                <div className="play"  >
                
                </div>
              </div> */}
                <div className="photo">
                  <div className="circle">
                    <PictureOutline fontSize={36} />
                  </div>
                  <h3>发一张你被点赞最多的照片</h3>
                </div>

              </Tabs.Tab>
              <Tabs.Tab title='收藏' key='collect'>
                <div className="shoucangempty">
                  <Empty imageStyle={{ width: 150 }} />
                  <h4>还没有收藏视频</h4>
                  <p>用分组收藏，找到视频更方便</p>
                </div>
              </Tabs.Tab>
              <Tabs.Tab title='喜欢' key='like'>
                <div className='playshow'>
                  {
                    mylikeLists.map((item) => {
                      // {setCount(4)}
                      return (
                        <div className="play" key={item.id} >
                          <video src={item.video}></video>
                          <i className='iconfont icon-aixin'>{item.hearts}</i>
                        </div>
                      )
                    })
                  }

                </div>
                {
                  more ? <p>暂时没有更多了</p>
                    : <div style={{ "marginTop": "10%" }}>
                      <Empty
                        imageStyle={{ width: 150 }}
                        description="还没有点赞视频" />
                      {/* <p>还没有点赞视频</p> */}
                    </div>
                }

              </Tabs.Tab>
            </Tabs>
          </ShowplayerWrapper>


          <Bottom />
        </div>
      </Wrapper>
    </CSSTransition>


  )
}

const mapStateToProps = (state) => {
  return {
    videosList: state.videos.videosList,
    mylikeLists: state.mylike.mylikeLists,
    like: state.mylike.like


  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // getVideosListDispatch() {
//     //   dispatch(getMylikeList())
//     // }

//   }
// }

export default connect(mapStateToProps,
  //  mapDispatchToProps
)(memo(Mine))