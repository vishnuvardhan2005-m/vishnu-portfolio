/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#F9FAFB', // Gray 50
        surface: '#FFFFFF',    // White
        primary: '#2563EB',    // Blue 600
        primaryHover: '#1D4ED8', // Blue 700
        secondary: '#F1F5F9',  // Slate 100 (Light gray for secondary elements)
        text: '#0F172A',       // Slate 900 (Primary text)
        textSecondary: '#475569', // Slate 600
        muted: '#64748B',      // Slate 500
        border: '#E5E7EB',     // Gray 200
        accent: '#CBD5E1',     // Slate 300
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      }
    }
  },
  plugins: []
}
