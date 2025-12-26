import api from "./api";

export const createEnquiry = async (data) => {
    const response = await api.post("/enquiries/create", data);
    return response.data;
};
