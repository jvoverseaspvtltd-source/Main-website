import api from "./api";

export const getPageData = async (slug) => {
    const response = await api.get(`/pages/${slug}`);
    return response.data;
};
