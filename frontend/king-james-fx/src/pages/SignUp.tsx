export function SignUp() {
    const formData = {
        userName: '',
        fullName: '',
        email: '',
        password: '',
        country: '',
        
    }
    const handleForm = () => {
        
    }
    return (
        <div className="sign">
            <div className="header">
                <h1>Welcom back</h1>
            </div>
            <div className="signWrap">
                <UserInfoFirst />
            </div>
        </div>
    );
}

function UserInfoFirst(props) {
    const handleSwitch = () => {
        
    }
    return (
        <>
            <div className="SignUp">
                <div>
                    <h1>Create Account</h1>
                    <p>Fill in your details below</p>
                </div>
                <form className="SignBox">
                    <div className="splitForm">
                        {/* Fullname */}
                        <div className="wrapInput">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="FullName"
                                required
                            />
                        </div>
                        {/* Username */}
                        <div className="wrapInput">
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="UserName"
                                required
                            />
                        </div>
                        {/* email */}
                        <div className="wrapInput">
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Email"
                                required
                            />
                        </div>
                        {/* country */}
                        <select name="Country" id="CountryForm">
                            <option value="Nigeria">Nigeria</option>
                            <option value="China">China</option>
                            <option value="USA">USA</option>
                            <option value="South Africa">South Africa</option>
                        </select>
                        {/* password */}
                    </div>
                    <button className="buttonForm" onClick={handleSwitch} type="submit">
                        Next
                    </button>
                    <p className="bottomText">
                        Already you have an account in here?{" "}
                        <a href="/" className="formLink">
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </>
    );
}
function UserInfoSecond(props) {
    return (
        <>
            <div className="SignUp">
                <h1>Add Your Wallets</h1>
                <p>Add the address of the wallet you will like to use</p>
                <form className="SignBox">
                    <div className="splitWrap">
                        <div className="splitForm">
                            {/* Wallets */}
                            <div className="wrapInput">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="BTC Address"
                                    required
                                />
                            </div>
                            <div className="wrapInput">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="ETH Address"
                                />
                            </div>
                            <div className="wrapInput">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="USDT(TRC20)"
                                />
                            </div>
                            {/* Passwords */}
                            
                        </div>
                    </div>
                    <button className="buttonForm" type="submit">
                        Next
                    </button>
                </form>
            </div>
        </>
    );
}
function UserInfoThird() {
    return (
        <>
            <div className="SignUp">
                <h1>Secure Your Account</h1>
                <p>Setup a strong password for your account</p>
                <form className="SignBox">
                    <div className="splitWrap">
                        <div className="splitForm">
                            {/* Passwords */}
                            <div className="wrapInput">
                                <input
                                    type="password"
                                    name=""
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="wrapInput lastPassword">
                                <input
                                    type="password"
                                    name=""
                                    id="validatePassword"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <button className="buttonForm" type="submit">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
}
