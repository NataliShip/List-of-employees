import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { getEmployees } from '../employees'
import { Dialog } from './Dialog'

class List extends React.PureComponent {

  componentDidMount() {
    const data = getEmployees();
    this.props.getList(data);
  }

  render () {
    const {props: {list, isAddDialogOpen, addDialogOpen, addDialogClose, addEmployee}} = this
    return (
      <div className='list'>
        <h2>Список сотрудников</h2>
        { list.length
          ? <div className='list__table'>
            <div className='list__table-row'>
              <div className='list__table-col list__table_header'>Имя</div>
              <div className='list__table-col list__table_header'>Фамилия</div>
              <div className='list__table-col list__table_header'>Должность</div>
            </div>
            { list.map(item =>
              <div key={item.id} className='list__table-row'>
                <div className='list__table-col'>{item.name}</div>
                <div className='list__table-col'>{item.surname}</div>
                <div className='list__table-col'>{item.position}</div>
              </div>
            )}
          </div>
          : <div>Список сотрудников пуст</div>
        }
        <button onClick={addDialogOpen} className='list__button'>
          Добавить сотрудника
        </button>
        {isAddDialogOpen && <Dialog type='add' close={addDialogClose} add={addEmployee} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.rootReducer.list,
    isAddDialogOpen: state.rootReducer.isAddDialogOpen,
    isChangeDialogOpen: state.rootReducer.isChangeDialogOpen,
    isInfoDialogOpen: state.rootReducer.isInfoDialogOpen,
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    getList: (data) => { dispatch(actions.getList(data)) },
    addEmployee: (data) => { dispatch(actions.addEmployee(data)) },
    addDialogOpen: () => { dispatch(actions.addDialogOpen()) },
    addDialogClose: () => { dispatch(actions.addDialogClose()) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
