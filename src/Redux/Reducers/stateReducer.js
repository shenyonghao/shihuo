const stateReducer = (prevState=false,action)=>{
    let{type,payload} = action
    switch(type){
        case "HideState":
            return payload;
        case "ShowState":
            return payload;
        default:
            return prevState
    }
}
export default stateReducer