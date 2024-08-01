import {ReactNode, createContext} from 'react';
import type {User} from '../App';

// type ContextProviderProps = {
//   children: ReactNode;
// }

// export default function AppContextProvider({children}: ContextProviderProps) {

//   const [state]
//   return(

//   );
// }

type AppContextValues = {
  users: User[] | undefined;
}

export const AppContext = createContext<AppContextValues>({
  users: undefined
})
