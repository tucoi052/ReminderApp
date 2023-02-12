import { StyleSheet } from 'react-native';

import { useMemo } from 'react';

import { useTheme } from '@theme';

export const useStyle = () => {
  // state
  const theme = useTheme();

  // result
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingVertical: 5,
          borderBottomWidth: StyleSheet.hairlineWidth * 2,
          borderColor: 'gray',
          justifyContent: 'center',
        },
        input: {
          color: theme.colors.text,
          padding: 0,
          marginTop: 10,
          borderBottomColor: 'transparent',
        },
        text: {
          position: 'absolute',
          alignSelf: 'flex-start',
          zIndex: 2,
        },
        wrapLabel: {
          position: 'absolute',
          alignSelf: 'flex-end',
        },
        content: {
          flexDirection: 'row',
          alignItems: 'flex-start',
        },
        wrapPlaceHolder: {
          position: 'absolute',
          alignSelf: 'flex-end',
        },
        flex: {
          flex: 1,
        },
      }),
    [theme.colors.text],
  );
};
