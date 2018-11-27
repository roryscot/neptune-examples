export default {
    auth: {
        token: localStorage.getItem("token"),
        isAuthenticated: false,
        isLoggedIn: false,
        isLoading: true,
        user: null,
        errors: {},
    },
    ajaxCallsInProgress: 0,
  };