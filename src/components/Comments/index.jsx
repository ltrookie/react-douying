import React, { useState } from 'react'
import { Popup, Space ,Image} from 'antd-mobile'
import { CommentsWrapper } from './style'



export default function Comments (props){

    const {comments}= props
    const [visible2, setVisible2] = useState(false)
    const [query , setQuery] = useState('')

   return(
     <CommentsWrapper>
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
            <input className="search_input"
                   placeholder="善语结善缘，恶语伤人心~"
                   >
            
            </input>
           </div>
           </div>
            </Popup>
          </Space>
            <p>{comments}</p>   
    </CommentsWrapper>
    )
}