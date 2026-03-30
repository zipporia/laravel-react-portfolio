
import { useRef } from "react";
import axiosClient from "../axiosClient"

export default function UserForm(){

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const Submit = (ev) => {
        ev.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        // axiosClient.post('/users')
        console.log(payload)
    }

    return(
        <div>
            User Form
            <form onSubmit={Submit} >
                <input ref={nameRef} type="text" placeholder="Name" />
                <input ref={emailRef}  type="email" placeholder="Email" />
                <input ref={passwordRef}  type="password" placeholder="Password" />
                <button type="submit" className="btn btn-block">Submit</button>
            </form>

        </div>
    )

}