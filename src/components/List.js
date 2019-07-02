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
        { this.props.list.length
          ? <div className='list__table'>
            <div className='list__table-row'>
              <div className='list__table-col list__table_header'>Имя</div>
              <div className='list__table-col list__table_header'>Фамилия</div>
              <div className='list__table-col list__table_header'>Должность</div>
              <div className='list__table-col list__table_header'>Описание</div>
            </div>
            {this.props.list.map(item =>
              <div key={item.id} className='list__table-row'>
                <div className='list__table-col'>{item.name}</div>
                <div className='list__table-col'>{item.surname}</div>
                <div className='list__table-col'>{item.position}</div>
                <div className='list__table-col'>{item.description}</div>
              </div>
            )}
          </div>
          : <div>Список сотрудников пуст</div>
        }
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
