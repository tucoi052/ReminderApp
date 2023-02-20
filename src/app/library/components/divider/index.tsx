import React, { useMemo } from 'react';
import { View, ViewStyle } from 'react-native';

import { useTheme } from '@theme';

import { DividerProps } from './type';

export const Divider = ({
  width = '100%',
  height = 1,
  colorTheme,
  color = '#bbb',
}: DividerProps) => {
  // state
  const theme = useTheme();

  // style
  const divider = useMemo<ViewStyle>(
    () => ({
      backgroundColor: colorTheme ? theme.colors[colorTheme] : color,
      height,
      width,
    }),
    [color, colorTheme, height, width, theme.colors],
  );

  // render
  return <View style={[divider]} />;
};
