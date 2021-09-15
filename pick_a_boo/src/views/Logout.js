import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Logout() {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            {user !== null? ()=>{
                setUser(null);
                <div>
                    Thanks for your visit! See you soon!
                    <Redirect to={{pathname: '/'}}/>
                </div>
            } 
            : null}
        </div>
    )
}

export default Logout
