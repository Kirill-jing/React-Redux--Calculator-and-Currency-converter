import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { styled } from '@material-ui/core/styles';
import style from 'styled-components'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {NavLink}  from 'react-router-dom'


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
       const StyledMenuItem = withStyles((theme) => ({
            root: {
              '&:focus': {
                backgroundColor: theme.palette.primary.main,
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                  color: theme.palette.common.white,
                },
              },
            },
          }))(MenuItem);
    
     const   StyledMenu = withStyles({
            paper: {
              border: '1px solid #d3d4d5',
            },
          })((props) => (
            <Menu
              elevation={0}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              {...props}
            />
          ));

        return(

     <Main>
            <MyButton
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={(event)=>this.props.handleClick(event)}
          >
            Open Menu
          </MyButton>
          <StyledMenu
        id="customized-menu"
        anchorEl={this.props.anchorEl}
        keepMounted
        open={Boolean(this.props.anchorEl)}
      >
    <StyledMenuItem onClick={this.props.handleClose}>
   <NavLink to='/chat' exact>Инженерный</NavLink>
        </StyledMenuItem>
      </StyledMenu>
            <Gr >

        <MyInput type='text'value={this.props.ctr}></MyInput>
    <Grbtn>  
        <MyButton onClick={()=>this.props.onRoot(this.props.ctr.split(' '))}>{'\u221a'}</MyButton>
        <MyButton onClick={()=>this.props.onSquare(this.props.ctr.split(' '))} >{'x'+'\u00B2'}</MyButton>
<MyButton onClick={()=>this.props.DeleteAll()} >C</MyButton>
<MyButton onClick={()=>this.props.onAdd(' / ')}>{'\u00F7'}</MyButton>
</Grbtn>  
  <Grbtn>    
<MyButton onClick={()=>this.props.onAdd(+'1')} >1</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'2')} >2</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'3')} >3</MyButton>
<MyButton onClick={()=>this.props.onAdd(' * ')} >{'\u00D7'}</MyButton>
</Grbtn>  
<Grbtn>  
<MyButton onClick={()=>this.props.onAdd(+'4')} >4</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'5')} >5</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'6')} >6</MyButton>
<MyButton onClick= {()=>this.props.onAdd(' + ')} >+</MyButton>
</Grbtn>
<Grbtn>   
<MyButton onClick={()=>this.props.onAdd(+'7')} >7</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'8')} >8</MyButton>
<MyButton onClick={()=>this.props.onAdd(+'9')} >9</MyButton>
<MyButton  onClick= {()=>this.props.onAdd(' - ')} >-</MyButton>
</Grbtn> 
<Grbtn>  
<MyButton onClick={()=>this.props.onAdd('-')} >+/-</MyButton>
<MyButton onClick={()=>this.props.onAdd('0')} >0</MyButton>
<MyButton onClick={()=>this.props.onAdd('.')} >,</MyButton>
<MyButton onClick={()=>this.props.calc(this.props.ctr)} >=</MyButton>
</Grbtn>

</Gr>
</Main>

        )
    }
}

const mapStateToProps=state=>{

    return{
        ctr:state.counter,
        storedRes:state.resulte,
        calcRes:state.calc,
        anchorEl:state.anchorEl
    }
}
const mapDispatchToProps=dispatch=>{
    return{
    onAdd:(numb)=>dispatch({type:'INCREMENT', val:numb}),
    calc:(number)=>dispatch({type:'CALC',value:number}),
    onRoot:(n)=>dispatch({type:'ROOT',sq:n}),
    onSquare:(n)=>dispatch({type:'SQUARE',sq:n}),
    DeleteOne:(n)=>dispatch({type:'DELETEONE',del:n}),
    handleClick:(event)=>dispatch({type:'CLICK' ,e:event.currentTarget }),
    handleClose:()=>dispatch({type:'CLOSE'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Join)