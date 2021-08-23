import { makeStyles } from '@src/theme';
import { screenWidth } from '@src/utils';
import React from 'react';
import { Image, Pressable, View } from 'react-native';

export interface GalleryItemProps {
  uris: string[];
  onPress: (uri: string) => void;
}
const useStyle = makeStyles(theme => {
  const width = (screenWidth - theme.spacing.s * 2) / 2 - 4;
  return {
    root: {
      width,
    },
    photo: {
      height: width,
      width: width,
      resizeMode: 'contain',
    },
  };
});

const GalleryItem = ({ uris, onPress = () => true }: GalleryItemProps) => {
  const styles = useStyle();
  return (
    <View style={styles.root}>
      <Pressable onPress={() => onPress(uris[0])}>
        <Image source={{ uri: uris[0] }} style={styles.photo} />
      </Pressable>
      {uris.length > 1 ? (
        <Pressable onPress={() => onPress(uris[1])} style={{ marginTop: 8 }}>
          <Image source={{ uri: uris[0] }} style={styles.photo} />
        </Pressable>
      ) : null}
    </View>
  );
};

export default GalleryItem;
