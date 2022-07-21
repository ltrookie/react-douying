import * as actionTypes from "./constants"
import { getSearchRequest } from "../../../api/request"


export const changeMyLikeList =(data)=>({
    type:actionTypes.CHANGE_MYLIKE_LIST,
    data
})

export const addLikeing =(data)=>({
  type:actionTypes.ADD_LIKE,
    data
})

export const delsteLikeing =(data)=>({
  type:actionTypes.DELETE_LIKE,
    data
})