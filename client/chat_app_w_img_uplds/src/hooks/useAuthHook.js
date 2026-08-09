import { create } from "zustand";

export const useAuthHook = create((set) => ({
	authUser: null,
	isSigningUp: false,
	isSigningIn: false,
	isUpdatingProfile: false,
	isCheckingAuth: true,
	checkAuth: async () => {
		try {
		} catch (error) {}
	},
}));
