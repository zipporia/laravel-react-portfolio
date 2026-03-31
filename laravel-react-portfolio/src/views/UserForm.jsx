
import { useRef } from "react";
import axiosClient from "../axiosClient"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function UserForm(){

    const {id} = useParams();
    const [users, setUsers] = useState({
        id: null,
        name: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);

    if(id){
        useEffect(() => {
            setLoading(true)
            axiosClient.get(`/users/${id}`)
                .then(({data}) => {
                    setLoading(false)
                    setUsers(data.data)
                })
                .catch(() => {
                    setLoading(false)
                })
        },[])
    }

    const Submit = (ev) => {
        ev.preventDefault();

        console.log(users)
    
    }

    return(
        <div>
            {users.id && <h1>Update User: {users.name} </h1> }
            {!users.id && <h1>New User</h1> }
            {!loading && (
                <form onSubmit={Submit} >
                    <input value={users.name} onChange={ev => setUsers({...users, name: ev.target.value})} placeholder="Name" />
                    <input value={users.email} onChange={ev => setUsers({...users, email: ev.target.value})} placeholder="Email" />
                    <input onChange={ev => setUsers({...users, password: ev.target.value})} type="password" placeholder="Password" />
                    <input onChange={ev => setUsers({...users, password_confirmation: ev.target.value})} type="password" placeholder="Password Confirmation" />
                    <button type="submit" className="btn btn-block">Submit</button>
                </form>
            )}


        </div>
    )

}