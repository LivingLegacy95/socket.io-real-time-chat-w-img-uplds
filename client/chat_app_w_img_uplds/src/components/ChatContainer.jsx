import React, { useEffect } from "react";
import { useChatHook } from "../hooks/useChatHookseChatHook";

function ChatContainer() {
	const { messages, getMessages, isMessagesLoading, selectedUser } =
		useChatHook();
	useEffect(() => {
		getMessages(selectedUser._id);
	}, [selectedUser._id, getMessages]);
	// TODO: Finish building out chat container component
	if (isMessagesLoading) return <div>Loading...</div>;

	return <div></div>;
}

export default ChatContainer;
