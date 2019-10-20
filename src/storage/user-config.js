import zStorage from './storage';

function createUserConfig() {
    let _userId = undefined;

    return {
        getUserId,
        setUserId,
    };

    function setUserId(userId) {
        console.log('setId', userId);
        _userId = userId;
        zStorage.initUserId();
    }

    function getUserId() {
        return _userId;
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
        }
    };
})();

const userConfig = Singleton.getInstance();
export default userConfig;