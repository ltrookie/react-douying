import * as actionTypes from "./constants"
import { getVideosRequest } from "../../../api/request"


const changeVideosList =(data)=>({
    type:actionTypes.CHANGE_VIDEOS_LIST,
    data
})

export const getVideosList = ()=>{
    return(dispatch)=> {
        getVideosRequest()
          .then(data=>{
            console.log(data.data,"-----------");
            const action = changeVideosList(data.data);
            dispatch(action)
          })
    }
}