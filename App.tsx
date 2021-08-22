import { Container } from '@src/containers';
import useDarkModeToggler from '@src/hooks/useDarkModeToggler';
import React from 'react';
import { Pressable, Text } from 'react-native';

const App = () => {
  const toggleTheme = useDarkModeToggler();

  return (
    <Container>
      <Text>Hello World</Text>
      <Pressable onPress={() => toggleTheme()}>
        <Text>Toggle</Text>
      </Pressable>
    </Container>
  );
};

export default App;
