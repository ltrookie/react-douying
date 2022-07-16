import React from 'react'
import {NavLink,useLocation} from "react-router-dom"
import classnames from "classnames"
import { Wrapper } from './style'
import { useEffect } from 'react';

export default function Header() {
  const pathname=useLocation();
  
  return (
     <Wrapper>
    <div className='video_header'>
    <NavLink to="/home" className={classnames({active:pathname=="/home"||pathname=="/"})}>
    <i className='iconfont icon-addto ' ></i>
    </NavLink>
    <NavLink to="/." className={classnames({active:pathname=="/."})}>
    <span>蛟桥镇</span>
    </NavLink>
    <NavLink to="/." className={classnames({active:pathname=="/home"})}>
    <span>关注</span>
    </NavLink>
    <NavLink to="/." className={classnames({active:pathname=="/home"})}>
    <span>商城</span>
    </NavLink>
    <NavLink to="/" className={classnames({active:pathname=="/home"||pathname=="/"})}>
    <span>推荐</span>
    </NavLink>
    <NavLink to="/search/douyinrank" className={classnames({active:pathname=="/search"})}>
    <i className='iconfont icon-31sousuo'></i>
    </NavLink>
    </div>
    </Wrapper>
  )
}
