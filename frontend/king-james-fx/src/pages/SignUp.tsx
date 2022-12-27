export function SignUp() {
    return (
        <div className="SignUp">
            <h1>Create Account</h1>
            <form className="SignBox">
                <img src="" alt="" />

                <p>Account registration</p>
                <div className="splitWrap">
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
                                placeholder="Password"
                                required
                            />
                        </div>
                    </div>
                </div>

                <button className="buttonForm" type="submit">
                    Register
                </button>
                <p className="bottomText">
                    Already you have an account in here?{" "}
                    <a href="#" className="formLink">
                        Sign In
                    </a>
                </p>
            </form>
        </div>
    );
}