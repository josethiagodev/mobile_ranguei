import { global, radius, size, spaces, weight } from "@/constants/tokens";

export const theme = {
  dark: {
    background: global.colors.black[800], // Cor de fundo principal das telas
    surface: {
      default: global.colors.black[800],
      primary: global.colors.black[700],
      secondary: global.colors.black[600],
      terciary: global.colors.black[500],
    }, // Fundo para elementos
    card: global.colors.black[700], // Fundo p/ cartões e Modais
    button: {
      gradient: {
        default: global.colors.black[100],
        primary: global.colors.black[100],
        secondary: global.colors.black[100],
        terciary: global.colors.black[100],
        outline: global.colors.black[100],
        inverse: global.colors.white[100],
      },
      default: global.colors.black[100],
      primary: global.colors.black[200],
      secondary: global.colors.black[300],
      terciary: global.colors.black[400],
    },
    text: {
      default: global.colors.black[100],
      primary: global.colors.black[200],
      secondary: global.colors.black[300],
      terciary: global.colors.black[400],
      inverse: global.colors.white[100],
    },
    subtext: {
      default: global.colors.black[200],
      primary: global.colors.black[300],
      secondary: global.colors.black[400],
      terciary: global.colors.black[500],
    },
    border: {
      default: global.colors.black[200],
      primary: global.colors.black[300],
      secondary: global.colors.black[400],
      terciary: global.colors.black[500],
    },
    feedback: {
      error: global.colors.red[200],
      success: global.colors.green[200],
      warning: global.colors.orange[200],
      info: global.colors.blue[200],
    },
  },

  light: {
    background: global.colors.white[100], // Cor de fundo principal das telas
    surface: {
      default: global.colors.white[200],
      primary: global.colors.white[300],
      secondary: global.colors.white[400],
      terciary: global.colors.white[500],
    }, // Fundo para elementos
    card: global.colors.white[300], // Fundo p/ cartões e Modais
    button: {
      default: global.colors.white[300],
      primary: global.colors.white[400],
      secondary: global.colors.white[500],
      terciary: global.colors.white[600],
      inverse: global.colors.black[900],
    },
    text: {
      main: global.colors.white[100],
      default: global.colors.white[200],
      primary: global.colors.white[300],
      secondary: global.colors.white[400],
      terciary: global.colors.white[500],
      inverse: global.colors.black[900],
    },
    border: {
      default: global.colors.white[200],
      primary: global.colors.white[300],
      secondary: global.colors.white[400],
      terciary: global.colors.white[500],
    },
    feedback: {
      error: global.colors.red[200],
      success: global.colors.green[200],
      warning: global.colors.orange[200],
      info: global.colors.blue[200],
    },
  },

  // Elementos globais compartilhados por ambos os temas
  spacing: {
    xs: spaces.xs,
    sm: spaces.sm,
    md: spaces.md,
    lg: spaces.lg,
    xl: spaces.xl,
    xxl: spaces.xxl,
  },

  rounded: {
    xs: radius.xs,
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
    xl: radius.xl,
    xxl: radius.xxl,
    full: radius.full,
  },

  size: {
    xs: size.xs,
    sm: size.sm,
    md: size.md,
    lg: size.lg,
    xl: size.xl,
    xxl: size.xxl,
  },

  font: {
    size: {
      xs: size.xs,
      sm: size.sm,
      md: size.md,
      lg: size.lg,
      xl: size.xl,
      xxl: size.xxl,
    },
    weight: {
      light: weight.xs,
      regular: weight.sm,
      medium: weight.md,
      semibold: weight.lg,
      bold: weight.xl,
      extrabold: weight.xxl,
    },
  },
};

export const gradient = {
  brand: {
    left: [global.colors.brand.rose, global.colors.brand.coral] as const,
    right: [global.colors.brand.coral, global.colors.brand.rose] as const,
  },
  // imageOverlay: ["rgba(0,0,0,0.72)", "rgba(0,0,0,0.12)"] as const,
};
