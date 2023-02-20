import React, { memo, useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { Block, Button, Divider, Screen, Text } from '@components';
import { useStyle } from './style';
import {
  FlatList,
  ListRenderItem,
  TouchableWithoutFeedback,
} from 'react-native';
import { ItemReminder } from './components';
import { dispatch, randomUniqueId } from '@common';
import { TypeItemReminderE } from './components/item-reminder/type';
import { ItemNote } from './components/item-note';
import { useTheme } from '@theme';
import { MenuButton } from './components/menu-button';
import { useIsFocused } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectChecklist } from '@redux-selector/checklist';
import { checklistActions } from '@redux-slice';

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

const renderSeparator = memo(() => (
  <Block pl={45}>
    <Divider />
  </Block>
));

const HomeComponent = () => {
  const styles = useStyle();
  const theme = useTheme();
  const menuRef = React.useRef<{ onClose: Function }>();
  const isFocused = useIsFocused();
  const list = useSelector(selectChecklist);

  useEffect(() => {
    dispatch(checklistActions.getChecklist());
  }, []);

  useEffect(() => {
    if (list) console.log(list);
  }, [list]);

  const _renderItem: ListRenderItem<{ id: string; title: string }> =
    React.useCallback(({ item }) => <ItemNote {...item} />, []);

  useEffect(() => {
    if (!isFocused && menuRef.current?.onClose) {
      menuRef.current?.onClose();
    }
  }, [isFocused]);

  return (
    <TouchableWithoutFeedback onPress={() => menuRef.current?.onClose()}>
      <Block block>
        <Screen scroll statusBarStyle="dark-content">
          <Block
            mt={20}
            direction="row"
            flexWrap="wrap"
            justifyContent="center">
            {data.map(item => (
              <ItemReminder key={item.id} {...item} />
            ))}
          </Block>
          <Block ph={20}>
            <Block direction="row" middle justifyContent="space-between">
              <Text style={styles.titleNote}>Danh sách lời nhắc</Text>
              <Button>
                <Text color={theme.colors.colorPrimary}>Chỉnh sửa</Text>
              </Button>
            </Block>
            <FlatList
              scrollEnabled={false}
              data={list}
              centerContent
              style={styles.containerFl}
              ItemSeparatorComponent={renderSeparator}
              renderItem={_renderItem}
            />
          </Block>
        </Screen>
        <MenuButton ref={menuRef} />
      </Block>
    </TouchableWithoutFeedback>
  );
};
export const Home = memo(HomeComponent, isEqual);
