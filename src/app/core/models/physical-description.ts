import { IRawPhysicalDescription } from '../types';

export class PhysicalDescription {
  private constructor(
    public readonly gender: string,
    public readonly eyeColor: string,
    public readonly hairColor: string,
    public readonly skinColor: string
  ) {}

  public static fromRawData(data: IRawPhysicalDescription): PhysicalDescription {
    return new PhysicalDescription(
      data.gender,
      data.eyeColor,
      data.hairColor,
      data.skinColor,
    );
  }
}
