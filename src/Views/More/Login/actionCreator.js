const ShowTabbar = ()=>({
    type:'ShowTabbar',
    payload:true
})
const HideTabbar = ()=>({
    type:'HideTabbar',
    payload:false
})
const ShowState = ()=>({
    type:'ShowState',
    payload:true
})
const HideState = ()=>({
    type:'HideState',
    payload:false
})
export {ShowTabbar,HideTabbar,ShowState,HideState}