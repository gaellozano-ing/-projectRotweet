import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#1DA1F2',
  background: '#FFFFFF',
  text: '#000000',
  gray: '#AAB8C2',
  lightGray: '#E1E8ED',
  darkGray: '#657786',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const fontSizes = {
  small: 14,
  medium: 16,
  large: 20,
  title: 24,
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  titleText: {
    fontSize: fontSizes.title,
    fontWeight: '600',
    color: colors.text,
  },
  paragraph: {
    fontSize: fontSizes.medium,
    color: colors.darkGray,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedButton: {
    borderRadius: 30,
    paddingVertical: spacing.sm,
  },
});

export default globalStyles;
