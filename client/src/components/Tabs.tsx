import { useContext, useReducer, useState } from 'react';
import { AppContext } from './AppContext';
import type { CurrentUser } from '../App';

export default function Tabs() {

  const {currentUserData} = useContext(AppContext);

  // const initial = currentUserData ? users[0] : undefined;
  // console.log('current', users)
  return (
    <>
        {currentUserData?.allUsers?.map(user => (
          <button key={user.id} style={{backgroundColor: user.color}} onClick={() => console.log(user.name)}>{user.name}</button>
        ))}
        <button style={{backgroundColor: 'lightgray'}}>Add a Member</button>
    </>
  )
};
