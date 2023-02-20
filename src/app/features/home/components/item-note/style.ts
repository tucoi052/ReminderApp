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
        title: {
          color: theme.colors.text,
          fontSize: sizeScale(16),
          fontWeight: '500',
          marginLeft: sizeScale(10),
        },
        number: {
          color: theme.colors.text,
          textAlign: 'right',
          fontSize: sizeScale(14),
          flex: 1,
        },
      }),
    [theme.colors.text],
  );
};
