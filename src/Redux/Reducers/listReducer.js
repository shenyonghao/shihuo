const listReducer = (prevState=[],action)=>{
    // console.log(action)
    let{type,payload} = action
    switch(type){
        case "addList":
            return [...prevState,...payload]
        case "remove":
            return [...prevState].splice(payload,1);
        default:
            return prevState;
    }
}
export default listReducer