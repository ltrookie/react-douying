import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Friend from '../pages/Friend'
import Home from '../pages/Home'
const Search = lazy(() => import('../pages/Search'))  
const Mine = lazy(() => import('../pages/Mine'))  
const Message = lazy(() => import('../pages/Message'))  
const DouyinRank = lazy(() => import('../pages/Search/DouyinRank'))  
const KangyiRank = lazy(() => import('../pages/Search/KangyiRank'))
const PingpaiRank = lazy(() => import('../pages/Search/ZhiboRank'))
const YingyueRank = lazy(() => import('../pages/Search/YingyueRank'))
const ZhiboRank = lazy(() => import('../pages/Search/PingpaiRank'))


const RoutesConfig=()=>(
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/mine' element={<Mine/>}></Route>
        <Route path='/friend' element={<Friend/>}></Route>
        <Route path='/message' element={<Message/>}></Route>
        <Route path='/search' element={<Search/>}>
                <Route path="/search" element={<DouyinRank/>}/>
                <Route path="/search/douyinrank" element={<DouyinRank/>}/>
                <Route path="/search/kangyirank" element={<KangyiRank/>}/>
                <Route path="/search/pingpairank" element={<PingpaiRank/>}/>
                <Route path="/search/yingyuerank" element={<YingyueRank/>}/>
                <Route path="/search/zhiborank" element={<ZhiboRank/>}/>

        </Route>


    </Routes>
)

export default RoutesConfig