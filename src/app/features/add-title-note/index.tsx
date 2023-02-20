import React, { memo, useCallback, useState } from 'react';
import isEqual from 'react-fast-compare';
import { Block, Button, Screen, Text, TextField } from '@components';
import { useStyle } from './style';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { BackIcon, MenuButtonIcon } from '@assets/icons-svg';
import { useTheme } from '@theme';
import { goBack } from '@navigation/navigation-service';
import { useEventCallback } from '@hooks';
import { dispatch, randomUniqueId } from '@common';
import { appActions, checklistActions } from '@redux-slice';

const listColor = [
  '#d45042',
  '#d48842',
  '#c6f048',
  '#48f0a7',
  '#48b8f0',
  '#4888f0',
  '#5048f0',
  '#af48f0',
  '#f048c0',
];

const AddTitleNoteComponent = () => {
  const styles = useStyle();
  const theme = useTheme();
  const [nameCheckList, setNameCheckList] = useState<string>();
  const [color, setColor] = useState<string>('#d45042');

  const onPressColor = useEventCallback(colorItem => {
    setColor(colorItem);
  });

  const borderItem = useCallback(
    (colorItem: string) => {
      return color === colorItem ? 3 : 0;
    },
    [color],
  );

  const borderColorItem = useCallback(
    (colorItem: string) => {
      return color === colorItem ? theme.colors.border : colorItem;
    },
    [color],
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Block block ph={20}>
        <Screen statusBarStyle="dark-content">
          <Block direction="row" middle justifyContent="space-between">
            <Button style={{ zIndex: 1 }} pt={5} onPress={goBack}>
              <BackIcon width={30} height={25} color="black" />
            </Button>
            <Block />
            <Text style={styles.title}>Danh sách mới</Text>
            <Button
              style={{ zIndex: 1 }}
              onPress={() =>
                dispatch(
                  checklistActions.createChecklist({
                    id: randomUniqueId(),
                    title: nameCheckList,
                  }),
                )
              }>
              <Text
                style={!nameCheckList ? styles.txtDone : styles.txtDoneEnable}>
                Xong
              </Text>
            </Button>
          </Block>
          <Block
            borderRadius={10}
            pv={40}
            mt={20}
            justifyContent="center"
            middle
            color={theme.colors.card}>
            <MenuButtonIcon color={color} width={40} height={40} />
            <TextField
              placeholderTextInput="Tên danh sách"
              onChangeText={txt => setNameCheckList(txt)}
              activeTintLabelColor="#8E97FD"
              activeTintBorderColor="#8E97FD"
              containerStyle={{ width: '90%', marginTop: 20 }}
              inputStyle={{ textAlign: 'center' }}
              typeInput={'outline'}
            />
          </Block>
          <Block
            borderRadius={10}
            pv={40}
            mt={20}
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            color={theme.colors.card}>
            {listColor.map(colorItem => (
              <Button key={colorItem} onPress={() => onPressColor(colorItem)}>
                <Block
                  borderColor={borderColorItem(colorItem)}
                  borderWidth={borderItem(colorItem)}
                  m={10}
                  borderRadius={30}>
                  <Block borderRadius={20} w={30} h={30} color={colorItem} />
                </Block>
              </Button>
            ))}
          </Block>
        </Screen>
      </Block>
    </TouchableWithoutFeedback>
  );
};
export const AddTitleNote = memo(AddTitleNoteComponent, isEqual);
