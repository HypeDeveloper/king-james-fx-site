class Users {
    constructor(
        fullname,
        username,
        email,
        country,
        password,
        btcAddress,
        ethAddress,
        usdtAddress,
        userRefCode,
        inviteRefCode
    ) {
        this.fullname = fullname;
        this.email = email;
        this.username = username;
        this.country = country;
        this.password = password;
        this.wallets = {
            walletBTC: btcAddress,
            walletETH: ethAddress,
            walletUSDT: usdtAddress,
        };
        this.userRefCode = userRefCode;
        this.inviteRefCode = inviteRefCode;
    }

    fieldsValid(res) {
        if (!fullname || !username || !email || !password || !country) {
            return (true)
        }
        else {
            res.status(400);
            throw new Error("Fill in all fields");
        }
    }
}

module.exports = Users;