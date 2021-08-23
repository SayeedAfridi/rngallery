import { useTheme } from '@src/hooks';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import palette from './palette';
import textVariants from './textVariants';

const theme = {
  colors: {
    background: palette.white,
    primary: palette.yankeeBlue,
    secondary: palette.blue,
    text: palette.black,
    grey: palette.grey,
    white: palette.white,
    transparent: 'transparent',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 48,
    none: 0,
    bottomTab: 55,
  },
  borderRadii: {
    s: 5,
    m: 10,
    l: 20,
    xl: 32,
    none: 0,
  },
  textVariants,
};

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: palette.blue,
    secondary: palette.yankeeBlue,
    background: palette.yankeeBlue,
    text: palette.white,
  },
};

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };

export default theme;
