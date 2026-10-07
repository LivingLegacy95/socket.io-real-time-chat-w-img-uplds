import React from "react";
import { useChatHook } from "../hooks/useChatHook";
import NoChatSelected from "../components/NoChatSelected";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
	const { selectedUser } = useChatHook();
	return (
		<div className="h-screen bg-base-200">
			<div className="flex items-center justify-center pt-20 px-4">
				{/* h-[calc(100vh-8rem)] calculates the full height of the screen dynamically subtracted by 8rem */}
				<div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
					<div className="flex h-full rounded-lg overflow-hidden">
						<Sidebar />
						{!selectedUser ? <NoChatSelected /> : <ChatContainer />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
