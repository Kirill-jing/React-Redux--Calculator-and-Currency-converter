export const CLOSE = 'CLOSE'
export const INCREMENT = 'INCREMENT'
export const DELETEONE='DELETEONE'
export const CLICK = 'CLICK'
export const ROOT='ROOT'
export const SQUARE='SQUARE'
export const CALC = 'CALC'
export const STORE_RESULT = 'STORE_RESULT'

export const saveResult = ( data ) => {
    return {
        type: STORE_RESULT,
        result: data
    };
}
export const storeResult = ( res ) => {
   return dispatch=>{
    fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(res=>res.json())
    .then(data=>dispatch(saveResult(data)))
   }
  
};