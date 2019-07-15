const tabbarReducer = (prevState=true,action)=>{
    // console.log(action)
    let{type,payload} = action
    switch(type){
        case "HideTabbar":
            return payload;
        case "ShowTabbar":
            return payload;
        default:
            return prevState;
    }
}
export default tabbarReducer