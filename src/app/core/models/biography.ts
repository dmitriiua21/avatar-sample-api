import { IRawBio } from '../types';

export class Biography {
  private constructor(
    public readonly ages: string[],
    public readonly alternativeNames: string[],
    public readonly born: string,
    public readonly died: string[],
    public readonly ethnicity: string,
    public readonly nationality: string

  ) {}

  public static fromRawData(data: IRawBio): Biography {
    return new Biography(
      data.ages,
      data.alternativeNames,
      data.born,
      data.died,
      data.ethnicity,
      data.nationality
    );
  }
}
