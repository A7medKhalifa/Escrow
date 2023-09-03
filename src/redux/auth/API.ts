import { api } from "redux/_axios";

const login = (body: FormData) => api.post('login', body)
const forgetPassword = (body: FormData) => api.post('forget-password', body)
const individualRegister = (body: FormData) => api.post('individual-register', body)
const companyRegister = (body: FormData) => api.post('company-register', body)
const verifyCode = (body: FormData) => api.post('verify-code', body)
const changePassword = (body: FormData) => api.post('change-password', body)


const AuthAPI = {
    login,
    forgetPassword,
    individualRegister,
    companyRegister,
    verifyCode,
    changePassword
};

export default AuthAPI;
