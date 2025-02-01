// tailwind.config.js
module.exports = {
  darkMode: "class", // Enables dark mode toggling with a 'dark' class
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Modern blue with good contrast
          light: "#3B82F6", // Softer blue for hover states
          dark: "#1E40AF", // Deep blue for dark mode
        },
        secondary: {
          DEFAULT: "#9333EA", // Vibrant purple for highlights
          light: "#A855F7", // Lighter purple
          dark: "#7E22CE", // Darker purple for dark mode
        },
        accent: {
          DEFAULT: "#14B8A6", // Teal for modern accents
          light: "#2DD4BF", // Lighter teal
          dark: "#0F766E", // Dark teal for dark mode
        },
        warning: {
          DEFAULT: "#F59E0B", // Golden yellow for warnings
          light: "#FBBF24",
          dark: "#D97706",
        },
        error: {
          DEFAULT: "#DC2626", // Deep red for errors
          light: "#EF4444",
          dark: "#B91C1C",
        },
        success: {
          DEFAULT: "#22C55E", // Brighter green for success notifications
          light: "#4ADE80",
          dark: "#16A34A",
        },
        background: {
          light: "#F8FAFC", // Soft gray background (less strain on eyes)
          dark: "#1E293B", // **Dark navy-gray** instead of pitch black
        },
        card: {
          light: "#FFFFFF", // Classic white for light mode
          dark: "#2D3748", // **Soft dark gray instead of pitch black**
        },
        border: {
          light: "#E2E8F0", // Subtle light gray
          dark: "#4A5568", // **Medium gray instead of stark black**
        },
        text: {
          light: "#1E293B", // Dark navy for **better contrast**
          dark: "#E2E8F0", // **Softer white** for better readability
        },
      },
    },
  },
  plugins: [],
};
