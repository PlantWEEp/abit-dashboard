/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marquee: ['Gloria Hallelujah', 'cursive'],
      }, 
      fontSize: { 
        h1: "64px",
        h2: "56px",
        h3: "48px",
        h4: "32px",
        h5: "24px",
        h6: "20px",
        p: "14px",
        link: "12px",
      },
      
      // Customizing text colors
      textColor: {
        skin: {
          button: "var(--button-bg)",
          textwhite: "var(--white-bg)",
          grey: "var(--grey)",
        },
      },
      // Customizing background colors
      backgroundColor: {
        skin: {
          grey: "var(--grey)",
          blue: "var(--button-bg)",
          whitebg:"var(--white-bg)",
        },
      },
    }, 
    // Defining custom screen breakpoints
    screens: {
      "2xl": { max: "1400px" },  
      xl: { max: "1279px" },      
      lg: { max: "999px" },       
      md: { max: "767px" },       
      sm: { max: "639px" },       
      ssm: { max: "499px" },      
    },
  },
  plugins: [],
};
