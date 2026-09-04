import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthHook = create((set) => ({
	authUser: null,
	isSigningUp: false,
	isSigningIn: false,
	isUpdatingProfile: false,
	isCheckingAuth: true,
	checkAuth: async () => {
		try {
			const res = await axiosInstance.get("/auth/check"); // returns a response that allows us to update the state of 'userAuth'.
			set({ authUser: res.data });
		} catch (error) {
			set({ authUser: null });
			console.log("Error in checkAuth:", error);
		} finally {
			set({ isCheckingAuth: false });
		}
	},

	signup: async (data) => {
		set({ isSigningUp: true });
		try {
			const res = await axiosInstance.post("/auth/signup", data);
			set({ authUser: res.data });
			toast.success("Account created successfully");
		} catch (error) {
			toast.error(error.response.data.message);
		} finally {
			set({ isSigningUp: false });
		}
	},
}));
