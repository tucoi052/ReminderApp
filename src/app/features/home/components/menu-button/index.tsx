import {
  AddCricleIcon,
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
import React, { memo } from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useStyle } from './style';

export const MenuButton = React.forwardRef(({}, ref) => {
  const theme = useTheme();
  const styles = useStyle();
  const [showMenu, setShowMenu] = React.useState(false);
  const rotateValue = useSharedValue(0);
  const translateNoteValue = useSharedValue(0);
  const translateReminderValue = useSharedValue(0);

  const onClose = React.useCallback(() => {
    setShowMenu(false);
  }, []);

  React.useImperativeHandle(
    ref,
    () => ({
      onClose,
    }),
    [],
  );

  React.useEffect(() => {
    if (showMenu) {
      rotateValue.value = withSpring(45);
      translateNoteValue.value = withSpring(0);
      translateReminderValue.value = withSpring(0);
    } else {
      rotateValue.value = withSpring(0);
      translateNoteValue.value = withSpring(1);
      translateReminderValue.value = withSpring(1);
    }
  }, [showMenu]);

  const styleAdd = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${rotateValue.value}deg`,
        },
      ],
    };
  });

  const styleItemNote = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(translateNoteValue.value, [0, 1], [0, 200]),
        },
        {
          translateX: interpolate(translateNoteValue.value, [0, 1], [0, 200]),
        },
        {
          scale: interpolate(translateNoteValue.value, [0, 1], [1, 0]),
        },
      ],
      opacity: interpolate(translateNoteValue.value, [0, 1], [1, 0]),
    };
  });

  const styleItemReminder = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            translateReminderValue.value,
            [0, 1],
            [0, 200],
          ),
        },
        {
          translateX: interpolate(
            translateReminderValue.value,
            [0, 1],
            [0, 200],
          ),
        },
        {
          scale: interpolate(translateReminderValue.value, [0, 1], [1, 0]),
        },
      ],
      opacity: interpolate(translateReminderValue.value, [0, 1], [1, 0]),
    };
  });

  return (
    <Animated.View>
      <Animated.View style={styleItemReminder}>
        <Button
          shadow
          style={styles.addReminder}
          onPress={() => {
            onClose();
            navigate(APP_SCREEN.DATE_REMINDER);
          }}>
          <Text>Nhắc nhở</Text>
        </Button>
      </Animated.View>
      <Animated.View style={styleItemNote}>
        <Button
          shadow
          style={styles.addNote}
          onPress={() => {
            onClose();
            navigate(APP_SCREEN.ADD_TITLE_NOTE);
          }}>
          <Text>Checklist</Text>
        </Button>
      </Animated.View>
      <Button
        p={15}
        style={[styles.addIcon]}
        onPress={() => setShowMenu(!showMenu)}>
        <Animated.View style={styleAdd}>
          <AddCricleIcon
            color={theme.colors.colorPrimary}
            width={40}
            height={40}
          />
        </Animated.View>
      </Button>
    </Animated.View>
  );
});
