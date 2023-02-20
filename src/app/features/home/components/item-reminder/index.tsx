import {
  CalenderCheckIcon,
  CalenderFillIcon,
  CalenderScheduleIcon,
  CalenderTodayIcon,
} from '@assets/icons-svg';
import { sizeScale } from '@common';
import { Block, Button, Text } from '@components';
import { navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { useTheme } from '@theme';
import React from 'react';
import { useStyle } from './style';
import { ItemReminderI, TypeItemReminderE } from './type';

export const ItemReminder = ({ title, type }: ItemReminderI) => {
  const theme = useTheme();
  const styles = useStyle();

  const renderIcon = React.useCallback(() => {
    switch (type) {
      case TypeItemReminderE.TODAY:
        return (
          <Block>
            <CalenderTodayIcon
              color={theme.colors.colorPrimary}
              width={25}
              height={24}
            />
            <Text style={styles.numberCalender}>{new Date().getDate()}</Text>
          </Block>
        );
      case TypeItemReminderE.SCHEDULE:
        return (
          <CalenderScheduleIcon
            color={theme.colors.colorPrimary}
            width={25}
            height={24}
          />
        );
      case TypeItemReminderE.ALL:
        return (
          <CalenderFillIcon
            color={theme.colors.colorPrimary}
            width={30}
            height={24}
          />
        );
      case TypeItemReminderE.FINISHED:
        return (
          <CalenderCheckIcon
            color={theme.colors.colorPrimary}
            width={25}
            height={24}
          />
        );
    }
  }, []);

  return (
    <Button
      width={sizeScale(150)}
      borderRadius={10}
      height={sizeScale(80)}
      color={theme.colors.card}
      m={7}
      p={10}
      onPress={() => navigate(APP_SCREEN.DATE_REMINDER)}>
      <Block direction="row" middle justifyContent="space-between">
        {renderIcon()}
        <Text style={styles.number}>{0}</Text>
      </Block>
      <Block block />
      <Text style={styles.title}>{title}</Text>
    </Button>
  );
};
