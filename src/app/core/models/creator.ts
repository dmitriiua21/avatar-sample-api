import { IRawCreator } from '../types';

export class Creator {
  private constructor(
    public readonly name: string,
    public readonly url: string
  ) {}

  public static fromRawData(data: IRawCreator): Creator {
    return new Creator(data.name, data.url);
  }
}
