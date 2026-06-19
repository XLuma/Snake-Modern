import type { BaseFruitInterface } from '$lib/domain/baseFruit';
import { Shampapple } from './shampapple';
import { Wolfberry } from './wolfberry';

export { Wolfberry } from './wolfberry';
export { Shampapple } from './shampapple';

export const fruits = [Wolfberry, Shampapple] satisfies BaseFruitInterface[];
