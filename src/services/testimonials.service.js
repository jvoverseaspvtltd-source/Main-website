import api from "./api";

export const getAllTestimonials = async () => {
    const response = await api.get("/testimonials");
    return response.data;
};
