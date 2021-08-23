import { useThemeContext } from '@src/hooks';
import React from 'react';
import { Switch } from 'react-native';

const DarkModeSwitch = () => {
  const { theme, currentThemeMode, toggleDarkMode } = useThemeContext();
  const isEnabled = currentThemeMode === 'dark' ? true : false;
  return (
    <Switch
      trackColor={{ false: '#fff', true: '#fff' }}
      thumbColor={theme.colors.secondary}
      value={isEnabled}
      onValueChange={toggleDarkMode}
    />
  );
};

export default DarkModeSwitch;
