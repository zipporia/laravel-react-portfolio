
export default function Login() {

    const Submit = (ev) => {
        ev.preventDefault();
    }


    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <form onSubmit={Submit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                </form>
            </div>
        
        </div>
    )
}