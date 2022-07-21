import * as actionTypes from './constants'
const defaultState ={
    videoList:[]
}


export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_VIDEOP_LIST:
            return {
                ...state,
                videoList:action.data
            }
        default:
            return state
    }
}
