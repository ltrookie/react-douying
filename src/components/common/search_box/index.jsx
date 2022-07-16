import React, { memo, useState, useEffect, useRef, useMemo } from 'react';
import {ScanningOutline } from 'antd-mobile-icons'
import {useNavigate,useLocation,Outlet} from "react-router-dom"
import { SearchBar  } from 'antd-mobile'
import { debounce } from '@/api/utils';
import styled from 'styled-components';



const SearchBoxWrapper=styled.div`
    .header{

    
.headersearch {
  /* display: flex; */margin-top: 0.5rem;
  position: relative;
  width: 13.5rem;
  height: 2rem;
  margin-left: 2.5rem;
  margin-right: 2rem;
  i{
    position: absolute;
    top:-0.1rem;
    left: -2rem;
  }
  h3{
  position: absolute;
  top:0.3rem;
  right: -2rem;
  color: red;
 }
 .icon {
  position: absolute;
  top:0.4rem;
  right: 0.2rem;
  display: ${props => props.show ? "" : "none"};
  
}
}



}
`
const SearchBox =(props)=>{
  const pathname=useLocation();
    const queryRef = useRef();
    const navigate = useNavigate();
    const { newQuery } = props;
    const { handleQuery, back } = props;
    const [query, setQuery] = useState('');

    // useMomo 可以缓存 上一次函数计算的结果 
    let handleQueryDebounce =  useMemo(() => {
        return debounce(handleQuery, 500)
    }, [handleQuery])

    useEffect(() => {
        // console.log(queryRef)
        // 挂载后
        queryRef.current.focus();
    }, [])
    useEffect(() => {
        //query 更新
        // console.log(queryRef)
        // let curQuery = query
        handleQueryDebounce(query)
    }, [query])
    useEffect(() => {
        // mount 时候 执行 父组件  newQuery -> input query 
        let curQuery = query;
        if (newQuery !== query) {
            curQuery = newQuery;
            queryRef.current.value = newQuery;
        }
        setQuery(curQuery)
        // newQuery 更新时执行
    }, [newQuery])
    const handleChange = (e) => {
        // let val = e.currentTarget.value
        setQuery(e)
    }

    return (
    <SearchBoxWrapper>
     <div className="header">
      <div className="headersearch">
        <i className='fa fa-angle-left fa-3x' onClick={()=>navigate(-1)} ></i>   
          <SearchBar placeholder='猜你想搜'
                     style={{'--height':'2rem', '--padding-left':'0.5rem','--width':'13.5rem',}} 
                     ref={queryRef}
                     onChange={handleChange}
           />
           <div className="icon">
          <ScanningOutline fontSize={24}/>
          </div>
        <h3>搜索</h3>
      </div>   
    </div>
    </SearchBoxWrapper>
    )
}

export default memo(SearchBox)
