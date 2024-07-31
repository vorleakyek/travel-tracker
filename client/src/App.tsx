import { useEffect, useState } from 'react';
import Tabs from './components/Tabs';
import CountryInput from './components/CountryInput';
import Map from './components/Map';
import TotalCountries from './components/TotalCountries';
import {get} from './util/http';
import './App.css';

type RawDataUser = {
  id: string;
  color: string;
  name: string;
}

export default function App() {
  const [users, setUsers] = useState<RawDataUser[]>();

  useEffect(() => {
    async function fetchUsersData() {
      const data = await get('/api/users') as RawDataUser[];
      setUsers(data)

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

    //pass Users data to the Tabs components
  return (
    <>
      <div >
        <Tabs />
        <CountryInput/>
        <Map/>
        <TotalCountries />
      </div>

    </>
  );
}
