import './App.css';
import React from 'react';
import { fetchCustomers } from './asyncAction/customers';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state);

  return (
    <div className = 'app'>
      <button
        className='getUsersBtn'
        onClick={() => dispatch(fetchCustomers())}
      >
        Получить пользователей
      </button>
      {users.map((el,id) =>{
        return(<h1 key={id}>{el.name}</h1>)
      })}
    </div>
  );
}

export default App;
