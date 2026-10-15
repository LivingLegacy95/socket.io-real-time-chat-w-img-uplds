import React from "react";
import { useState } from "react";
import { useChatHook } from "../hooks/useChatHook.js";
import { X } from "lucide-react";

const MessageInput = () => {
	const [text, settext] = useState("");
	const [imagePreview, setImagePreview] = useState(null);
	const fileInputref = useRef(null);
	const { sendMessage } = useChatHook();

	const handleImageChange = (e) => {};

	const removeImage = () => {};

	const handleSendMessage = async (e) => {};

	return (
		<div className="p-4 w-full">
			{imagePreview && (
				<div className="mb-3 flex items-center gap-2">
					<div className="relative">
						<img
							src={imagePreview}
							alt="Img Preview"
							className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
						/>
						<button
							onClick={removeImage}
							className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300 flex items-center justify-center"
							type="button"
						>
							<X className="size-3" />
						</button>
					</div>
				</div>
			)}
			<form onSubmit={handleSendMessage} className="flex items-center gap-2">
				<div className="flex-1 flex gap-2">
					<input
						type="text"
						className="w-full input input-bordered rounded-lg input-sm sm-input-md"
						placeholder="Type a message..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default MessageInput;
