import * as actionTypes from "./constants"
import { getSearchRequest } from "../../../api/request"


const changeSearchList =(data)=>({
    type:actionTypes.CHANGE_MYLIKE_LIST,
    data
})

export const getSearchList = ()=>{
    return(dispatch)=> {
        getSearchRequest()
          .then(data=>{
            console.log(data.data);
            const action = changeSearchList(data.data);
            dispatch(action)
          })
    }
}