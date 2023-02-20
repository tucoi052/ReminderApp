import { handleErrorResponse, STORAGE_KEY_CHECK_LIST } from '@common';
import { takeLatestListeners } from '@listener';
import { goBack } from '@navigation/navigation-service';
import { ApiConstants, NetWorkService } from '@networking';
import { loadString, saveString } from '@utils/storage';

import { checklistActions } from '../action-slice/checklist';

takeLatestListeners(true)({
  actionCreator: checklistActions.createChecklist,
  effect: async (action, listenerApi) => {
    const { body } = action.payload;
    const list = listenerApi.getState().checklist.listDataChecklist;
    const newList = [...(list ?? []), body];
    saveString(STORAGE_KEY_CHECK_LIST, JSON.stringify(newList));
    listenerApi.dispatch(
      checklistActions.changeFiled({
        field: 'listDataChecklist',
        value: newList,
      }),
    );
    goBack();
  },
});

takeLatestListeners(true)({
  actionCreator: checklistActions.getChecklist,
  effect: async (_, listenerApi) => {
    const list = JSON.parse(loadString(STORAGE_KEY_CHECK_LIST) || '[]');
    listenerApi.dispatch(
      checklistActions.changeFiled({
        field: 'listDataChecklist',
        value: list,
      }),
    );
  },
});
