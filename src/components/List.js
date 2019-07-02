import React from 'react';
import {getEmployees} from '../employees'

class List extends React.PureComponent {

  componentDidMount() {
    const data = getEmployees();
    console.log(data);
  }

  render () {
    return (
      <div className='list'>
        <h2>Список сотрудников</h2>
      </div>
    );
  }
}

export default List;
