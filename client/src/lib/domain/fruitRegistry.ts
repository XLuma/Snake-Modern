import type { BaseFruitInterface } from './baseFruit';
import { FruitEntity } from './fruitEntity';

export class FruitRegistry {
  private static instance: FruitRegistry;
  private fruits: Map<string, FruitEntity> = new Map();

  private constructor() {}

  public static getInstance(): FruitRegistry {
    if (!FruitRegistry.instance) {
      FruitRegistry.instance = new FruitRegistry();
    }
    return FruitRegistry.instance;
  }

  public registerFruit(fruit: BaseFruitInterface): void {
    if (!this.fruits.has(fruit.key)) {
      this.fruits.set(fruit.key, new FruitEntity(fruit, 0));
    }
  }

  public registerFruits(fruits: Iterable<BaseFruitInterface>): void {
    for (const fruit of fruits) {
      this.registerFruit(fruit);
    }
  }

  public getFruit(key: string): FruitEntity | undefined {
    return this.fruits.get(key);
  }

  public getFruitsInRankRange(minRank: number, maxRank: number): FruitEntity[] {
    return Array.from(this.fruits.values()).filter(fruit => fruit.rank >= minRank && fruit.rank <= maxRank);
  }
}
