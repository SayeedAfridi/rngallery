import { imagePickerService } from '@src/services';
import { makeStyles } from '@src/theme';
import { hp } from '@src/utils';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Asset } from 'react-native-image-picker';
import Text from '../typography/text.typo';

export interface CameraButtonProps {
  onSelect: (file: Asset) => void;
}

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.colors.background,
    height: hp(28),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing.l,
  },
  press: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.s,
  },
}));

const CameraButton: React.FC<CameraButtonProps> = ({ onSelect }) => {
  const styles = useStyle();

  const handleCamera = async () => {
    const res = await imagePickerService.openCamera();
    if (res) {
      onSelect(res);
    }
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={handleCamera} style={styles.press}>
        <Image
          source={require('@src/assets/icons/camera.png')}
          style={{ height: 64, width: 64, marginBottom: hp(1) }}
        />
        <Text variant='title'>Open Camera</Text>
      </Pressable>
    </View>
  );
};

export default CameraButton;
