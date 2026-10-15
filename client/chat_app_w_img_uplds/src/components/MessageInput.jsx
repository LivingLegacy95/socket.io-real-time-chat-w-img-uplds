import React from "react";
import { useState } from "react";

const MessageInput = () => {
	const [text, settext] = useState("");
	const [imagePreview, setImagePreview] = useState(null);
	const fileInputref = useRef(null);

	return <div>MessageInput</div>;
};

export default MessageInput;
