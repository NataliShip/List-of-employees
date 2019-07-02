import React from "react";

export const Employee = (props) => {
  return (
    <div className='screen-2'>
      <div>
        <h2>Информация о сотруднике</h2>
        <p><strong>Имя:</strong> {props.data.name ? props.data.name : 'Не указано'}</p>
        <p><strong>Фамилия:</strong> {props.data.surname ? props.data.surname : 'Не указана'}</p>
        <p><strong>Должность:</strong> {props.data.position ? props.data.position : 'Не указана'}</p>
        <p><strong>Описание:</strong> {props.data.description ? props.data.description : 'Не указано'}</p>
        <button className='list__button' onClick={props.close}>К списку</button>
        <button className='list__button list__button_white' onClick={() => props.showDialog('edit')}>
          Редактировать
        </button>
      </div>
    </div>
  )
}