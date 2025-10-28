export type Friends = Friend[];

export type Friend = {
  id: number;
  is_favorite: boolean;
  info: { id: string; nickname: string };
};
