export interface IpopUp {
  type: popUpType;
  message: string;
  timer: number;
}

export type popUpType = 'success' | 'error' | 'info';
