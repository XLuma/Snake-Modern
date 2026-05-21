import type { FruitTag } from '$lib/types/fruitTags';
import type { BaseFruitInterface } from './baseFruit';

export class FruitEntity implements BaseFruitInterface {
  stock: number;
  readonly expLimit: number[] = [3, 17, 50, 100, 500];

  constructor(
    public readonly fruit: BaseFruitInterface,
    stock: number
  ) {
    this.stock = stock;
  }

  get key(): string {
    return this.fruit.key;
  }

  get score(): number {
    return this.fruit.score;
  }

  get calories(): number {
    return this.fruit.calories;
  }

  get rank(): number {
    return this.fruit.rank;
  }

  get vitamines(): number {
    return this.fruit.vitamines;
  }

  get sta(): number {
    return this.fruit.sta;
  }

  get conservation(): number {
    return this.fruit.sta;
  }

  get freq(): number {
    return this.fruit.freq;
  }

  get tags(): FruitTag[] {
    return this.fruit.tags;
  }

  get spritePath(): string {
    return this.fruit.spritePath;
  }

  get level(): number {
    return this.expLimit.findIndex((limit) => this.stock < limit);
  }

  get coef(): number {
    return this.stock / this.expLimit[this.expLimit.length - 1];
  }

  getAverageScore(): number {
    let n = Math.pow(this.rank + 4, 1.5);
    let lim = 10;
    let current = Math.round(n / lim) * lim;
    return current * this.score * 0.1;
  }
}
