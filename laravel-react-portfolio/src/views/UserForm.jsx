import { useEffect, useRef } from "react"
import axiosClient from "../axiosClient"

export default function UserForm(){

    const nameRef = useRef();

    const payload = {
        name: nameRef.current.value,
    }

    const Submit = (ev) => {
        ev.preventDefault();
        axiosClient.post('/users')
    }

    return(
        <div>
            User Form
            <form onSubmit={Submit} >
                <input ref={nameRef} type="name" />
                <input type="email" />
                <input type="password" />
                <button className="btn btn-block">Submit</button>
            </form>

        </div>
    )

}