import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
import {getEmployees} from '../employees'

class List extends React.PureComponent {

  componentDidMount() {
    const data = getEmployees();
    this.props.getList(data);
  }

  render () {
    return (
      <div className='list'>
        <h2>Список сотрудников</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.rootReducer.list
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    getList: (data) => { dispatch(actions.getList(data)) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
