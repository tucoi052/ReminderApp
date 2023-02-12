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
        text: {
          color: theme.colors.text,
        },
        centerList: {
          alignSelf: 'center',
        },
        mt20: {
          marginTop: sizeScale(20),
        },
        addIcon: {
          position: 'absolute',
          bottom: 10,
          right: 10,
        },
      }),
    [theme.colors.text],
  );
};
