import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./views/HomePage.jsx";
import SignUpPage from "./views/SignUpPage.jsx";
import LoginPage from "./views/LoginPage.jsx";
import SettingsPage from "./views/SettingsPage.jsx";
import ProfilePage from "./views/ProfilePage.jsx";
import { useAuthHook } from "./hooks/useAuthHook.js";
import { Loader, User } from "lucide-react";
import { Toaster } from "react-hot-toast";

const App = () => {
	const { authUser, checkAuth, isCheckingAuth } = useAuthHook();

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
				<Route
					path="/"
					element={authUser ? <HomePage /> : <Navigate to="/login" />}
				/>
				<Route
					path="/signup"
					element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
				/>
				<Route
					path="/login"
					element={!authUser ? <LoginPage /> : <Navigate to="/" />}
				/>
				<Route path="/settings" element={<SettingsPage />} />
				<Route
					path="/profile"
					element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
				/>
			</Routes>
			<Toaster />
		</div>
	);
};

export default App;
