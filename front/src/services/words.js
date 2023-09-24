import http from "../axios/axios";

export const getSimpleWords = () => http.get(process.env.REACT_APP_API_WORDS)