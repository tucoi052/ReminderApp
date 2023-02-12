import React, { useMemo } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from '@theme';
import { propsToStyle, sizeScale } from '@common';
import { stylesText, stylesView } from './preset';
import { ButtonProps } from './type';

import { Text } from '../text';

export const Button = (props: ButtonProps) => {
  // state
  const {
    text,
    t18n,
    children,
    textColor,
    buttonColor,
    textColorTheme,
    buttonColorTheme,
    style: styleOverride = {},
    textStyle: textStyleOverride = {},
    preset = 'default',
    left,
    flex,
    top,
    right,
    width,
    height,
    border,
    middle,
    bottom,
    zIndex,
    m,
    shadow,
    opacity,
    p,
    maxWidth,
    overflow,
    position,
    minWidth,
    alignSelf,
    maxHeight,
    minHeight,
    mt,
    ml,
    alignItems,
    colorTheme,
    pt,
    mr,
    borderStyle,
    pl,
    borderColor,
    borderWidth,
    borderRadius,
    pr,
    mb,
    pb,
    mh,
    mv,
    borderTopColor,
    justifyContent,
    borderTopWidth,
    pv,
    borderLeftWidth,
    borderLeftColor,
    borderRightColor,
    borderRightWidth,
    borderColorTheme,
    ph,
    borderBottomColor,
    borderBottomWidth,
    borderTopLeftRadius,
    borderTopRightRadius,
    color: backgroundColor,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    direction: flexDirection,
    shadowConfig = {},
    style = {},
    ...rest
  } = props;
  const theme = useTheme();

  // style
  const viewStyle = useMemo<StyleProp<ViewStyle>>(
    () => [
      {
        backgroundColor: buttonColorTheme
          ? theme.colors[buttonColorTheme]
          : buttonColor,
      },
      border === true && {
        borderWidth: 1,
        borderColor: '#bbb',
      },
      colorTheme && { backgroundColor: theme.colors[colorTheme] },
      borderColorTheme && { borderColor: theme.colors[borderColorTheme] },
      middle && { alignItems: 'center' },
      shadow && {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        ...shadowConfig,
      },
      propsToStyle([
        { margin: sizeScale(m!) },
        { marginLeft: sizeScale(ml!) },
        { marginRight: sizeScale(mr!) },
        { marginTop: sizeScale(mt!) },
        { marginBottom: sizeScale(mb!) },
        { marginVertical: sizeScale(mv!) },
        { marginHorizontal: sizeScale(mh!) },
        { flexDirection },
        { padding: sizeScale(p!) },
        { paddingRight: sizeScale(pr!) },
        { paddingBottom: sizeScale(pb!) },
        { paddingLeft: sizeScale(pl!) },
        { paddingTop: sizeScale(pt!) },
        { paddingHorizontal: sizeScale(ph!) },
        { paddingVertical: pv },
        { width: typeof width === 'number' ? sizeScale(width!) : width },
        { height: typeof height === 'number' ? sizeScale(height!) : height },
        {
          maxHeight:
            typeof maxHeight === 'number' ? sizeScale(maxHeight!) : maxHeight,
        },
        {
          maxWidth:
            typeof maxWidth === 'number' ? sizeScale(maxWidth!) : maxWidth,
        },
        {
          minHeight:
            typeof minHeight === 'number' ? sizeScale(minHeight!) : minHeight,
        },
        {
          minWidth:
            typeof minWidth === 'number' ? sizeScale(minWidth!) : minWidth,
        },
        { borderWidth },
        { borderColor },
        { backgroundColor },
        { justifyContent },
        { alignItems },
        { alignSelf },
        { borderRadius },
        { flex },
        { position },
        { left },
        { right },
        { bottom },
        { top },
        { zIndex },
        { overflow },
        { borderBottomColor },
        { borderBottomLeftRadius },
        { borderBottomRightRadius },
        { borderLeftColor },
        { borderRightColor },
        { borderStyle },
        { borderTopColor },
        { borderTopLeftRadius },
        { borderTopRightRadius },
        { opacity },
        { borderBottomWidth },
        { borderLeftWidth },
        { borderRightWidth },
        { borderTopWidth },
      ]),
    ],
    [
      buttonColor,
      buttonColorTheme,
      theme.colors,
      border,
      colorTheme,
      theme.colors,
      borderColorTheme,
      middle,
      shadow,
      shadowConfig,
      m,
      ml,
      mr,
      mt,
      mb,
      flexDirection,
      p,
      pr,
      pb,
      pl,
      pt,
      ph,
      pv,
      width,
      height,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      borderWidth,
      borderColor,
      backgroundColor,
      justifyContent,
      alignItems,
      alignSelf,
      borderRadius,
      flex,
      position,
      left,
      right,
      bottom,
      top,
      zIndex,
      overflow,
      borderBottomColor,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderLeftColor,
      borderRightColor,
      borderStyle,
      borderTopColor,
      borderTopLeftRadius,
      borderTopRightRadius,
      opacity,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderTopWidth,
      style,
    ],
  );

  // render
  return (
    <TouchableOpacity
      style={[stylesView[preset], viewStyle, styleOverride]}
      {...rest}>
      {children || (
        <Text
          t18n={t18n}
          text={text}
          style={[stylesText[preset], textStyleOverride]}
          color={textColor}
          colorTheme={textColorTheme}
        />
      )}
    </TouchableOpacity>
  );
};
