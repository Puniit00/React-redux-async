import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchUsers } from '../Redux/user/userAction'


function UserContainer({fetchUsers,userData}) {
    useEffect(() => {
        console.log(fetchUsers+"=>"+userData)
        fetchUsers()
    })
    return userData.loading?(<h1>Loading</h1>):userData.error?(<h2>{userData.error}</h2>): (
        <div>
            {userData.user}
        </div>
    )
}

const mapStateToProps= state=>{
    console.log(state)
    return {

        user: state.user
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
