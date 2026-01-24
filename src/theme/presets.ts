export type ThemePreset = {
  name: string;
  description: string;
  vars: Record<string, string>;
};

export const yellowBlack: ThemePreset = {
  name: "Yellow Black",
  description: "Bright yellow accents on crisp black/white foundations",
  vars: {
    "--color-bg": "242 243 246",
    "--color-bg-alt": "226 228 232",
    "--color-surface": "255 255 255",
    "--color-text-primary": "15 15 15",
    "--color-text-secondary": "55 55 55",
    "--color-accent": "255 222 0",
    "--color-accent-soft": "255 215 70",
  },
};

export const themes: ThemePreset[] = [yellowBlack];
