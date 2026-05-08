import type { FruitTag } from '$lib/types/fruitTags';

/**
 * @description This type implements the base data structure for a Fruit.
 */
export type BaseFruit = {
  score: number; //score calc
  calories: number; //snake grows 1cm per calorie
  vitamines: number; //frutibar fills up x times 0.05%
  rank: number; //unique, like an id ?
  sta: number; //how long it stays in game
  freq: number; //how often it can spawn ? or how many ?
  tags: FruitTag[]; //assorted tags
  key: string; //unique key identifier
  spritePath?: string; //optional path to sprites while I figure this out
};
