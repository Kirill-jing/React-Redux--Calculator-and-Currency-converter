import * as actiontype from './actions/actions'
const initialState = {
    data:{},
    valute:[]
}
const asyncreducer =(state=initialState,action)=>{
    switch(action.type){

        case actiontype.STORE_RESULT:
           let currensy =Object.values(action.result.Valute.AUD)
            return{
                ...state,
                data:action.result,
                valute:currensy
            }
        }

        
            return state
        

    


}

export default asyncreducer