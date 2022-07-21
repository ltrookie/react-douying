import * as actionTypes from './constants'
const defaultState={
    videosList: []
}



export default (state=defaultState,action)=>{
    
    switch (action.type){
        case actionTypes.CHANGE_VIDEOS_LIST:
            return {
                ...state,
                videosList:action.data
            }

        default:
        return state
        
    }
}



