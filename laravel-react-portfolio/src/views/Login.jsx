
import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";

export default function Login() {

    const emailRef = useRef();
    const passowrdRef = useRef();

    const {setToken, setUser} = useStateContext();

    const Submit = (ev) => {
        ev.preventDefault();

        const paylod = {
            email: emailRef.current.value,
            password: passowrdRef.current.value,
        }

        axiosClient.post('/login',paylod).then(({data}) => {
            console.log(data)
            setToken(data.token)
            setUser(data.user)
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 422){
                console.log(response.data.errors);
            }
        })
    }


    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    Login To Your Account
                </h1>
                <form onSubmit={Submit}>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passowrdRef} type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <Link to='/register'>Create a new account.</Link>
                    </p>
                </form>
            </div>
        
        </div>
    )
}