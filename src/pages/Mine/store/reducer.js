import * as actionTypes from './constants'
const defaultState={
    mylikeLists: []
}



export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGE_MYLIKE_LIST:
            return {
                ...state,
                mylikeLists:action.data
            }
        default:
        return state
        
    }
}



