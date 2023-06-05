import '../styles/Login.css';

export default function Login() {
    return (
        <form id="login">
            <div className='login-label'>
                <h1>Login</h1>
                <h4>Are you the business owner? Login below </h4>
            </div>
            <div className='login-container'>
                {/* <h1 className='login-title'>Login</h1> */}
                {/* <h4 className='login-label'>Are you the business owner? Login below</h4> */}
                <h2 className='login-label'>Login here.</h2>
                <h3>Password</h3>
                <div className='break-sml' />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
}