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
            <CalenderTodayIcon width={25} height={20} />
            <Text style={styles.numberCalender}>{new Date().getDate()}</Text>
          </Block>
        );
      case TypeItemReminderE.SCHEDULE:
        return <CalenderScheduleIcon width={25} height={20} />;
      case TypeItemReminderE.ALL:
        return <CalenderFillIcon width={25} height={20} />;
      case TypeItemReminderE.FINISHED:
        return <CalenderCheckIcon width={25} height={20} />;
    }
  }, []);

  return (
    <Button
      width={sizeScale(160)}
      borderRadius={10}
      height={sizeScale(80)}
      color={theme.colors.card}
      shadow
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
