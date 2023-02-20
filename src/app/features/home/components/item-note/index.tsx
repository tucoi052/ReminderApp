import {
  CalenderCheckIcon,
  CalenderFillIcon,
  CalenderScheduleIcon,
  CalenderTodayIcon,
  MenuButtonIcon,
} from '@assets/icons-svg';
import { sizeScale } from '@common';
import { Block, Button, Text } from '@components';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useTheme } from '@theme';
import React from 'react';
import { useStyle } from './style';

interface ItemNoteI {
  title: string;
}
export const ItemNote = ({ title }: ItemNoteI) => {
  const theme = useTheme();
  const styles = useStyle();

  return (
    <Button
      direction="row"
      middle
      p={15}
      onPress={() => navigate(APP_SCREEN.DATE_REMINDER)}>
      <Block color={'red'} p={8} borderRadius={20}>
        <MenuButtonIcon color={theme.colors.card} width={20} height={20} />
      </Block>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>0</Text>
    </Button>
  );
};
