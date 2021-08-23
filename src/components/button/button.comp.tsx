import { makeStyles } from '@src/theme';
import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Text from '../typography/text.typo';

export interface ButtonProps extends PressableProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.s + 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  disabled,
  onPress,
  ...rest
}) => {
  const styles = useStyle();

  const handlePress = (e: GestureResponderEvent) => {
    if (disabled) {
      return;
    }
    if (onPress) {
      onPress(e);
    }
  };

  const opacity = disabled ? 0.8 : 1;

  return (
    <Pressable
      style={[styles.root, style, { opacity }]}
      onPress={handlePress}
      {...rest}>
      <Text variant='button'>{title}</Text>
    </Pressable>
  );
};

export default Button;
