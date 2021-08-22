import { fp } from '@src/utils/font.utils';

const textVariants = {
  body: {
    fontSize: fp(1.8),
    fontFamily: 'Montserrat-Regular',
    color: 'text',
  },
  button: {
    fontSize: fp(2),
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
  title: {
    fontSize: fp(2),
    fontFamily: 'Montserrat-Medium',
  },
  subtitle: {
    fontSize: fp(1.6),
    color: 'darkGrey',
    fontFamily: 'Montserrat-Regular',
  },
  sectiontitle: {
    fontSize: fp(2.5),
    fontFamily: 'Montserrat-Medium',
    color: 'text',
  },
  nodata: {
    fontSize: fp(2.4),
    fontFamily: 'Montserrat-Thin',
  },
  spectitle: {
    fontSize: fp(2),
    fontFamily: 'Montserrat-Medium',
    color: 'secondary',
  },
  specfield: {
    fontSize: fp(1.6),
    fontFamily: 'Montserrat-Regular',
    color: 'darkGrey',
  },
};

export default textVariants;
