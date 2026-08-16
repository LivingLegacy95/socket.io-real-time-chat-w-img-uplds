import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./views/HomePage.jsx";
import SignUpPage from "./views/SignUpPage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import SettingsPage from "./views/SettingsPage.jsx";
import ProfilePage from "./views/ProfilePage.jsx";
import { useAuthHook } from "./hooks/useAuthHook.js";
import { Loader } from "lucide-react";

const App = () => {
	const { authUser, checkAuth } = useAuthHook();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);
	console.log({ authUser });
	if (isCheckingAuth && !authUser)
		return (
			<div className="flex items-center justify-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/settings" element={<SettingsPage />} />
				<Route path="/profile" element={<ProfilePage />} />
			</Routes>
		</div>
	);
};

export default App;
