import { IRawEpisode } from '../types';

export class Episode {
  private constructor(
    public readonly id: number,
    public readonly season: number,
    public readonly numInSeason: number,
    public readonly title: string,
    public readonly animatedBy: string,
    public readonly directedBy: string,
    public readonly writtenBy: string[],
    public readonly originalAirDate: string,
    public readonly productionCode: string

  ) {}

  public static fromRawData(data: IRawEpisode): Episode {
    return new Episode(
      data.id,
      +data.Season,
      data.NumInSeason,
      data.Title,
      data.AnimatedBy,
      data.DirectedBy,
      data.WrittenBy,
      data.OriginalAirDate,
      data.ProductionCode
    );
  }
}
