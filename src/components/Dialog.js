import React from 'react';

export const Dialog = (props) => {
  return (
    <div className='dialog'>
      <div className='dialog__overlay' onClick={props.close}></div>
      { props.type === 'add' &&
         <div className='dialog__window'>
           <h2 className='dialog__header'>Добавить нового сотрудника</h2>
           <input id='add-name' className='dialog__input' type='text' placeholder='Имя' />
           <input id='add-surname' className='dialog__input' type='text' placeholder='Фамилмя' />
           <input id='add-position' className='dialog__input' type='text' placeholder='Должность' />
           <textarea id='add-description' className='dialog__input' placeholder='Описание' />
           <div className='dialog__button-container'>
             <button className='dialog__button'>Добавить</button>
           </div>
         </div>
      }
    </div>
  )
}