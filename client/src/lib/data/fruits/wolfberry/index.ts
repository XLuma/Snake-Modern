import type { BaseFruit } from '$lib/domain/baseFruit';
import { FruitTag } from '$lib/types/fruitTags';

export const Wolfberry: BaseFruit = {
  score: 10,
  calories: 10,
  vitamines: 10,
  sta: 10,
  freq: 1,
  rank: 0,
  tags: [FruitTag.Leaf, FruitTag.Sugar, FruitTag.Small, FruitTag.Courge, FruitTag.Orange],
  key: 'wolfberry'
};
