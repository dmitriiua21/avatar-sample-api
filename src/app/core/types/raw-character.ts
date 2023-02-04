import { IRawBio } from './raw-bio';
import { IRawPersonalInformation } from './raw-personal-information';
import { IRawPhysicalDescription } from './raw-physical-description';

export interface IRawCharacter {
  id: number;
  bio: IRawBio;
  image: string;
  name: string;
  personalInformation: IRawPersonalInformation;
  physicalDescription: IRawPhysicalDescription;
}
