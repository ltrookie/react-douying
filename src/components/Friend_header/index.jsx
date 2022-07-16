import React from 'react'
import {NavLink,useLocation} from "react-router-dom"
import classnames from "classnames"
import { Wrapper } from './style'

export default function Header() {
  const pathname=useLocation();
  return (
     <Wrapper>
    <div className='video_header'>
    <NavLink to="/home" className={classnames({active:pathname=="/home"||pathname=="/"})}>
    <i className='iconfont icon-addto' ></i>
    </NavLink>
    <NavLink to="//" className={classnames({active:pathname=="/home"})}>
    <span>朋友</span>
    </NavLink>
    <NavLink to="///" className={classnames({active:pathname=="/."})}>
    <span>校园</span>
    </NavLink>
    <NavLink to="/friend" className={classnames({active:pathname=="/home"||pathname=="/"})}>
    <span>动态</span>
    </NavLink>
    <NavLink to="/search" className={classnames({active:pathname=="/search"})}>
    <i className='iconfont icon-31sousuo'></i>
    </NavLink>
    </div>
    </Wrapper>
  )
}
