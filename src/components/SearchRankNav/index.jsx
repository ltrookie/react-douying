import React, { useEffect } from 'react'
// import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Swiper from 'swiper'
import { Wrapper } from './style'

export default function SearchRankNav() {
    let swiper = null;
    useEffect(() => {
        if (swiper) return 
        swiper = new Swiper('.navbar')
    }, [])
    // 页面二级路由的导航准备
    let rankNavs = [
        { id: 1, desc: '抖音热榜', path: '/douyinrank'},
        { id: 2, desc: '抗疫榜', path: '/kangyirank'},
        { id: 3, desc: '直播榜', path: '/pingpairank'},
        { id: 4, desc: '音乐榜', path: '/yingyuerank'},
        { id: 5, desc: '品牌榜', path: '/zhiborank'},
       
    ]
    return (
        <Wrapper>
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                {
                    rankNavs.map((item, index) => {
                        return (
                            <NavLink
                                index={index}
                                to={`/search${item.path}`}
                                key={item.id}
                                
                                className="nav-item swiper-slide"
                            >
                            {item.desc}
                            </NavLink>
                        )
                    })
                }
                </div>
            </div>
        </Wrapper>
    )
}

// HomeDetailNav.propTyes = {
//     id: propTyes.string.isRequired
// }