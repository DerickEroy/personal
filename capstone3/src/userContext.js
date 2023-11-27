import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  const unsetUser = () => {
    localStorage.clear();
  };

  const contextValue = {
    user,
    setUser,
    unsetUser
  };

  useEffect(() => {
        console.log(user);

        fetch('http://localhost:4000/users/details', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(typeof data._id !== "undefined") {
                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                })
            } else {
                setUser({
                    id: null,
                    isAdmin: null
                })
            }
        })
    }, [])
    console.log(user);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

