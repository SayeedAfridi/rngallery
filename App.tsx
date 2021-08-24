import { CameraButton } from '@src/components';
import Gallery from '@src/components/gallery/gallery.comp';
import { Container } from '@src/containers';
import { useMount, useTheme } from '@src/hooks';
import { storageService } from '@src/services';
import { insertAtFront } from '@src/utils';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Asset } from 'react-native-image-picker';

const App = () => {
  const theme = useTheme();
  const [photos, setPhotos] = React.useState<string[][]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useMount(async () => {
    setLoading(true);
    const data = await storageService.getPhotos();
    if (data) {
      setPhotos(data);
    }
    setLoading(false);
  });

  const addPhoto = (file: Asset) => {
    const arr = insertAtFront([...photos], file.uri!);
    setPhotos(arr);
    storageService.savePhoto(arr);
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
