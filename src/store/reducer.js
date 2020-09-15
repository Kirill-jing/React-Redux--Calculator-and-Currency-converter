
const initialState = {
    counter:'',
    resulte:[],
    calc:undefined,
    anchorEl:null

}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case 'CLOSE':
        return {
            ...state,
            anchorEl:null
        }
        case 'CLICK':
        return {
            ...state,
            anchorEl:action.e
        }
    case 'INCREMENT':
       return {
            ...state,
            counter:state.counter+action.val
        };
    case 'CALC':
        let expression = action.value;
        let exp = Function('return '+expression);
        let fix= exp()
        
        return{
                ...state,
                calc:exp(),
                counter:String(fix.toFixed(2))
           
        }
    case 'ROOT':
        let strroot =action.sq
        let nwroot = strroot.pop()
        strroot.push(Math.sqrt(nwroot))
        let newstr2 =strroot.join('')
        return{
            ...state,
            counter:newstr2,
        }
    case 'SQUARE':
        let str =action.sq
        let nw = str.pop()
        str.push(nw**2)
        let newstr1 =str.join('')
        return{
            ...state,
            counter:newstr1
        }
    case 'DELETEONE':
        let newstr=state.counter.slice(0,action.del)
        return {
            ...state,
            counter:newstr,
            calc:0
        }
    case 'DELETEALL':
        return{
            ...state,
            counter:' ',
            calc:0
        }
        }
            return state
        

    


}

export default reducer