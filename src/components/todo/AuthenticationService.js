class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticatedUser", username);
        console.log("Login Success");
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser");
        console.log("Logged out");
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");
        if(user === null) {
            return false;
        } else {
            return true;
        }
    }
}

export default new AuthenticationService();