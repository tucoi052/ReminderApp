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
          fontSize: sizeScale(23),
          fontWeight: '700',
          maxWidth: '80%',
        },
        txtTime: {
          color: theme.colors.text,
          fontSize: sizeScale(23),
          maxWidth: '70%',
          marginHorizontal: sizeScale(20),
          marginTop: sizeScale(10),
        },
        txtRemind: {
          color: theme.colors.text,
          marginHorizontal: sizeScale(20),
          fontWeight: '300',
          lineHeight: sizeScale(22),
          marginVertical: sizeScale(10),
        },
        txtNext: {
          fontSize: sizeScale(15),
          color: theme.colors.txtButton,
          marginHorizontal: sizeScale(20),
          fontWeight: '600',
          marginVertical: sizeScale(12),
        },
        boxTextFieldTitle: {
          marginHorizontal: sizeScale(20),
        },
        boxTextFieldContent: {
          marginHorizontal: sizeScale(20),
          minHeight: sizeScale(100),
          maxHeight: sizeScale(200),
        },
        boxInput: {
          minHeight: sizeScale(100),
        },
      }),
    [theme.colors.text],
  );
};
