export interface ItemReminderI {
  title: string;
  type: TypeItemReminderE;
}

export enum TypeItemReminderE {
  TODAY,
  SCHEDULE,
  ALL,
  FINISHED,
}
