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
        titleNote: {
          color: theme.colors.text,
          fontSize: sizeScale(18),
          fontWeight: '700',
          marginLeft: sizeScale(5),
          marginVertical: sizeScale(10),
        },
        containerFl: {
          backgroundColor: '#fff',
          borderRadius: 10,
        },
      }),
    [theme.colors.text],
  );
};
