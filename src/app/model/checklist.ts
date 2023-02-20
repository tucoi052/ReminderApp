export interface DataChecklistI {
  id: string;
  title: string;
}

export interface CheckListStateI {
  loading: boolean;
  listDataChecklist?: DataChecklistI[];
}
