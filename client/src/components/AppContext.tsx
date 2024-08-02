import {ReactNode, createContext} from 'react';
import type {CurrentUser} from '../App';

// type ContextProviderProps = {
//   children: ReactNode;
// }

// export default function AppContextProvider({children}: ContextProviderProps) {

//   const [state]
//   return(

//   );
// }

type AppContextValues = {
  currentUserData: CurrentUser | undefined;
  currentUserId: number | undefined;
}

export const AppContext = createContext<AppContextValues>({
  currentUserData: undefined,
  currentUserId: undefined
})
