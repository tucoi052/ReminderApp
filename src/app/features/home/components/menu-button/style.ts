import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useTheme } from '@theme';
import { sizeScale } from '@common';

export const useStyle = () => {
  // state
  const theme = useTheme();

  // result
  return useMemo(
    () =>
      StyleSheet.create({
        addIcon: {
          position: 'absolute',
          bottom: sizeScale(30),
          right: sizeScale(10),
        },
        addReminder: {
          position: 'absolute',
          bottom: sizeScale(100),
          backgroundColor: theme.colors.card,
          right: sizeScale(25),
          padding: 10,
          width: sizeScale(80),
          borderRadius: 10,
          alignItems: 'center',
        },
        addNote: {
          position: 'absolute',
          bottom: sizeScale(145),
          right: sizeScale(25),
          backgroundColor: theme.colors.card,
          padding: 10,
          width: sizeScale(80),
          borderRadius: 10,
          alignItems: 'center',
        },
      }),
    [theme],
  );
};
