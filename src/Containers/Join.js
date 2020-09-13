import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { styled } from '@material-ui/core/styles';
import style from 'styled-components'
import { flexbox } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input'

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    margin:'10px',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });
  const Gr = style.div`
display:flex;
justify-content:flex-end;
width:300px;

flex-direction:column;
  `
  const Main=style.body`
  display:flex;
  justify-content:center;
  background-color:blue;
  margin:0;

  `
  const Grbtn = style.div`
  display:flex;
  justify-content:center;
  flex-direction:row;
    `
    const MyInput=styled(Input)({
       
    })
class Join extends Component{


    render (){

        return(
     <Main>
            <Gr >

        <MyInput type='text'value={this.props.ctr}></MyInput>
    <Grbtn>  
        <MyButton onClick={()=>this.props.onSquare(this.props.ctr.charAt(this.props.ctr.length-1))}>{'\u221a'}</MyButton>
        <MyButton onClick={()=>this.props.onAdd('2')} >{'x'+'\u00B2'}</MyButton>
<MyButton onClick={()=>this.props.onAdd('')} >3</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'9')} >9</MyButton>
</Grbtn>  
  <Grbtn>    
<MyButton onClick={()=>this.props.onAdd(+'1')} >1</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'2')} >2</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'3')} >3</MyButton>
<MyButton onClick={()=>this.props.onAdd('*')} >{'\u00D7'}</MyButton>
</Grbtn>  
<Grbtn>  
<MyButton onClick={()=>this.props.onAdd(+'4')} >4</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'5')} >5</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'6')} >6</MyButton>
<MyButton onClick= {()=>this.props.onAdd('+')} >+</MyButton>
</Grbtn>
<Grbtn>   
<MyButton onClick={()=>this.props.onAdd(+'7')} >7</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'8')} >8</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'9')} >9</MyButton>
<MyButton  onClick= {()=>this.props.onAdd('-')} >-</MyButton>
</Grbtn> 
<Grbtn>  
<MyButton onClick={()=>this.props.onAdd()} >+/-</MyButton>
<MyButton onClick={()=>this.props.onAdd('0')} >0</MyButton>
<MyButton onClick={()=>this.props.onAdd('.')} >,</MyButton>
<MyButton onClick={()=>this.props.calc(this.props.ctr)} >=</MyButton>
</Grbtn>
        <div>{this.props.calcRes}</div>

<ul>
    {this.props.storedRes.map((res,id)=>(
        <li onClick={()=>this.props.delelteResults(id)}>{res.value}</li>
    )
    )}

</ul>
</Gr>
</Main>

        )
    }
}

const mapStateToProps=state=>{
console.log(state.calc)
    return{
        ctr:state.counter,
        storedRes:state.resulte,
        calcRes:state.calc
    }
}
const mapDispatchToProps=dispatch=>{
  
    return{
    onAdd:(numb)=>dispatch({type:'INCREMENT', val:numb}),
    storeResults:()=>dispatch({type:'STORE'}),
    calc:(number)=>dispatch({type:'CALC',value:number}),
    onSquare:(n)=>dispatch({type:'SQUARE',sq:n})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Join)