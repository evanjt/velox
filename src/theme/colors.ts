export const colors = {
  primary: '#FC4C02',
  primaryDark: '#CC3D02',
  primaryLight: '#FF6B2C',

  surface: '#FFFFFF',
  background: '#F5F5F5',

  textPrimary: '#1A1A1A',
  textSecondary: '#666666',
  textDisabled: '#9E9E9E',

  success: '#4CAF50',
  error: '#E53935',
  warning: '#FF9800',

  border: '#E0E0E0',
  divider: '#EEEEEE',

  // Activity type colors
  ride: '#FF5722',
  run: '#4CAF50',
  swim: '#2196F3',
  walk: '#9C27B0',
  hike: '#795548',
  workout: '#607D8B',
} as const;

export type ColorKey = keyof typeof colors;
