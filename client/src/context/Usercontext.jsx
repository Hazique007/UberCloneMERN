import React,{createContext,useState} from 'react'
export const UserDatacontext = createContext()
const Usercontext = ({children}) => {

    const [user, setUser] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })
  return (
    <div>
        <UserDatacontext.Provider >
            {children}

            </UserDatacontext.Provider>
    </div>
  )
}

export default Usercontext