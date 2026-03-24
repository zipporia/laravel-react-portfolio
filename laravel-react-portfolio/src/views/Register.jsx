
import { Link } from "react-router-dom";

export default function Register() {

    const Submit = (ev) => {
        ev.preventDefault();
    }


    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    Create A New Account
                </h1>
                <form onSubmit={Submit}>
                    <input type="name" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Register</button>
                    <p className="message">
                        Already Have An Account? <Link to='/login'>Login</Link>
                    </p>
                </form>
            </div>
        
        </div>
    )
}