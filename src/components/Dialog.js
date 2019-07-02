import React from 'react';

export const Dialog = (props) => {
  const name = React.createRef();
  const surname = React.createRef();
  const position = React.createRef();
  const description = React.createRef();

  function addEmployee() {
    const id = new Date().getTime();
    const newEmployee = {
      id,
      name: name.current.value,
      surname: surname.current.value,
      position: position.current.value,
      description: description.current.value,
    }
    props.add(newEmployee);
    props.close();
  }

  function editEmployee() {
    const newEmployee = {
      id: props.item.id,
      name: name.current.value,
      surname: surname.current.value,
      position: position.current.value,
      description: description.current.value,
    }
    props.edit(newEmployee);
    props.close();
  }

  return (
    <div className='dialog'>
      <div className='dialog__overlay' onClick={props.close}></div>
         <div className='dialog__window'>
           <h2 className='dialog__header'>
             {props.type === 'add' ? 'Добавить нового сотрудника' : 'Редактировать данные о сотруднике'}
           </h2>
           <input
             ref={name}
             defaultValue={props.item ? props.item.name : ''}
             className='dialog__input'
             type='text'
             placeholder='Имя'
           />
           <input
             ref={surname}
             defaultValue={props.item ? props.item.surname : ''}
             className='dialog__input'
             type='text'
             placeholder='Фамилмя'
           />
           <input
             ref={position}
             defaultValue={props.item ? props.item.position : ''}
             className='dialog__input'
             type='text'
             placeholder='Должность'
           />
           <textarea
             ref={description}
             defaultValue={props.item ? props.item.description : ''}
             className='dialog__input'
             placeholder='Описание'
           />
           <div className='dialog__button-container'>
             {props.type === 'add'
               ? <button className='dialog__button' onClick={addEmployee}>Добавить</button>
               : <button className='dialog__button' onClick={editEmployee}>Редактировать</button>
             }
           </div>
         </div>
    </div>
  )
}