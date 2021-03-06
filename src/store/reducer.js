import * as actiontype from "./actions/actions";
const initialState = {
  counter: "",
  resulte: [],
  calc: undefined,
  anchorEl: null,
  data: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.CLOSE:
      return {
        ...state,
        anchorEl: null,
      };
    case actiontype.CLICK:
      return {
        ...state,
        anchorEl: action.e,
      };
    case actiontype.INCREMENT:
      return {
        ...state,
        counter: state.counter + action.val,
      };
    case actiontype.CALC:
      let expression = action.value;
      let exp = Function("return " + expression);
      let fix = exp();
      return {
        ...state,
        calc: exp(),
        counter: String(fix),
      };
    case actiontype.ROOT:
      let strroot = action.sq;
      let nwroot = strroot.pop();
      strroot.push(Math.sqrt(nwroot));
      let newstr2 = strroot.join("");
      return {
        ...state,
        counter: newstr2,
      };
    case actiontype.SQUARE:
      let str = action.sq;
      let nw = str.pop();
      str.push(nw ** 2);
      let newstr1 = str.join("");
      return {
        ...state,
        counter: newstr1,
      };
    case actiontype.DELETEONE:
      return {
        ...state,
        counter: "",
        calc: 0,
      };
    case actiontype.LOG:
      let strn = action.pow;
      let nwn = strn.pop();
      strn.push(Math.log(nwn));
      let newstr1n = strn.join("");
      return {
        ...state,
        counter: newstr1n,
        calc: newstr1n,
      };
    case actiontype.EXP:
      let estr = action.exp;
      let expo = estr.pop();
      estr.push(Math.exp(expo));
      let newstrexp = estr.join("");
      return {
        ...state,
        counter: newstrexp,
        calc: newstrexp,
      };
  }

  return state;
};

export default reducer;
