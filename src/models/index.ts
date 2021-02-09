export interface Aquarium {
  id?: number;
  name?: string;
  size: number;
  params: Param[];
  startDate: string;
}

export interface Param {
  id?: number;
  date: string;
  name: string;
  value: number | null;
  aquariumId: number;
}
