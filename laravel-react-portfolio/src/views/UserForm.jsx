
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
                    setUsers(data)
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
            {!loading && (
                <form onSubmit={Submit} >
                    <input value={users.name} onChange={ev => setUsers({...users, name: ev.target.value})} type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn btn-block">Submit</button>
                </form>
            )}


        </div>
    )

}