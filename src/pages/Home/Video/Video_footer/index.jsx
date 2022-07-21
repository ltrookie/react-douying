import React,{memo} from 'react'
import './style.css'
import { Image,NoticeBar} from 'antd-mobile'



function VideoFooter({user,description,song,cd}) {
  return (
    
    <div className='videofooter'>
      <div className="videofotter_text">
        <h3>@{user}</h3>
        <p className='videofotter_text_intruduce'>
          {description}
        </p>
        <div className="video_footer_music">
          <i className='fa fa-music'></i>
          <p className='videofotter_text_music'>
            @{song}
          </p>
        </div>
      </div>
      <div className="musicCd">
        <div className="musicPicture">
        <Image src={cd} 
                    width={40} 
                    height={40}
                    fill="cover"
                    style={{ borderRadius: 40 }}  >  
            
            </Image>
        </div>
      </div>
    </div>
  )
}

export default memo(VideoFooter)
