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
          fontSize: sizeScale(22),
          fontWeight: '700',
          textAlign: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
        txtDone: {
          color: theme.colors.text,
          opacity: 0.4,
          fontSize: sizeScale(19),
          fontWeight: '700',
        },
        txtDoneEnable: {
          color: theme.colors.colorPrimary,
          fontSize: sizeScale(19),
          fontWeight: '700',
        },
      }),
    [theme.colors.text],
  );
};
