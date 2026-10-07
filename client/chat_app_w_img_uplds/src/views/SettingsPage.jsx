import { useThemeHook } from "../hooks/useThemeHook";

const PREVIEW_MESSAGES = [
	{ id: 1, content: "Hey! How's it going?", isSent: false },
	{
		id: 2,
		content: "I'm doing great! Just working on some new features",
		isSent: true,
	},
];

const SettingsPage = () => {
	const { theme, setTheme } = useThemeHook();
	return <div>SettingsPage</div>;
};

export default SettingsPage;
