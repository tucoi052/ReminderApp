import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  Block,
  Button,
  Icon,
  Screen,
  Spacer,
  Text,
  TextField,
} from '@components';
import notifee from '@notifee/react-native';
import { useStyle } from './style';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { goBack } from '@navigation/navigation-service';
import { BackIcon } from '@assets/icons-svg';
const DescriptionReminderComponent = () => {
  const [title, setTitle] = React.useState<string>();
  const [content, setContent] = React.useState<string>();
  const styles = useStyle();

  const onCreate = async () => {
    if (!title || !title?.trim().length) {
      setTitle('');
    }
    if (!content || !content?.trim().length) {
      setContent('');
    }
    if (title?.trim() && content?.trim()) {
      await notifee.requestPermission({
        alert: true,
        criticalAlert: true,
        announcement: true,
        badge: true,
        carPlay: true,
        provisional: false,
        sound: true,
      });

      // Create a channel (required for Android)
      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });

      // Display a notification
      await notifee.displayNotification({
        title: title,
        body: content,
        android: {
          channelId,
          smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
          // pressAction is needed if you want the notification to open the app when pressed
          pressAction: {
            id: 'default',
          },
        },
        ios: { critical: true, sound: 'pikaka.wav', criticalVolume: 1 },
      });
    }
    const a = await notifee.getTriggerNotifications();
    console.log(a, 'cc');
  };

  return (
    <Block block>
      <Screen statusBarStyle="dark-content" dismissKeyboardView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={70}
          style={{ flex: 1 }}>
          <Block middle direction="row" ml={10}>
            <Button pt={5} onPress={goBack}>
              <BackIcon width={30} height={25} color="black" />
            </Button>
            <Text style={styles.title}>Th??m n???i dung nh???c nh???</Text>
          </Block>
          <Text style={styles.txtRemind}>
            ?????t ti??u ????? m???t c??ch ng???n g???n thu???n ti???n nh???t.
          </Text>
          <TextField
            containerStyle={styles.boxTextFieldTitle}
            label="Ti??u ?????"
            onChangeText={txt => setTitle(txt)}
            activeTintLabelColor="#8E97FD"
            activeTintBorderColor="#8E97FD"
            typeInput={'outline'}
            error={title?.length === 0}
          />
          <Text style={styles.txtRemind}>
            B???n h??y ?????t n???i dung ????? th???c hi???n c??c c??ng vi???c c???n th???c hi???n nh??.
          </Text>
          <TextField
            containerStyle={styles.boxTextFieldContent}
            inputStyle={styles.boxInput}
            isTopLabelMutiline
            label="N???i dung"
            onChangeText={txt => setContent(txt)}
            activeTintLabelColor="#8E97FD"
            activeTintBorderColor="#8E97FD"
            multiline
            typeInput={'outline'}
            error={content?.length === 0}
          />
          <Spacer height={20} />
          <Block block />
          <Button
            middle
            color="#8E97FD"
            p={5}
            mh={20}
            mb={10}
            borderRadius={16}
            shadow
            onPress={onCreate}>
            <Text style={styles.txtNext}>T???o nh???c nh???</Text>
          </Button>
        </KeyboardAvoidingView>
      </Screen>
    </Block>
  );
};
export const DescriptionReminder = memo(DescriptionReminderComponent, isEqual);
