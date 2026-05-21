import type { BaseFruitInterface } from '$lib/domain/baseFruit';
import { FruitTag } from '$lib/types/fruitTags';
import ShampappleSprite from '$lib/assets/fruits/shampapple.png';

export const Shampapple: BaseFruitInterface = {
  score: 8,
  calories: 10,
  vitamines: 20,
  sta: 10,
  freq: 1,
  rank: 5,
  tags: [FruitTag.Red, FruitTag.Leaf, FruitTag.Sugar, FruitTag.Apple],
  key: 'shampapple',
  spritePath: ShampappleSprite
};
