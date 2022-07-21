import React, { useEffect, useState,memo} from 'react'
import './style.css'
import Video from '../Home/Video'
import Header from '../../components/Home_header';
import Bottom from '../../components/common/Bottom';
import { getVideosList } from './store/actionCreators'
import { connect } from 'react-redux'
import {changeMyLikeList,
        addLikeing,
        delsteLikeing
} from '../Mine/store/actionCreators'


// import { useEffect, useState } from 'react'

function Home(props) {

  // const [liked,setLiked]=useState(false)
  const { videosList,like } = props
  const { getVideosListDispatch,
          changeMyLikeListDispatch,
          addLikeStateDispatch,
          deleteLikeStateDispatch
  } = props

  useEffect(() => {
    getVideosListDispatch()
    
  }, [])
  
   const addLike =(item)=>{
    console.log("addlike123");
    console.log(item);
    changeMyLikeListDispatch(item)
    addLikeStateDispatch(item)
    // setLiked(false)
   }
   const deleteLike=(item)=>{
    deleteLikeStateDispatch(item)

   }
   console.log(like[0],"00000000000");
  //  console.log(like[0].liked,"like.liked");

  return (

    <div >
      <Header />
      <div className="app_videos" >
        {
          videosList.map((item,index) => {
            return (
             
              <Video
                key={item.id}
                videos={item.video}
                user={item.user}
                description={item.description}
                song={item.song}
                hearts={item.hearts}
                comments={item.comments}
                collects={item.collects}
                share={item.share}
                users={item.headpho}
                cd={item.headpho}
                id={item.id}
                item={item}
                addLike={addLike}
                deleteLike={deleteLike}
                like={like}
               
           
                
              />
            )
          })

        }
      </div>



      <Bottom />

    </div>
  )

}

const mapStateToProps = (state) => {
  return {
    videosList: state.videos.videosList,
    like:state.mylike.like


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideosListDispatch() {
      dispatch(getVideosList())
    },
    changeMyLikeListDispatch(data){
      dispatch(changeMyLikeList(data))
    },
    addLikeStateDispatch(data){
      dispatch(addLikeing(data))
    },
    deleteLikeStateDispatch(data){
      dispatch(delsteLikeing(data))
    }


  }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Home))
