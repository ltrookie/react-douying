import React from 'react'
import {Link,useLocation} from "react-router-dom"
import {Wrapper } from "./style.js"
import classnames from "classnames"

export default function Bottom() {
  const pathname=useLocation();
  return (
    <Wrapper>
    <div className='video_bottom'>
    <Link to="/home" className={classnames({active:pathname=="/home"||pathname=="/"})}>
    <span>首页</span>
    </Link>
    <Link to="/friend" className={classnames({active:pathname=="/friend"})}>
    <span>朋友</span>
    </Link>
    <Link to="/video" className={classnames({active:pathname=="/video"||pathname=="/"})}>
    <i className='fa fa-plus'></i>
    </Link>
    <Link to="/message" className={classnames({active:pathname=="/message"})}>
    <span>消息</span>
    </Link>
    <Link to="/mine" className={classnames({active:pathname=="/mine"})}>
    <span>我</span>
    </Link>
    </div>
    </Wrapper>
  )
}
