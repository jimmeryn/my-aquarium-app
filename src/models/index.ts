export interface Aquarium {
  id?: number;
  name?: string;
  size: number;
  params: Param[];
  startDate: Date;
}

export interface Param {
  id?: number;
  date: Date;
  name: string;
  value: number | null;
  aquariumId: number;
}
