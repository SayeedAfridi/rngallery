import theme, { makeStyles } from '@src/theme';
import { screenHeight, screenWidth, wp } from '@src/utils';
import React from 'react';
import {
  Image,
  Modal,
  ModalProps,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';

export interface GalleryModalProps extends ModalProps {
  uri: string;
}

const useStyle = makeStyles(() => ({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    zIndex: -1,
  },
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: { height: wp(100), width: wp(100), resizeMode: 'contain' },
  cancelImage: {
    height: 56,
    width: 56,
    resizeMode: 'cover',
  },
  cancelButton: {
    position: 'absolute',
    bottom: theme.spacing.m,
  },
}));

const GalleryModal: React.FC<GalleryModalProps> = ({
  uri,
  onRequestClose = () => true,
  ...rest
}) => {
  const styles = useStyle();
  return (
    <Modal transparent animationType='fade' {...rest}>
      <View style={styles.root}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.backdrop}
          onPress={onRequestClose}
        />
        <Image source={{ uri }} style={styles.photo} />
        <Pressable onPress={onRequestClose} style={styles.cancelButton}>
          <Image
            style={styles.cancelImage}
            source={require('@src/assets/icons/cancel.png')}
          />
        </Pressable>
      </View>
    </Modal>
  );
};

export default GalleryModal;
