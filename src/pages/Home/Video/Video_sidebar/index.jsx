import React, { useState } from 'react'
import './style.css'
import { Popup, Space ,Image} from 'antd-mobile'


function Video_sidebar({hearts,comments,collects,share,users}) {
    const [liked,setLiked]=useState(false)
    const [shoucang,setShoucang]=useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
  
  return (
    <div className='video_sidebar'>
        <div className="video_sidebar_button">
            <Image src={users} 
                    width={60} 
                    height={60}
                    fill="cover"
                    style={{ borderRadius: 60 }}  >  
            
            </Image>
           
        </div>
        <div className="video_sidebar_button">
            {liked?(<div className="heart">
            <i className='iconfont icon-aixin1' onClick={(e=>setLiked(false))}></i>
             </div> ):(
            <i className='iconfont icon-aixin1'  onClick={(e=>setLiked(true))}></i>                 
           )} 
               
            <p>{hearts}</p>
        </div>
        <div className="video_sidebar_button">
        <Space direction='vertica2'>
            <i
              onClick={() => {
                setVisible2(true)
              }}
            className='iconfont icon-xiaoxi'
            >
            </i>
            <Popup
              visible={visible2}
              onMaskClick={() => {
                setVisible2(false)
              }}
              bodyStyle={{ minHeight: '70vh' }}
              className="commentbody"

            >
           <div className="comments">
            <div className="comments_header">  
            <h3>大家都在搜：火锅英雄</h3>
               <p>{comments} 条评论</p>
            </div>
           
           <div className="comments_bottom">
            <input className="search_input" placeholder="善语结善缘，恶语伤人心~">

            </input>
           </div>
           </div>
            </Popup>
          </Space>
            <p>{comments}</p>
        </div>
        <div className="video_sidebar_button">
        {shoucang?(<div className="shoucang">
            <i className='iconfont icon-shoucang' onClick={(e=>setShoucang(false))}></i>
             </div> ):(
            <i className='iconfont icon-shoucang'  onClick={(e=>setShoucang(true))}></i>   
              
           )}          
            <p>{collects}</p>
        </div>
        <div className="video_sidebar_button">
             <Space direction='vertical'>
            <i
              onClick={() => {
                setVisible1(true)
              }}
              className='iconfont icon-zhuanfa00'
            >
            </i>
            <Popup
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              bodyStyle={{ minHeight: '50vh' }}
            >
            分享给朋友
            </Popup>
          </Space>           
            <p>{share}</p>
        </div>
      
    </div>
  )
}

export default Video_sidebar
