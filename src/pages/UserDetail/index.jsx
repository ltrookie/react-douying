import React, { useState, useEffect ,memo} from 'react'
import {
  Wrapper,
  EnterLoading
}
  from './style'
import { Image } from 'antd-mobile'
import { CSSTransition } from 'react-transition-group'
import { useNavigate, useParams } from 'react-router-dom';
import DetailvideoNav from '../../components/DetailvideoNav'
import { getVideosList } from '../Home/store/actionCreators'
import { connect } from 'react-redux'
import { Empty } from 'antd-mobile'

function UserDetail(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [guanzhu, setGuanzhu] = useState(true);
  const [interest, setInterest] = useState(true);
  const [enterloading, setEnterloading] = useState(false)
  // const [lock,setLock]=useState(false)
  const { videosList } = props
  const { getVideosListDispatch } = props

  useEffect(() => {
    setShow(true)
    console.log("1111111");
    getVideosListDispatch()

  }, [])

  const displayStylem = interest ? { display: "none" } : { display: "block" };
  //进行筛选
  const res = videosList.filter(
    (item) =>
      //对象包对象筛选不出来  不能加{}
      item.id == id

  )
 
  useEffect(() => {
    console.log(res,"use");
    if (res.length == 0) {
      setEnterloading(true)
    }
    else {
      setEnterloading(false)
    }

  }, [res])

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

        <div className="back_picture">
          <i className='fa fa-angle-left fa-2x' onClick={() => navigate(-1)}> </i>
          <div className="right">
            <i className="fa fa-search fa-x" aria-hidden="true" ></i>
            <i className="fa fa-ellipsis-h fa-x" aria-hidden="true"></i>
          </div>
        </div>
        {

          res.map(item => {
            // console.log(res, "123456");
            return (
              <div key={item.id}>
                <div className='detail_header'>
                  <div className="topbar">
                    <div className="topbar_information">
                      <Image src={item.headpho}
                        width={88}
                        height={88}
                        fill="cover"
                        className='picture'
                        style={{ borderRadius: 88 }}>

                      </Image>
                    </div>
                    <div className="topbar_information">
                      <p>获赞</p>
                      <p className='number'>{item.zan}</p>
                    </div>
                    <div className="topbar_information">
                      <p>关注</p>
                      <p className='number'>{item.guanzhu}</p>
                    </div>
                    <div className="topbar_information">
                      <p>粉丝</p>
                      <p className='number'>{item.fan}</p>
                    </div>
                  </div>
                  <div className="username">
                    <h2>{item.user}</h2>
                    <p>抖音号: {item.dynum}</p>
                  </div>
                </div>
                <div className="detail_container" >
                  <p className='description'>{item.introduce}</p>
                  <p>Ip属地: {item.ip}</p>

                  <div className="guazhu">
                    {
                      guanzhu ? <button className='guanzhu' onClick={(e) => { setGuanzhu(false) }}>+ 关注</button>
                        : <div className='Guanzhu'>
                          <i className="fa fa-caret-down fa-x"  ></i>
                          <button className='yiguanzhu' onClick={(e) => { setGuanzhu(true) }} >已关注 </button>
                          <button className='sixing' >私信</button>
                        </div>
                    }

                    <div>
                      {interest ?
                        <button className="interest" onClick={(e) => { setInterest(false) }}>
                          <i className="fa fa-caret-down fa-x"  ></i></button> :

                        <div>
                          <button className="interest" onClick={(e) => { setInterest(true) }}>
                            <i className="fa fa-caret-up fa-x"  ></i></button>
                        </div>
                      }
                    </div>
                  </div>
                      
                </div>
           
                <div className='maybelike' style={displayStylem}>
                  <p>你可能感兴趣 </p>

                </div>
                <DetailvideoNav videosList={videosList} />
              </div>

            )
          })
        }
        {enterloading &&
          <Empty
            style={{ padding: '50% 0' }}
            imageStyle={{ width: 200 }}
            description='暂无数据'
          />
        }
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(UserDetail))
