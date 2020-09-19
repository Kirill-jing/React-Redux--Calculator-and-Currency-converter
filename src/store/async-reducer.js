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
            if(action.val1==='AUD'){
                return{
                    ...state,
                    valute:state.data.Valute.AUD
                                }
            }
            if(action.val1==='AZN'){
                return{
                    ...state,
                    valute:state.data.Valute.AZN
                                }
            }
            if(action.val1==='BYN'){
                return{
                    ...state,
                    valute:state.data.Valute.BYN
                                }
            }
            if(action.val1==='EUR'){
                return{
                    ...state,
                    valute:state.data.Valute.EUR
                                }
            }
            if(action.val1==='USD'){
                return{
                    ...state,
                    valute:state.data.Valute.USD
                                }
            }


            case actiontype.CUR_2:
         if(action.val2==='AZN'){
            return{ ...state,
            valute2:state.data.Valute.AZN
            }
         }
         if(action.val2==='AUD'){
            return{ ...state,
            valute2:state.data.Valute.AUD
            }
         }
         if(action.val2==='BYN'){
            return{
                ...state,
                valute2:state.data.Valute.BYN
                            }
        }
        if(action.val2==='USD'){
            return{
                ...state,
                valute2:state.data.Valute.USD
                            }
        }
        if(action.val2==='EUR'){
            return{
                ...state,
                valute2:state.data.Valute.EUR
                            }
        }
         case actiontype.YOURVAL:
             return{
                 ...state,
            yourval:action.yourval
             }
            case actiontype.CHANGE:
           let final = state.valute2.Nominal*state.valute.Value/state.valute2.Value*state.yourval
         return{
             ...state,
             final:final.toFixed(7)
         } 
        }
            return state 
}

export default asyncreducer