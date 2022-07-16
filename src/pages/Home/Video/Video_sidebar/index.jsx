import React, { useState } from 'react'
import './style.css'
import { Popup, Space ,Image} from 'antd-mobile'
import Comments from '../../../../components/Comments'
import {Link ,useParams} from "react-router-dom"



function Video_sidebar({hearts,comments,collects,share,users,id}) {
    const [liked,setLiked]=useState(false)
    const [shoucang,setShoucang]=useState(false)
    const [visible1, setVisible1] = useState(false)
    // const [visible2, setVisible2] = useState(false)
    
  
  return (
    <div className='video_sidebar' key={id}>
      <Link to={`/userdetail/${id}`}>
        <div className="video_sidebar_button">
            <Image src={users} 
                    width={60} 
                    height={60}
                    fill="cover"
                    style={{ borderRadius: 60 }}  >  
            
            </Image>
           
        </div>
        </Link>
        <div className="video_sidebar_button">
            {liked?(<div className="heart">
            <i className='iconfont icon-aixin1' onClick={(e=>setLiked(false))}></i>
             </div> ):(
            <i className='iconfont icon-aixin1'  onClick={(e=>setLiked(true))}></i>                 
           )} 
               
            <p>{hearts}</p>
        </div>
        <div className="video_sidebar_button">
       <Comments comments={comments}/>
        </div>
        <div className="video_sidebar_button">
        {shoucang?(<div className="shoucang">
            <i className='iconfont icon-shoucang' onClick={(e=>setShoucang(false))}></i>
             </div> ):(
            <i className='iconfont icon-shoucang'  onClick={(e=>setShoucang(true))}></i>   
              
           )}          
            <p>{shoucang?collects+1:collects}</p>
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
