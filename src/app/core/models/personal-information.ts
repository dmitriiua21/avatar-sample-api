import { IRawPersonalInformation } from '../types';

export class PersonalInformation {
  private constructor(
    public readonly allies: string[],
    public readonly enemies: string[],
    public readonly fightingStyles: string[],
    public readonly loveInterst: string,
    public readonly weaponsOfChoice: string[]
  ) {}

  public static fromRawData(data: IRawPersonalInformation): PersonalInformation {
    return new PersonalInformation(
      data.allies,
      data.enemies,
      data.fightingStyles,
      data.loveInterst,
      data.weaponsOfChoice
    );
  }
}
