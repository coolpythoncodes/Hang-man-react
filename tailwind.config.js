module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		backgroundColor: (theme) => ({
			...theme("colors"),
			primary: "#007bff",
			next: "#28a745",
			reset: "#17a2b8",
		}),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
