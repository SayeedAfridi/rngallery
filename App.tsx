import { CameraButton } from '@src/components';
import Gallery from '@src/components/gallery/gallery.comp';
import { Container } from '@src/containers';
import { useMount } from '@src/hooks';
import { storageService } from '@src/services';
import React from 'react';
import { Asset } from 'react-native-image-picker';

const App = () => {
  const [photos, setPhotos] = React.useState<string[][]>([]);
  const [currentPhotoNumber, setCurrentPhotoNumber] = React.useState<number>(1);

  useMount(async () => {
    const data = await storageService.getPhotos();
    if (data) {
      setPhotos(data.photos);
      setCurrentPhotoNumber(data.currentPhotoNumber);
    }
  });

  const addPhoto = async (file: Asset) => {
    if (currentPhotoNumber % 2 !== 0) {
      setPhotos(prev => [...prev, [file.uri!]]);
    } else {
      const index =
        currentPhotoNumber > 2 ? Math.floor(currentPhotoNumber / 2) - 1 : 0;
      const arr = photos;
      arr[index][1] = file.uri!;
    }
    setCurrentPhotoNumber(currentPhotoNumber + 1);
    await storageService.savePhoto(photos, currentPhotoNumber);
  };

  return (
    <Container>
      <CameraButton onSelect={addPhoto} />
      <Gallery {...{ photos }} />
    </Container>
  );
};

export default App;
