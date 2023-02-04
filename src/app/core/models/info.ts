import { Creator } from './creator';
import { IRawInfo } from '../types';

export class Info {
  private constructor(
    public readonly id: number,
    public readonly synopsis: string,
    public readonly yearsAired: string,
    public readonly genres: string[],
    public readonly creators: Creator[]

  ) {}

  public static fromRawData(data: IRawInfo): Info {
    return new Info(
      data.id,
      data.synopsis,
      data.yearsAired,
      data.genres,
      data.creators.map((creator) => Creator.fromRawData(creator))
    );
  }
}
