class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem("authenticatedUser", username);
        console.log("Login Success");
    }
}

export default new AuthenticationService();