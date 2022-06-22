class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticatedUser", username);
        console.log("Login Success");
    }

    logout() {
        sessionStorage.removeItem("authenticatedUser");
        console.log("Logged out");
    }
}

export default new AuthenticationService();