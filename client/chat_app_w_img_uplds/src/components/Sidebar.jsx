import React, { useEffect } from "react";
import { useChatHook } from "../hooks/useChatHook";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

function Sidebar() {
	const { getUsers, users, selectedUser, setSelecteduser, isUsersLoading } =
		useChatHook();
	const onlineUsers = [];

	useEffect(() => {
		getUsers();
	}, [getUsers]);

	if (isUsersLoading) return <SidebarSkeletonkeleton />;
	return (
		<aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
			<div className="border-b border-base-300 w-full p-5">
				<div className="flex items-center gap-2">
					<Users className="size-6" />
					<span className="font-medium hidden lg:block">Contacts</span>
				</div>
				{/* TODO: Online filter toggle */}
			</div>
			<div className="overflow-y-auto w-full py-3"></div>
		</aside>
	);
}

export default Sidebar;
