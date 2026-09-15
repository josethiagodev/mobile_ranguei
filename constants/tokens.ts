export const global = {
  colors: {
    brand: {
      coral: "#FF6666" /* oklch(0.704 0.187 23.2) - Coral suave */,
      rose: "#FB607F" /* oklch(0.696 0.19 11.4) - Rosa vivo */,
      carmim_500: "oklch(0.581 0.207 20.3)" /* #DA2C43 - Base Primary */,
      carmim_600: "oklch(0.571 0.222 20.1)" /* #DC143C - Hover Vibrante */,
      carmim_700: "oklch(0.533 0.198 19.6)" /* #C51E3A - Active / Pressed */,
    },

    black: {
      100: "#e6e6e6" /* Útil para backgrounds de superfícies claras */,
      200: "#cccccc" /* Ideal para borders e divisores */,
      300: "#999999" /* Indicado para ícones inativos ou placeholders */,
      400: "#666666" /* Excelente para textos de apoio (muted text) */,
      500: "#343434" /* Cor Preto Principal (Base) */,
      600: "#2b2b2b" /* Útil para estados de :hover ou :active */,
      700: "#222222" /* Elevações (cards/modais) em Dark Mode */,
      800: "#171717" /* Background base de aplicações em Dark Mode */,
      900: "#0d0d0d" /* Contraste máximo, passos antes do preto absoluto */,
    },
    white: {
      100: "#FFFFFF", // Cor Base - oklch(1 0 0)
      200: "#F5F5F5",
      300: "#E5E5E5",
      400: "#D4D4D4",
      500: "#A3A3A3",
      600: "#737373",
      700: "#525252",
      800: "#262626",
      900: "#0A0A0A",
    },
    green: {
      100: "#E0FFE9",
      200: "#A3FFC8",
      300: "#3FFFA3", // Cor Base
      400: "#00E676",
      500: "#00C853",
      600: "#009624",
      700: "#00701A",
      800: "#004D12",
      900: "#00290A",
    },
    red: {
      100: "#FFE5E7", // Fundo de alertas de erro sutis
      200: "#FFC2C7", // Bordas de estados de erro
      300: "#FF9FA5", // Ícones desabilitados em temas de erro
      400: "#FF757E", // Hover em botões secundários destrutivos
      500: "#FF3F4B", // Cor Base (Ações destrutivas principais)
      600: "#E62E3B", // Hover em botões primários destrutivos
      700: "#BF222D", // Textos de erro em fundos claros
      800: "#991721", // Elementos ativos/pressionados
      900: "#730E16", // Contraste máximo em Dark Mode
    },
    gray: {
      100: "#F3F4F6",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280", // Cor Base
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
    border: {
      white: {
        100: "#FFFFFF", // Cor Base - oklch(1 0 0)
        200: "#F5F5F5",
        300: "#E5E5E5",
        400: "#D4D4D4",
        500: "#A3A3A3",
        600: "#737373",
        700: "#525252",
        800: "#262626",
        900: "#0A0A0A",
      },
      black: {
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#999999",
        400: "#666666",
        500: "#343434",
        600: "#2b2b2b",
        700: "#222222",
        800: "#171717",
        900: "#0d0d0d",
      },
    },
  },

  /* Standard Size Scale (Based on 4px/8px Grid) */
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "40px",
    7: "48px",
  },
  radius: {
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "32px",
    6: "40px",
    7: "48px",
  },
  scale: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "40px",
    8: "48px",
  },
} as const;

// export type ThemeColors = typeof global.colors;
