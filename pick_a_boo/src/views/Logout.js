import React, { useEffect } from 'react'
import UserContext from '../context/UserContext';

function Logout() {
    const {user, setUser} = props
    useEffect(() => {
        console.log(props.user)
    },[])

    return (
        <div>
            {console.log(props.user)}          
            Thanks for your visit! See you soon!
            /*<Redirect to={{pathname: '/'}}/> */     
        </div>
    )
}

export default Logout