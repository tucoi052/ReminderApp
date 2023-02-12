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
        number: {
          color: theme.colors.text,
          fontSize: sizeScale(23),
          fontWeight: '700',
        },
        title: {
          color: theme.colors.text,
          fontSize: sizeScale(16),
          fontWeight: '500',
        },
        numberCalender: {
          position: 'absolute',
          fontSize: sizeScale(9),
          top: sizeScale(5),
          left: sizeScale(6),
          color: theme.colors.primary,
        },
      }),
    [theme.colors.text],
  );
};
