import {USER_LOGGED_IN} from "../types";
import api from '../api';

export const userLoggedIn = user => ({
   type: USER_LOGGED_IN,
    user
});

export const login = (creadentials) => dispatch => api.user.login(creadentials).then(user => dispatch(userLoggedIn(user)));