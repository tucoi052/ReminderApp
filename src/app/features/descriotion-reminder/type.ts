export interface DatePickI {}
export interface TimePickDataI {
  id: number;
  title: string;
  pick: boolean;
}
export interface DescriptionSheetI {
  show(): void;
  hide(): void;
}
