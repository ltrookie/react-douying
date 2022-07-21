import React from 'react'
import {NavLink,useLocation} from "react-router-dom"
import {Wrapper } from "./style.js"
import classnames from "classnames"

export default function Bottom() {
  const pathname=useLocation();
  return (
    <Wrapper>
    <div className='video_bottom'>
    <NavLink to="/" className={classnames({active:pathname=="/home"||pathname=="/"})}>
    <span>首页</span>
    </NavLink>
    <NavLink to="/friend" className={classnames({active:pathname=="/friend"})}>
    <span>朋友</span>
    </NavLink>
    <NavLink to="/video" className={classnames({active:pathname=="/video"||pathname=="/"})}>
    <i className='fa fa-plus'></i>
    </NavLink>
    {/* <NavLink to="/message" className={classnames({active:pathname=="/message"})}>


    </NavLink> */}
    <a><span onClick={()=>alert("用户中心正在开发中，敬请期待")}>消息</span></a>
    <NavLink to="/mine" className={classnames({active:pathname=="/mine"})}>
    <span>我</span>
    </NavLink>
    </div>
    </Wrapper>
  )
}
