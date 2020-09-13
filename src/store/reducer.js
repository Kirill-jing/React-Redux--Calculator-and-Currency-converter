
const initialState = {
    counter:' ',
    resulte:[],
    calc:undefined,
    reg:(/[+-]/)
}

const reducer =(state=initialState,action)=>{
    if(action.type==='INCREMENT'){
        return{
            ...state,
            counter:state.counter+action.val
        }
    }
    else if(action.type==='STORE'){
        return{
            ...state,
            resulte:state.resulte.concat({value:state.counter,id:Math.random()})
        }
    }
    else if(action.type==='CALC'){
        var expression = action.value;
        var exp = Function('return '+expression);
        return{
            ...state,
            calc:exp()
        }
    }
    else if(action.type==='SQUARE'){  
        let count=Math.sqrt(action.sq)
        let newcounter=state.counter.slice(0,state.counter.length-1)+count
        return{
            ...state,
            counter:newcounter,
  
        }
    }
    return state
}

export default reducer