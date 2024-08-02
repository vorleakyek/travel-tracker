import { useEffect, useState } from 'react';
import { AppContext } from './components/AppContext';
import Tabs from './components/Tabs';
import CountryInput from './components/CountryInput';
import Map from './components/Map';
import TotalCountries from './components/TotalCountries';
import {get} from './util/http';
import './App.css';

type User = {
  id: number;
  name: string;
  color: string;
}

export type CurrentUser = {
  countries: string[];
  total: number;
  color: string;
  allUsers: User[];
}

export default function App() {
  const [currentUserData, setCurrentUserData] = useState<CurrentUser>();
  const [currentUserId, setCurrentUserId] = useState<number>(1);

  useEffect(() => {
    async function fetchUsersData() {
      const data = await get(`/api/${currentUserId}`) as CurrentUser;
      setCurrentUserData(data)
      console.log('data', data)
    }

    fetchUsersData();
  }, []);

  const contextValue = { currentUserData, currentUserId };
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
