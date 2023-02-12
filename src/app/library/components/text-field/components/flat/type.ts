import { StyleProp, ViewStyle } from 'react-native';
import { InputBaseProps } from '../../type';

export interface InputFlatProps extends InputBaseProps {
  labelWrapStyle?: StyleProp<ViewStyle>;
}
