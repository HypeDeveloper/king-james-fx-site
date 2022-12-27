export function SignIn() {
    return (
        <div className="SignIn">
            <h1>Account Login</h1>
            <form className="SignBox">
                <img src="" alt="" />
                <p>Sign into your account</p>
                <div className="wrapInput">
                    <input type="email" name="" id="" placeholder="Email Address" required/>
                </div>
                <div className="wrapInput">
                    <input type="password" name="" id=""  placeholder="Password" required/>
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit">Login</button>
                <p className='bottomText'>
                    Don't have an Account yet? <a href="#" className='formLink'>Create Account</a>
                </p>
            </form>
        </div>
    );
}