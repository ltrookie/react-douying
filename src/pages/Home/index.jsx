import React ,{useEffect,useState} from 'react'
import './style.css'
import Video from '../Home/Video'
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import videos_three from "@/assets/video/3.mp4";
import { getVideos } from '@/api/request'
// import { useEffect, useState } from 'react'

function Home() {
  const [vid, setVideos] = useState([])
  useEffect(() => {
    (async () => {
        let { data:videosData } = await getVideos()
        setVideos(videosData)
    
    })()
})

return vid.map(item => {
  return (
    <div key={item.id} >
        <Header/>
       <div  className="app_videos">
         <Video videos={videos_three}
          user={item.user}
          description={item.description}
          song={item.song}
          hearts={item.hearts}
          comments={item.comments}
          collects= {item.collects}
          share={item.share}
          users={item.users}
          cd={item.cd}
          /> 
        
       {/* <Video videos={videos_five}
         user="LAU"
         description="生活喜欢勇敢的人"
         song="悬溺_葛东琪-葛东琪创作的原声"
         hearts="26.8万"
         comments="2.7万"
         collects="6618"
         share="9745" 
         users={user_two}
         cd={user_two}/> 
     */}
        </div> 
        <Bottom/>
           
    </div>
  )
}
)}
export default Home
