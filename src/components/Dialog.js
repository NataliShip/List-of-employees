import React from 'react';

export const Dialog = (props) => {
  const addName = React.createRef();
  const addSurname = React.createRef();
  const addPosition = React.createRef();
  const addDescription = React.createRef();

  function addEmployee() {
    const id = new Date().getTime();
    const newEmployee = {
      id,
      name: addName.current.value,
      surname: addSurname.current.value,
      position: addPosition.current.value,
      description: addDescription.current.value,
    }
    props.add(newEmployee);
    props.close();
  }

  return (
    <div className='dialog'>
      <div className='dialog__overlay' onClick={props.close}></div>
      { props.type === 'add' &&
         <div className='dialog__window'>
           <h2 className='dialog__header'>Добавить нового сотрудника</h2>
           <input ref={addName} className='dialog__input' type='text' placeholder='Имя' />
           <input ref={addSurname} className='dialog__input' type='text' placeholder='Фамилмя' />
           <input ref={addPosition} className='dialog__input' type='text' placeholder='Должность' />
           <textarea ref={addDescription} className='dialog__input' placeholder='Описание' />
           <div className='dialog__button-container'>
             <button className='dialog__button' onClick={addEmployee}>Добавить</button>
           </div>
         </div>
      }
    </div>
  )
}