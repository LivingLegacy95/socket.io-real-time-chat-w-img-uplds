import React from "react";
import { useChatHook } from "../hooks/useChatHook";

function Sidebar() {
	const { getUsers, users, selectedUser, setSelecteduser, isUsersLoading } =
		useChatHook();
	return <div></div>;
}

export default Sidebar;
