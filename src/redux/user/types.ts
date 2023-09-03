interface authState {
    Accepted?: boolean;
    Rejected?: boolean;
    created?: boolean;
    uploaded?: boolean;
    invited?: boolean;
    HomeData?: {
        user: {
            id: number,
            token: any,
            code: any,
            name: any,
            email: any,
            phone_number: any,
            mobile_number: any,
            country: any,
            city: any,
            nationality: any,
            address: any,
            wallet: number,
            currency: any,
            type: number,
            type_name: any,
            status: boolean,
            device_token: any,
            registered_at: ""
        },
        as_buyer: [
            {
                id: number,
                code: any,
                name: any,
                description: any,
                currency: any,
                value: number,
                start_date: any,
                status: number,
                status_name: any,
                funds: any,
                document: any,
                created_at: any,
                buyer_id: number,
                buyer_name: any,
                supplier_id: any,
                supplier_name: any,
            },
        ],
        as_supplier: [
            {
                id: number,
                code: any,
                name: any,
                description: any,
                currency: any,
                value: number,
                start_date: any,
                status: number,
                status_name: any,
                funds: any,
                document: any,
                created_at: any,
                buyer_id: number,
                buyer_name: any,
                supplier_id: any,
                supplier_name: any,
            },
        ]
    }
    users?: [
        {
            id: number,
            code: any,
            name: any,
            email: any,
            type: number,
            status: Number
        }
    ]
    ReceivedInvitations?: [
        {
            id: number,
            sender_id: number,
            sender_name: any,
            escrow_id: number,
            escrow_code: any,
            escrow_name: any,
            escrow_description: any,
            escrow_value: any,
            escrow_start_date: any
        },
    ]
    InvitationEscrow?: {
        id: number,
        sender_id: number,
        sender_name: any,
        escrow_id: number,
        escrow_code: any,
        escrow_name: any,
        escrow_description: any,
        escrow_value: any,
        escrow_start_date: any,
        milestones: [
            {
                id: number,
                name: any,
                description: any,
                currency: any,
                value: number,
                start_date: any,
                completion_date: any,
                status: number,
                status_name: any,
                document: any,
            },
        ],
    }
    MyEscrows: {
        as_buyer: [
            {
                id: number,
                code: any,
                name: any,
                description: any,
                currency: any,
                value: number,
                start_date: any,
                status: number,
                status_name: any,
                funds: any,
                document: any,
                created_at: any,
                buyer_id: number,
                buyer_name: any,
                supplier_id: number,
                supplier_name: any
            },
        ],
        as_supplier: [
            {
                id: number,
                code: any,
                name: any,
                description: any,
                currency: any,
                value: number,
                start_date: any,
                status: number,
                status_name: any,
                funds: any,
                document: any,
                created_at: any,
                buyer_id: number,
                buyer_name: any,
                supplier_id: number,
                supplier_name: any
            }
        ]
    }
    EscrowDetails: {
        id: number,
        owner_as_buyer: boolean,
        owner_as_supplier: boolean,
        buyer_id: number,
        buyer_name: any,
        supplier_id: number,
        supplier_name: any,
        code: any,
        name: any,
        description: any,
        currency: any,
        value: number,
        start_date: any,
        status: number,
        status_name: any,
        funds: any,
        document: any,
        created_at: any,
        milestones: [
            {
                id: number,
                name: any,
                description: any,
                currency: any,
                value: number,
                start_date: any,
                completion_date: any,
                status: number,
                status_name: any,
                document: any
            },
        ]
    }
    milestone: {
        type: any,
        milestone: {
            id: number,
            name: any,
            description: any,
            currency: any,
            value: number,
            start_date: any,
            completion_date: any,
            status: number,
            status_name: any,
            document: any
        }
    },
}

export const initialState: authState = {
    Accepted: false,
    Rejected: false,
    created: false,
    uploaded: false,
    invited: false,
    HomeData: {},
    users: [],
    ReceivedInvitations: [],
    InvitationEscrow: {},
    MyEscrows: [],
    EscrowDetails: {},
    milestone: {}
}