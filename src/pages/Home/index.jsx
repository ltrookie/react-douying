import React, { useEffect, useState } from 'react'
import './style.css'
import Video from '../Home/Video'
import Header from '../../components/Home_header';
import Bottom from '../../components/common/Bottom';
import videos_five from "@/assets/video/3.mp4";
import user_two from "@/assets/image/wang.jpg"
import { getVideosList } from './store/actionCreators'
import { connect } from 'react-redux'


// import { useEffect, useState } from 'react'

function Home(props) {


  const { videosList } = props
  const { getVideosListDispatch } = props

  useEffect(() => {
    getVideosListDispatch()
  }, [])

  return (

    <div >
      <Header />
      <div className="app_videos" >
        {
          videosList.map(item => {
            return (

              <Video
                key={item.id}
                videos={videos_five}
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
    videosList: state.videos.videosList

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideosListDispatch() {
      dispatch(getVideosList())
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
