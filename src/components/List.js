import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { getEmployees } from '../employees'
import { Dialog } from './Dialog'
import { Employee } from "./Employee";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openEmployee: null,
    }
  }

  componentDidMount() {
    const data = getEmployees();
    this.props.getList(data);
  }

  selectEmployee = (item) => {
    this.setState({openEmployee: item});
  }

  closeInfoScreen = () => {
    this.setState({openEmployee: null});
  }

  render () {
    const {
      props: {list, activeDialog, dialogOpen, dialogClose, addEmployee, editEmployee},
      state: {openEmployee},
    } = this
    return (
      <div className='list'>
        {openEmployee
          ? <Employee data={openEmployee} close={this.closeInfoScreen} showDialog={dialogOpen} />
          : <div className='screen-1'>
            <h2>Список сотрудников</h2>
            { list.length
              ? <div className='list__table'>
                <div className='list__table-row'>
                  <div className='list__table-col list__table_header'>Имя</div>
                  <div className='list__table-col list__table_header'>Фамилия</div>
                  <div className='list__table-col list__table_header'>Должность</div>
                  </div>
                  { list.map(item =>
                    <div key={item.id} className='list__table-row' onClick={() => this.selectEmployee(item)}>
                      <div className='list__table-col'>{item.name}</div>
                      <div className='list__table-col'>{item.surname}</div>
                      <div className='list__table-col'>{item.position}</div>
                    </div>
                  )}
                </div>
              : <div>Список сотрудников пуст</div>
            }
            <button onClick={() => dialogOpen('add')} className='list__button'>
            Добавить сотрудника
            </button>
          </div>
        }

        { activeDialog === 'add' && <Dialog type='add' close={dialogClose} add={addEmployee} /> }
        { activeDialog === 'edit' && <Dialog type='edit' close={dialogClose} item={openEmployee} edit={editEmployee} /> }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.rootReducer.list,
    activeDialog: state.rootReducer.activeDialog,
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    getList: (data) => { dispatch(actions.getList(data)) },
    addEmployee: (data) => { dispatch(actions.addEmployee(data)) },
    dialogOpen: (name) => { dispatch(actions.dialogOpen(name)) },
    editEmployee: (item) => { dispatch(actions.editEmployee(item)) },
    dialogClose: () => { dispatch(actions.dialogClose()) },
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
