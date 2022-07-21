import * as actionTypes from './constants'
const defaultState={
    mylikeLists: [],
    like:[]
}



const addVideos = (list,data) => {
    let newList=list;
    let index=0;
    data.index=index++;
    newList.push(data);
    return newList;
  }
const changelike=(list)=>{
    let newList=list;
    
    return newList
}  
const deletelike =(list,data)=>{
  let newList=list;
  //在mylikelist中通过indexof找知道指定的id 首次出现的位置 并删除它
  newList.splice(newList.indexOf(newList.find(function(element){ 
    return element.id === data.id; }
    )
), 1);
  return newList

}

export default (state=defaultState,action)=>{
    console.log('123456',action.data);
   
    switch (action.type){
        case actionTypes.CHANGE_MYLIKE_LIST:
            return {
                ...state,
                mylikeLists:addVideos(Object.assign([],state.mylikeLists),action.data)
            }
        case actionTypes.ADD_LIKE:
            return{
                ...state,
                like:changelike(Object.assign([],state.mylikeLists))
            }
        case actionTypes.DELETE_LIKE:
        return{
            ...state,
            like:deletelike(Object.assign([],state.mylikeLists),action.data),
            mylikeLists:deletelike(Object.assign([],state.mylikeLists),action.data)
        }
        default:
        return state
        
    }
}



