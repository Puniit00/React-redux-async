import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../Redux/user/userAction'


function UserContainer({fetchUsers,userData}) {
    useEffect(() => {
       fetchUsers()
    },[])

    if(userData.error){
        return(
            <div>
                <p>{userData.error}</p>
            </div>
        )
    }
    else if(userData.loading){
        return(
            <p>Loading</p>
        )
    }
    else{
    return (
        <div>
            {userData.users.map(item=><p>{item.name}</p>)}
        </div>
    )}
}

const mapStateToProps= state=>{
    console.log(state)
    return {

        userData: state
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
