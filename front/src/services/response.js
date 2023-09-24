import http from "../axios/axios";

export const getSimpleResponse = () => http.get(process.env.REACT_APP_API_RESPONSES)