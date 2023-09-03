import { api } from "redux/_axios";

const home = () => api.get('home')
const createEscrow = (body: FormData) => api.post('create-escrow', body)
const getUsers = () => api.get('get-users')
const myReceivedInvitation = (id: number) => api.get(`my-received-invitations${id}`)
const RseponseInvitation = (id: number, body: any) => api.post(`my-received-invitations${id}`, body)
const myEscrows = (id: number) => api.get(`my-escrows${id}`)
const getMilestone = (id: number) => api.get(`/milestone/${id}`)
const updateMilestone = (id: number, body: any) => api.post(`/update-milestone/${id}`, body)
const inviteToEscrow = (id: number, escrow_id: number) => api.post(`/invite-to-escrow`, {
    user_id: id,
    escrow_id: escrow_id
})





const UserAPI = {
    home,
    createEscrow,
    getUsers,
    myReceivedInvitation,
    RseponseInvitation,
    myEscrows,
    getMilestone,
    updateMilestone,
    inviteToEscrow
};

export default UserAPI;
