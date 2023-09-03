import { createAsyncThunk } from "@reduxjs/toolkit";
import UserAPI from "./API";

const getHome: any = createAsyncThunk<any, any, any>(
    'user/Home',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.home();
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

const createEscrow: any = createAsyncThunk<any, any, any>(
    'user/createEscrow',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.createEscrow(data);
            // alert(JSON.stringify(response.data))
            if (
                response.status == 401 ||
                // response.status == 422 ||
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


const getUsers: any = createAsyncThunk<any, any, any>(
    'user/getUsers',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.getUsers();
            // alert(JSON.stringify(response.data))
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

const myReceivedInvitation: any = createAsyncThunk<any, any, any>(
    'user/myReceivedInvitation',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.myReceivedInvitation(data);
            // alert(JSON.stringify(data))
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

const RseponseInvitation: any = createAsyncThunk<any, any, any>(
    'user/RseponseInvitation',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.RseponseInvitation(data?.id, data?.body);
            // alert(JSON.stringify(data))
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

const myEscrows: any = createAsyncThunk<any, any, any>(
    'user/myEscrows',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.myEscrows(data);
            // alert(JSON.stringify(data))
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


const getMilestone: any = createAsyncThunk<any, any, any>(
    'user/getMilestone',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.getMilestone(data);
            // alert(JSON.stringify(data))
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


const inviteToEscrow: any = createAsyncThunk<any, any, any>(
    'user/inviteToEscrow',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.inviteToEscrow(data.user_id,data.escrow_id);
            alert(JSON.stringify(data))
            if (
                response.status == 401 ||
                // response.status == 422 ||
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
const updateMilestone: any = createAsyncThunk<any, any, any>(
    'user/updateMilestone',
    async (data: any, thunkApi: any) => {
        try {
            const response = await UserAPI.updateMilestone(data?.id, data?.body);
            // alert(JSON.stringify(response.data))
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
    getHome,
    createEscrow,
    getUsers,
    myReceivedInvitation,
    RseponseInvitation,
    myEscrows,
    getMilestone,
    updateMilestone,
    inviteToEscrow
};

export default thunks;

