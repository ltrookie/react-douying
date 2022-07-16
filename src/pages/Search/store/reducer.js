import * as actionTypes from './constants'
const defaultState={
    searchLists: []
}



export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGE_SEARCH_LIST:
            return {
                ...state,
                searchLists:action.data
            }
        default:
        return state
        
    }
}



