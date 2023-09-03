import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthAPI from "./API";

const doSignIn: any = createAsyncThunk<any, any, any>(
    'auth/login',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.login(data);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doForgetPassword: any = createAsyncThunk<any, any, any>(
    'auth/forgetPassword',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.forgetPassword(data);
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const doIndividualSignUp: any = createAsyncThunk<any, any, any>(
    'auth/individual',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.individualRegister(data);
            console.log(JSON.stringify(data))
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doCompanySignUp: any = createAsyncThunk<any, any, any>(
    'auth/company',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.companyRegister(data);
            // alert(JSON.stringify(response.data));
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const doVerifyCode: any = createAsyncThunk<any, any, any>(
    'auth/doVerifyCode',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.verifyCode(data);
            // alert(JSON.stringify(response.data));
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

const changePassword: any = createAsyncThunk<any, any, any>(
    'auth/changePassword',
    async (data: any, thunkApi: any) => {
        try {
            const response = await AuthAPI.changePassword(data);
            // alert(JSON.stringify(response.data));
            if (
                response.status == 401 ||
                response.status == 422 ||
                response.status == 404 ||
                response.status == 403 ||
                response.status == 500 ||
                response.status == 503
            ) {
                throw response;
            }
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const thunks = {
    doSignIn,
    doForgetPassword,
    doIndividualSignUp,
    doCompanySignUp,
    doVerifyCode,
    changePassword
};

export default thunks;

