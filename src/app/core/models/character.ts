import { IRawCharacter } from '../types';
import { Biography } from './biography';
import { PersonalInformation } from './personal-information';
import { PhysicalDescription } from './physical-description';

export class Character {
  private constructor(
    public readonly id: number,
    public readonly bio: Biography,
    public readonly image: string,
    public readonly name: string,
    public readonly personalInformation: PersonalInformation,
    public readonly physicalDescription: PhysicalDescription

  ) {}

  public static fromRawData(data: IRawCharacter): Character {
    return new Character(
      data.id,
      Biography.fromRawData(data.bio),
      data.image,
      data.name,
      PersonalInformation.fromRawData(data.personalInformation),
      PhysicalDescription.fromRawData(data.physicalDescription)
    );
  }
}
