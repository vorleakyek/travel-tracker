import { useEffect, useState } from 'react';
import { AppContext } from './components/AppContext';
import Tabs from './components/Tabs';
import CountryInput from './components/CountryInput';
import Map from './components/Map';
import TotalCountries from './components/TotalCountries';
import {get} from './util/http';
import './App.css';

export type User = {
  id: string;
  color: string;
  name: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    async function fetchUsersData() {
      const data = await get('/api/users') as User[];
      setUsers(data)
      console.log(data)

      //sample code
      // const blogPosts: BlogPost[] = data.map((rawPost) => {
      //   return {
      //     id: rawPost.id,
      //     title: rawPost.title,
      //     text: rawPost.body,
      //   };
      // });

    }

    fetchUsersData();
  }, []);

  const contextValue = {users};
    //pass Users data to the Tabs components
  return (
    <AppContext.Provider value={contextValue}>
      <div >
        <Tabs />
        <CountryInput/>
        <Map/>
        <TotalCountries />
      </div>

    </AppContext.Provider>
  );
}
