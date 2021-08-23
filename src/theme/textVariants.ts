import { fp } from '@src/utils/font.utils';
import { TextStyle } from 'react-native';
import { Theme } from '.';

const textVariants: {
  [key: string]: TextStyle & { color?: keyof Theme['colors'] };
} = {
  body: {
    fontSize: fp(1.8),
    fontFamily: 'Poppins-Light',
    color: 'text',
  },
  button: {
    fontSize: fp(2),
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
  title: {
    fontSize: fp(2),
    fontFamily: 'Poppins-Regular',
    color: 'text',
  },
  appbar: {
    fontSize: fp(2),
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
};

export default textVariants;
