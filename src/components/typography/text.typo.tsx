import { useTheme } from '@src/hooks';
import { Theme } from '@src/theme';
import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

export interface TextProps extends RNTextProps {
  variant?: keyof Theme['textVariants'];
}

const Text: React.FC<TextProps> = ({ variant, style, children, ...rest }) => {
  const theme = useTheme();
  const variantStyle = variant ? theme.textVariants[variant] : {};
  const color =
    variant && theme.textVariants[variant].color
      ? theme.colors[theme.textVariants[variant].color!]
      : theme.colors.text;
  return (
    <RNText style={[{ ...variantStyle, color }, style]} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;
