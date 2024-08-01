import { useContext, useReducer, useState } from 'react';
import { AppContext } from './AppContext';
import { User } from '../App';

export default function tabs() {

  const {users} = useContext(AppContext);
  const initial = users ? users[0] : undefined;
  console.log('current', users[0])
  const [currentUser, setCurrentUser] = useState<User | undefined>(initial);

  // console.log('users', currentUser);

  return (
    <>
      <form className="tab-view tab-view-height-auto">
        {users?.map(user => (
          <>
            <input key={Math.random()} type="submit" id={user.id} />
            <label key={Math.random()} htmlFor={user.id} style={{ backgroundColor: `${user.color}`}}>{user.name} </label>
          </>
        ))}

        <input key={Math.random()} type="submit" id="tab" />
        <label key={Math.random()} htmlFor="tab">Add a Member</label>
      </form>
    </>
  )
};
