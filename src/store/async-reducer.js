import * as actiontype from './actions/actions'
const initialState = {
    data:{},
    valute:{},
    valute2:{},
    yourval:undefined,
    final:undefined
}
const asyncreducer =(state=initialState,action)=>{
    switch(action.type){
        case actiontype.STORE_RESULT:
            return{
                ...state,
                data:action.result,
            }
            case actiontype.CUR_1:
            if(action.val1=='AUD'){
                return{
                    ...state,
                    valute:state.data.Valute.AUD
                                }
            }
            case actiontype.CUR_2:
         if(action.val2=='AUD'){
            return{ ...state,
            valute2:state.data.Valute.AUD
            }
         }
         case actiontype.YOURVAL:
             return{
                 ...state,
            yourval:action.yourval
             }
            case actiontype.CHANGE:
            let final=state.valute2.Nominal*state.yourval/state.valute2.Value
         return{
             ...state,
             final:final
         }
         
          
        }
        
            return state 
}

export default asyncreducer