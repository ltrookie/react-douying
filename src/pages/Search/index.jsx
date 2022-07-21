import React, { useEffect, useState,memo} from 'react'
import { Wrapper ,
         ShortcutWrapper
} from '../Search/style'
import {Outlet} from "react-router-dom"
import SearchRankNav from '@/components/SearchRankNav'
import { getSearchList }  from './store/actionCreators'
import { connect } from 'react-redux'
import {ClockCircleOutline,CloseOutline } from 'antd-mobile-icons'
import SearchBox from "../../components/common/search_box"


const  Search =(props)=> {

    const [refresh,setRefresh]=useState(0);
    const[query,setQuery]=useState('')   
    const { searchLists } = props
    const {getSearchlistDispatch} =props

   

    useEffect(()=>{
      getSearchlistDispatch()
    },[])

    const Onrefresh = ()=>{
      console.log(refresh);
      if(refresh<searchLists.length-6 && refresh>=0){
        
       setRefresh(refresh+6);
       }
       else{
        setRefresh(refresh-6)
       }
      }

  //  console.log(query,"00000000");
  const handleQuery = (q) => {
    // console.log(q)
    setQuery(q)
}

  const renderBtnsearchPage1=()=>{
  //  console.log(searchLists,"***********");
   
   const items= searchLists.slice(refresh,refresh+6);
  //  console.log(items,"+++++++++++++++++++");
    return items.map(item=>{
        return (
          <a    
               key={item.id} 
               onClick={() => setQuery(item.text)}
          >

            <p>{item.text}</p>
            </a>
        )
    })
  }

 

  return (
    <Wrapper>
      {/* <div className="header">
      <div className="headersearch">
      <Link to="/home" className={classnames({active:pathname=="/home"||pathname=="/"})}>
        <i className='fa fa-angle-left fa-3x'></i>
        </Link>
          <SearchBar placeholder='请输入内容'
                     style={{'--height':'2rem', '--padding-left':'0.5rem','--width':'13.5rem',}} 
                     ref={queryRef}
                     onChange={handleChange}
           />
           <div className="icon">
          <ScanningOutline fontSize={24}/>
          </div>
        <h3>搜索</h3>
      </div>
    
    </div> */}
    <SearchBox 
     newQuery={query}
     handleQuery={handleQuery}> 
     </SearchBox>
      <ShortcutWrapper show={!query}>
        <div className="search_history">
        <div className="history_text">
        <ul>
            <li>
            <ClockCircleOutline className='ClockCircleOutline'/>
            <p>王彦霖</p>
            <CloseOutline className='CloseOutline'/>
            </li>
            <li>
            <ClockCircleOutline className='ClockCircleOutline'/>
            <p>你不知道的JavaScript</p>
            <CloseOutline className='CloseOutline'/>
            </li>
           


        </ul>
       
        </div>
        <p>全部搜索记录</p>
        </div>
      <div className="huanghuang">
        <h3>猜你想搜</h3>
        <i className="fa fa-refresh"></i>
        <h4 
        onClick={Onrefresh}
        >换一换</h4>
        <div className="wantsearch">
   
          {renderBtnsearchPage1()}
         
        
      </div>
      </div>
     
      <SearchRankNav/>
      <Outlet/>
      </ShortcutWrapper>
      <ShortcutWrapper>
       
      </ShortcutWrapper>
    </Wrapper>
    

   
  )
}

const mapStateToProps =(state)=>{
    return {
      searchLists:state.search.searchLists,
      
    }
}

const mapDispatchToProps=(dispatch)=>{
  return {
         getSearchlistDispatch(){
            dispatch(getSearchList())
         }}
}

export default connect(mapStateToProps, 
  mapDispatchToProps)(memo(Search))