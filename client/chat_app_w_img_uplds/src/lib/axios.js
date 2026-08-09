import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:5001/api",
	// sends cookies with every single http request (remember the jwt tokens needed)
	withCredentials: true,
});
