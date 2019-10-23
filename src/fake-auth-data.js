const fakeAuth = {
    isAuthenticated: false,

    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 500); // fake async
    },

    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

export const isEng = true;

export default fakeAuth;