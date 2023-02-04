import { IRawCreator } from './raw-creator';

export interface IRawInfo {
  id: number;
  synopsis: string;
  yearsAired: string;
  genres: string[];
  creators: IRawCreator[];
}
