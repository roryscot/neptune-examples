const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

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
    todos: {
        visibilityFilter: VisibilityFilters.SHOW_ALL,
        todos: []
    },
    products: []
  };