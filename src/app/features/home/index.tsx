import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { Block, Button, Screen } from '@components';
import { useStyle } from './style';
import { FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import { ItemReminder } from './components';
import { randomUniqueId } from '@common';
import { TypeItemReminderE } from './components/item-reminder/type';
import { AddCricleIcon } from '@assets/icons-svg';

const data = [
  {
    id: randomUniqueId(),
    title: 'Hôm nay',
    type: TypeItemReminderE.TODAY,
  },
  {
    id: randomUniqueId(),
    title: 'Lịch dự kiến',
    type: TypeItemReminderE.SCHEDULE,
  },
  {
    id: randomUniqueId(),
    title: 'Tất cả',
    type: TypeItemReminderE.ALL,
  },
  {
    id: randomUniqueId(),
    title: 'Đã hoàn tất',
    type: TypeItemReminderE.FINISHED,
  },
];

const HomeComponent = () => {
  const styles = useStyle();
  return (
    <Screen statusBarStyle="dark-content">
      <Block block>
        <Block mt={20} direction="row" flexWrap="wrap" justifyContent="center">
          {data.map(item => (
            <ItemReminder {...item} />
          ))}
        </Block>
        <Button p={15} style={styles.addIcon}>
          <AddCricleIcon width={40} height={40} />
        </Button>
      </Block>
    </Screen>
  );
};
export const Home = memo(HomeComponent, isEqual);
