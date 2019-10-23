import zStorage from './storage';

function createUserConfig() {
    let _userId = undefined;
    let _adminId = undefined;
    let _role = undefined;

    return {
        getUserId,
        setUserId,
        setAdminId,
        getAdminId,
        setRole,
        getRole,
    };

    function setUserId(userId) {
        console.log('setId', userId);
        _userId = userId;
        zStorage.initUserId();
    }

    function getUserId() {
        return _userId;
    }

    function setAdminId(adminId) {
        console.log('setAdminId', adminId);
        _adminId = adminId;
    }

    function getAdminId() {
        return _adminId;
    }

    function setRole(role) {
        console.log('setRole', role);
        _role = role;
    }

    function getRole() {
        return _role;
    }
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        return createUserConfig();
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const userConfig = Singleton.getInstance();
export default userConfig;