import React from 'react';
import {
  ColorValue,
  FlexAlignType,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { Colors } from '@theme';
import { I18nKeys } from '@utils/i18n/locales';

import { ButtonPresetNames } from './preset';

type Direction = 'row' | 'column' | 'column-reverse' | 'row-reverse';

type JustifyContent =
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

type Position = 'absolute' | 'relative';

type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

type OverFlow = 'visible' | 'hidden' | 'scroll';

export type ShadowConfig = {
  shadowColor?: ColorValue | undefined;
  shadowOffset?: { width: number; height: number } | undefined;
  shadowOpacity?: number | undefined;
  shadowRadius?: number | undefined;
};

type StyleStringOrNumber = string | number;
export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   * @default undefined
   */
  t18n?: I18nKeys;

  /**
   * Using text instead i18n
   * @default undefined
   */
  text?: string;

  /**
   * Overwrite style for text
   * @default undefined
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Preset for button
   * @default default
   */
  preset?: ButtonPresetNames;

  /**
   * Using color for text
   * @default undefined
   */
  textColor?: string;

  /**
   * Overwrite background color with theme for text
   */
  textColorTheme?: keyof Colors;

  /**
   * Using color for button background color
   * @default undefined
   */
  buttonColor?: string;

  /**
   * Overwrite button background with theme
   * @default undefined
   */
  buttonColorTheme?: keyof Colors;

  left?: StyleStringOrNumber;

  right?: StyleStringOrNumber;

  bottom?: StyleStringOrNumber;

  top?: StyleStringOrNumber;

  zIndex?: number;

  overflow?: OverFlow;

  borderBottomWidth?: number;

  borderLeftWidth?: number;

  borderRightWidth?: number;

  borderTopWidth?: number;

  borderBottomColor?: string;

  borderBottomLeftRadius?: number;

  borderBottomRightRadius?: number;

  borderLeftColor?: string;

  borderRightColor?: string;

  borderStyle?: 'solid' | 'dotted' | 'dashed';

  borderTopColor?: string;

  borderTopLeftRadius?: number;

  borderTopRightRadius?: number;

  opacity?: number;

  /**
   * Config position
   * @default undefined
   */
  position?: Position;

  /**
   * Using margin
   * @default undefined
   */
  m?: number;

  /**
   * overwrite flex box
   */
  flex?: number;

  /**
   * Using align items
   * @default undefined
   */
  alignItems?: FlexAlignType;

  /**
   * Using align self
   * @default undefined
   */
  alignSelf?: 'auto' | FlexAlignType;

  /**
   * Using margin left
   * @default undefined
   */
  ml?: number;

  /**
   * Using margin right
   * @default undefined
   */
  mr?: number;

  /**
   * Using margin bottom
   * @default undefined
   */
  mb?: number;

  /**
   * Using margin top
   * @default undefined
   */
  mt?: number;

  /**
   * Using margin top
   * @default undefined
   */
  mv?: number;

  /**
   * Using margin top
   * @default undefined
   */
  mh?: number;

  /**
   * Using flex direction
   * @default undefined
   */
  direction?: Direction;

  /**
   * Using padding
   * @default undefined
   */
  p?: number;

  /**
   * Using padding top
   * @default undefined
   */
  pt?: number;

  /**
   * Using padding bottom
   * @default undefined
   */
  pb?: number;

  /**
   * Using padding left
   * @default undefined
   */
  pl?: number;

  /**
   * Using padding right
   * @default undefined
   */
  pr?: number;

  /**
   * Using padding horizontal
   * @default undefined
   */
  ph?: number;

  /**
   * Using padding vertical
   * @default undefined
   */
  pv?: number;

  /**
   * Actual width
   * @default undefined
   */
  width?: StyleStringOrNumber;

  /**
   * Actual max width
   * @default undefined
   */
  maxWidth?: StyleStringOrNumber;

  /**
   * Actual min width
   * @default undefined
   */
  minWidth?: StyleStringOrNumber;

  /**
   * Actual height
   * @default undefined
   */
  height?: StyleStringOrNumber;

  /**
   * Actual max width
   * @default undefined
   */
  maxHeight?: StyleStringOrNumber;

  /**
   * Actual min width
   * @default undefined
   */
  minHeight?: StyleStringOrNumber;

  /**
   * Using border
   * @default undefined
   */
  border?: boolean;

  /**
   * Set width for border
   * @default undefined
   */
  borderWidth?: number;

  /**
   * Set color for border
   * @default undefined
   */
  borderColor?: string;

  /**
   * Using background color
   * @default undefined
   */
  color?: string;

  /**
   * Overwrite background color with theme
   */
  colorTheme?: keyof Colors;

  /**
   * Overwrite border color with theme
   */
  borderColorTheme?: keyof Colors;

  /**
   * Using justify content
   * @default undefined
   */
  justifyContent?: JustifyContent;

  /**
   * Set true for using alignItems = 'center'
   * @default undefined
   */
  middle?: boolean;

  /**
   * Using border radius
   * @default undefined
   */
  borderRadius?: number;

  /**
   * Using shadow
   * @default undefined
   */
  shadow?: boolean;

  /**
   * Overwrite shadow
   */
  shadowConfig?: ShadowConfig;

  /**
   * Overwrite style for Button
   * @default undefined
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Children for button
   * @default undefined
   */
  children?: React.ReactNode;
}
