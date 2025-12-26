import api from "./api";

export const getAllCountries = async () => {
    const response = await api.get("/countries");
    return response.data;
};

export const getCountryBySlug = async (slug) => {
    const response = await api.get(`/countries/${slug}`);
    return response.data;
};
