import { global } from "@/constants/tokens";

export const theme = {
  dark: {
    background: global.colors.black[800],
    surface: global.colors.black[700],
    primary: global.colors.black[900],
    secondary: global.colors.black[900],
    text: global.colors.black[900],
    border: global.colors.gray[300],
    error: global.colors.red[700],
  },

  light: {
    background: global.colors.white[200],
    surface: global.colors.black[900],
    primary: global.colors.black[900],
    secondary: global.colors.black[900],
    text: global.colors.black[900],
    border: global.colors.gray[300],
    error: global.colors.red[400],
  },

  // Elementos globais compartilhados por ambos os temas
  spacing: {
    xs: global.space[1],
    sm: global.space[2],
    md: global.space[3],
    lg: global.space[4],
    xl: global.space[5],
    xl2: global.space[6],
    xl3: global.space[7],
  },

  radius: {
    xs: global.radius[1],
    sm: global.radius[2],
    md: global.radius[3],
    lg: global.radius[4],
    xl: global.radius[5],
    xl2: global.radius[6],
    xl3: global.radius[7],
  },

  font: {
    size: {
      xs: global.scale[1],
      sm: global.radius[2],
      md: global.radius[3],
      lg: global.radius[4],
      xl: global.radius[5],
      xl2: global.radius[6],
      xl3: global.radius[7],
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
};
