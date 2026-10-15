import React, { useEffect } from "react";
import { useChatHook } from "../hooks/useChatHook.js";
import ChatHeader from "./ChatHeader.jsx";
import MessageInput from "./MessageInput.jsx";
import MessageSkeleton from "./skeletons/MessageSkeleton.jsx";

function ChatContainer() {
	const { messages, getMessages, isMessagesLoading, selectedUser } =
		useChatHook();
	useEffect(() => {
		getMessages(selectedUser._id);
	}, [selectedUser._id, getMessages]);

	if (isMessagesLoading)
		return (
			<div className="flex-1 flex flex-cols overflow-auto">
				<ChatHeader />
				<MessageSkeleton />
				<MessageInput />
			</div>
		);

	return (
		<div className="flex-1 flex flex-col overflow-auto">
			<ChatHeader />
			{/* TODO: FINISH EXPLICIT CONTAINER FOR MESSAGES */}
			<p>Messages...</p>
			<MessageInput />
		</div>
	);
}

export default ChatContainer;
