import { makeStyles } from '@src/theme';
import { screenWidth } from '@src/utils';
import React from 'react';
import { FlatList, View } from 'react-native';
import Button from '../button/button.comp';
import Text from '../typography/text.typo';
import GalleryItem from './gallery-item.comp';
import GalleryModal from './gallery-modal.comp';

export interface GalleryProps {
  photos: string[][];
}

const useStyle = makeStyles(theme => ({
  root: {
    flex: 1,
    margin: theme.spacing.s,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
  const styles = useStyle();
  const [activePhoto, setActivePhoto] = React.useState<string>('');
  if (!photos.length) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text variant='body'>Tap the camera to take photos</Text>
      </View>
    );
  }
  return (
    <View style={styles.root}>
      <FlatList
        showsVerticalScrollIndicator={false}
        decelerationRate='fast'
        snapToInterval={screenWidth}
        horizontal
        data={photos}
        keyExtractor={item => item[0]}
        renderItem={({ item }) => {
          return (
            <GalleryItem
              onPress={uri => {
                setActivePhoto(uri);
              }}
              uris={item}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{ margin: 4 }} />}
      />
      <View style={styles.buttonGroup}>
        <Button disabled style={{ flexGrow: 1 }} title='Prev' />
        <View style={{ margin: 4 }} />
        <Button title='Next' style={{ flexGrow: 1 }} />
      </View>
      <GalleryModal
        onRequestClose={() => setActivePhoto('')}
        visible={activePhoto ? true : false}
        uri={activePhoto}
      />
    </View>
  );
};

export default Gallery;
