import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import {
  Block,
  Button,
  Screen,
  Spacer,
  Text,
  TouchableScale,
} from '@components';
import DatePicker from 'react-native-date-picker';
import { useStyle } from './style';
import { TimePickDataI } from './type';
import { DatePick } from './components';
import { goBack, navigate } from '@navigation/navigation-service';
import { APP_SCREEN } from '@navigation/screen-types';
import { BackIcon } from '@assets/icons-svg';
const DateReminderComponent = () => {
  const [date, setDate] = React.useState(new Date());
  const dataDateRef = React.useRef<{ data: TimePickDataI[] }>();
  const styles = useStyle();

  const onNext = () => {
    navigate(APP_SCREEN.DESCRIPTION_REMINDER);
  };

  return (
    <Block block color="#fff">
      <Screen statusBarStyle="dark-content" bottomInsetColor="#fff">
        <Block direction="row" ml={10}>
          <Button pt={5} onPress={goBack}>
            <BackIcon width={30} height={25} color="black" />
          </Button>
          <Text style={styles.title}>
            Bạn muốn thông báo nhắc nhở lúc mấy giờ?
          </Text>
        </Block>
        <Text style={styles.txtRemind}>
          Bạn có thể chọn bất cứ lúc nào nhưng chúng tôi khuyên bạn nên làm việc
          đầu tiên vào buổi sáng.
        </Text>
        <Block middle pv={10}>
          <DatePicker
            mode="time"
            date={date}
            onDateChange={setDate}
            locale="vi"
          />
        </Block>
        <Text style={styles.txtTime}>
          Bạn muốn thông báo nhắc nhở vào ngày nào?
        </Text>
        <TouchableScale>
          <Text style={styles.txtRemind}>
            Hàng ngày là tốt nhất, nhưng chúng tôi khuyên bạn nên chọn ít nhất
            năm ngày.
          </Text>
        </TouchableScale>
        <Spacer height={20} />
        {/* <Block block /> */}
        <DatePick ref={dataDateRef} />
        {/* <Button
          middle
          color="#8E97FD"
          p={5}
          mh={20}
          mb={10}
          shadow
          borderRadius={16}
          onPress={onNext}>
          <Text style={styles.txtNext}>Tiếp theo</Text>
        </Button> */}
      </Screen>
    </Block>
  );
};
export const DateReminder = memo(DateReminderComponent, isEqual);
