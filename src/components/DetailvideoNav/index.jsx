import React, { useEffect ,memo,useState} from 'react'
import { ShowplayerWrapper } from './style'
import { Tabs } from 'antd-mobile'
import { LockOutline } from 'antd-mobile-icons'
import { useNavigate, useParams } from 'react-router-dom';



 function DetailvideoNav({ videosList }) {
    console.log(videosList[0].show,"00000000001111111111110");
    let { id } = useParams();
    const res = videosList.filter(
        (item) =>
          //对象包对象筛选不出来  不能加{}
          item.id == id
    
      )
      const a ="喜欢"

      console.log(res[0].show.length,"123");
    return (
        <ShowplayerWrapper>
            <Tabs activeLineMode="fixed"
                style={{
                    color: "#78777d",
                    "--active-title-color": "#000000",
                    "--title-font-size": "0.75rem",
                    "--fixed-active-line-width": "50%",
                    "--active-line-color": "#171723",
                    "--content-padding": "0"
                }} >
                <Tabs.Tab title={`作品${res[0].show.length}`}  key='photo'>
                    <div className='playshow'>
                        {
                           res[0].show.map((item) => {
                            // {setCount(4)}
                                return (
                                   
                                    <div className="play" key={item.id} >
                                        <video src={item.img}></video>
                                        <i className='iconfont icon-aixin'>{item.like}</i>
                                    </div>
                                   
                                )
                            })

                        }
                     </div>
                     <p>暂时没有更多了</p>
                </Tabs.Tab>
                <Tabs.Tab title={a} arrow={ <LockOutline />} key='like'>
               
                <div className="lock">
                <div className="circle">
                <LockOutline fontSize={48}/>
                </div>
               
                <h2>喜欢内容不可见</h2>
                <p>该用户已将喜欢列表设为私密</p>
                </div>
                
                </Tabs.Tab>

            </Tabs>
        </ShowplayerWrapper>
    )
}

export default memo(DetailvideoNav)
// HomeDetailNav.propTyes = {
//     id: propTyes.string.isRequired
// }