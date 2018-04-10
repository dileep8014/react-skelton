/**
 * Created by dileepkumar on 4/9/18.
 */
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as ActionTypes from './actions';

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounterAction: () => dispatch({ type: ActionTypes.INCREASE_COUNTER }),
    decreaseCounterAction: () => dispatch({ type: ActionTypes.DECREASE_COUNTER }),
  }
}



class Counter extends React.Component {
  
  componentDidMount() {
    
  }
  
  render() {
    return(
      <Fragment>
        <div onClick={this.props.increaseCounterAction}>increase</div>
          {this.props.counter}
        <div onClick={this.props.decreaseCounterAction}>decrease</div>
      </Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)