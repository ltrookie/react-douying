import React from 'react'
import { Wrapper } from '../Search/style'
import { SearchBar  } from 'antd-mobile'
import {Link,useLocation,Outlet} from "react-router-dom"
import classnames from "classnames"
import {ScanningOutline } from 'antd-mobile-icons'
import SearchRankNav from '@/components/SearchRankNav'
import DouyinRank from './DouyinRank' 

export default function Search() {
  const pathname=useLocation();

  return (
    <Wrapper>
      <div className="header">
      <div className="headersearch">
      <Link to="/home" className={classnames({active:pathname=="/home"||pathname=="/"})}>
        <i className='fa fa-angle-left fa-3x'></i>
        </Link>
          <SearchBar placeholder='请输入内容'
                     style={{'--height':'2rem', '--padding-left':'0.5rem','--width':'13.5rem',}} 
           />
           <div className="icon">
          <ScanningOutline fontSize={24}/>
          </div>
        <h3>搜索</h3>
      </div>
      <div className="huanghuang">
        <h3>猜你想搜</h3>
        <h4>换一换</h4>
        <div className="wantsearch">
          <a href=""><p>没有劳务合同怎么...</p></a>
          <a href=""><p>12333是什么电话</p></a>
          <a href=""><p>七一建党</p></a>
          <a href=""><p>周杰伦</p></a>
          <a href=""><p>周杰伦</p></a>
          <a href=""><p>周杰伦</p></a>
      

        </div>
      </div>
      </div>
     
      <SearchRankNav/>
      <Outlet/>
      
    </Wrapper>
  )
}
