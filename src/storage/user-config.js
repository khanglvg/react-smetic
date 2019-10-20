function createUserConfig() {
    let _userId = undefined;

    return {
        getUserId,
        setUserId,
    };

    function setUserId(userId) {
        _userId = userId;
    }

    function getUserId() {
        return _userId;
    }
}

const userConfig = createUserConfig();
export default userConfig;