export enum ItemTypes {
  JOB = "job",
  STORY = "story",
  COMMENT = "comment",
  POLL = "poll",
  POLLOPT = "pollopt",
}

export interface Item {
  id: number;
  deleted?: true;
  type?: ItemTypes;
  by?: string;
  time?: number;
  text?: string;
  dead?: true;
  parent?: number[];
  poll?: string;
  kids?: number[];
  url?: string;
  score?: number;
  title?: string;
  parts?: number[];
  descendants?: number;
}
