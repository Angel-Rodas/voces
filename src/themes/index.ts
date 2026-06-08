export const theme = {
  colors: {
    ink: "#0E0D0B", // fondo principal
    bone: "#F2EAD8", // texto principal
    dust: "#A89684", // texto secundario / bordes
    rust: "#C84B31", // acento (botones, links, marcas)
    surface: "#1A1816", // tarjetas, inputs
    danger: "#D14343", // errores de validación
  },
  spacing: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 },
  radius: { sm: 4, md: 8, lg: 12 },
  typography: {
    sizes: { xs: 13, sm: 15, md: 17, lg: 22, xl: 28, xxl: 40 },
    weights: {
      regular: "400" as const,
      medium: "500" as const,
      semibold: "600" as const,
    },
  },
};
export type Theme = typeof theme;
