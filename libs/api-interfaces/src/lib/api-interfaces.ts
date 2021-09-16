export interface Idea {
  activity: string
  type: string
  participants: number
  price: number
  link: string
  key: string
  accessibility: number
};

export const emptyIdea = {
  activity: '',
  type: '',
  participants: 0,
  price: 0,
  link: '',
  key: '',
  accessibility: 0
};
