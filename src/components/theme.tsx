import { createTheme } from "@mui/material/styles"

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  }
})

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: '#CE93D8',
    },
    secondary: {
      main: '#03A9F4',
    },
    text: {
      primary: '#EEEEEE',
    },
    background: {
      default: '#2D2736',
    },
  }
})
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#fafafa"
    },
    secondary: {
      main: "#26a27b"
    }
  }
})

export { darkTheme, lightTheme }
