// get Goal [route: GET /user] [private]
const getUsers = (req, res) => {
    res.status(200).json({
        message: "Get Users",
    });
}


// add User [route: POST /user] [private]
const addUser = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('null')
    }


    res.status(200).json({
        message: 'Add User'
    })
}


// update User [route: PUT /user] [private]
const updateUser = (req, res) => {
    res.status(200).json({
        message: `update user ${req.params.id}`,
    });

};
// delete User [route: DELETE /user] [private]
const deleteUser = (req, res) => {
    res.status(200).json({
        message: `delete user ${req.params.id}`,
    });
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser,
};