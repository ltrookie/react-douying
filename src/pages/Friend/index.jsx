import React from 'react'
import './style.css'
import Video from '../Home/Video'
import videos_four from "@/assets/video/4.mp4";
import videos_two from "@/assets/video/2.mp4"
import user_three from "@/assets/image/dog.jpg"
import user_four from "@/assets/image/军人.jpg"
import Header from '../../components/Friend_header';
import Bottom from '../../components/common/Bottom';

export default function Friend() {
  return (
    <div>

      <Header/>
      <div className="app_videos">
        <Video videos={videos_four}
        user="星中装着八和一"
        description="如果所有人都去种好看的玫瑰，那么谁来守护家乡的和平的稻穗"
        song="星中装着八和一创作的原声"
        hearts="180.0万"
        comments="10.7万"
        collects="10.2万"
        share="16.6万"
        users={user_four}
        cd={user_four}/>

        
        <Video videos={videos_two}
         user="蛋蛋小柯基"
         description="歌会走调，但哥爱你 所以哥不会走掉#萌宠#治愈系#为修狗中的霸总心动了"
         song="下个，路口见-李宇春"
         hearts="179.0万"
         comments="13.7万"
         collects="10.2万"
         share="26.6万"
         users={user_three}
         cd={user_three} />
       
         </div>
         <Bottom/>



    </div>
  )
}
