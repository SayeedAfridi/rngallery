import { CameraButton } from '@src/components';
import Gallery from '@src/components/gallery/gallery.comp';
import { Container } from '@src/containers';
import { useMount, useTheme } from '@src/hooks';
import { storageService } from '@src/services';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Asset } from 'react-native-image-picker';

const App = () => {
  const theme = useTheme();
  const [photos, setPhotos] = React.useState<string[][]>([]);
  const [currentPhotoNumber, setCurrentPhotoNumber] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);

  useMount(async () => {
    setLoading(true);
    const data = await storageService.getPhotos();
    if (data) {
      setPhotos(data.photos);
      setCurrentPhotoNumber(data.currentPhotoNumber);
    }
    setLoading(false);
  });

  const addPhoto = async (file: Asset) => {
    if (currentPhotoNumber % 2 !== 0) {
      setPhotos(prev => [...prev, [file.uri!]]);
    } else {
      const index =
        currentPhotoNumber > 2 ? Math.floor(currentPhotoNumber / 2) - 1 : 0;
      const arr = [...photos];
      arr[index][1] = file.uri!;
      setPhotos(arr);
    }
    setCurrentPhotoNumber(currentPhotoNumber + 1);
    storageService.savePhoto(photos, currentPhotoNumber);
  };

  if (loading) {
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' color={theme.colors.primary} />
        </View>
      </Container>
    );
  }

  return (
    <Container>
      <CameraButton onSelect={addPhoto} />
      <Gallery {...{ photos }} />
    </Container>
  );
};

export default App;
