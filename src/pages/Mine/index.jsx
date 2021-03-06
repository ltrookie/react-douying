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
                <p>??????</p>
                <p className='number'>66</p>
              </div>
              <div className="topbar_information">
                <p>??????</p>
                <p className='number'>66</p>
              </div>
              <div className="topbar_information">
                <p>??????</p>
                <p className='number'>66</p>
              </div>
            </div>
            <div className="username">
              <h2>LT</h2>
              <p>?????????: lt_9898898</p>
            </div>
          </div>
          <div className="detail_container" >
            <p className='description'>???????????????</p>
            <p>Ip??????: ??????</p>
            <div className="guanzhu">
              <button className='edit_data' >???????????? </button>
              <button className='addfriend' >????????????</button>
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
              <Tabs.Tab title="??????" key='photo'>
                {/* <div className='playshow'>
                <div className="play"  >
                
                </div>
              </div> */}
                <div className="photo">
                  <div className="circle">
                    <PictureOutline fontSize={36} />
                  </div>
                  <h3>????????????????????????????????????</h3>
                </div>

              </Tabs.Tab>
              <Tabs.Tab title='??????' key='collect'>
                <div className="shoucangempty">
                  <Empty imageStyle={{ width: 150 }} />
                  <h4>?????????????????????</h4>
                  <p>???????????????????????????????????????</p>
                </div>
              </Tabs.Tab>
              <Tabs.Tab title='??????' key='like'>
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
                  more ? <p>?????????????????????</p>
                    : <div style={{ "marginTop": "10%" }}>
                      <Empty
                        imageStyle={{ width: 150 }}
                        description="?????????????????????" />
                      {/* <p>?????????????????????</p> */}
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