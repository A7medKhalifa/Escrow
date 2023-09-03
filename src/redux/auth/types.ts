interface authState {
    logged: boolean;
    doneForget: boolean;
    doneReset: boolean;
    doneVerified: boolean;
    user: {
        id: 0,
        token: "",
        code: "",
        name: "",
        email: "",
        phone_number: "",
        mobile_number: "",
        country: "",
        city: "",
        nationality: "",
        address: "",
        wallet: 0,
        currency: "",
        type: 1,
        type_name: "",
        status: false,
        device_token: "",
        registered_at: ""
    };
    doneCompanySignup: boolean;
    doneIndvidualSignup: boolean;
}

export const initialState: authState = {
    logged: false,
    doneForget: false,
    doneReset:false,
    doneVerified: false,
    user: {},
    doneCompanySignup: false,
    doneIndvidualSignup: false
}