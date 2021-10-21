import React from 'react';
import {connect} from 'react-redux';
import { decrement } from './CounterAction';

const Counter=(props)=>{
    return(
        <div>
            <h3>Counter is {props.count}</h3>
            <button onClick={props.decrement}>Decrement Counter</button>
        </div>
    );
}
const mapStateToProps=state=>{
    return{
        count:state.count
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        decrement:()=>dispatch(decrement())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
