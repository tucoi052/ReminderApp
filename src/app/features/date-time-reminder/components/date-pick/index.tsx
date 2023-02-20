import { Block, Button, Text } from '@components';
import React, { useCallback } from 'react';
import { TimePickDataI } from '../../type';

const Dates = [
  { id: 1, title: 'T2', pick: false },
  { id: 2, title: 'T3', pick: false },
  { id: 3, title: 'T4', pick: false },
  { id: 4, title: 'T5', pick: false },
  { id: 5, title: 'T6', pick: false },
  { id: 6, title: 'T7', pick: false },
  { id: 7, title: 'CN', pick: false },
];

export const DatePick = React.forwardRef(({}, ref) => {
  const [timePick, setTimePick] = React.useState<TimePickDataI[]>(Dates);
  React.useImperativeHandle(
    ref,
    () => ({
      data: timePick,
    }),
    [timePick],
  );
  const _onPick = useCallback((id: number) => {
    setTimePick(_timePick => {
      const _newTimePick = _timePick.map(e => {
        if (e.id === id) e.pick = !e.pick;
        return e;
      });
      return _newTimePick;
    });
  }, []);

  return (
    <Block direction="row" justifyContent="center">
      {timePick?.map(item => {
        return (
          <Button key={item.id + 'keyTime'} onPress={() => _onPick(item.id)}>
            <Block
              color={item.pick ? '#3F414E' : undefined}
              middle
              mh={7}
              borderWidth={1}
              borderColor={!item.pick ? '#A1A4B2' : undefined}
              p={10}
              borderRadius={150}>
              <Text color={item.pick ? '#FEFFFE' : '#A1A4B2'}>
                {item.title}
              </Text>
            </Block>
          </Button>
        );
      })}
    </Block>
  );
});
