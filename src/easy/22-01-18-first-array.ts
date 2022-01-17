import { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

/**
 * first array 取出数组的第一个元素
 */

function firstArray(arr) {
  if (arr.length) return arr[0];
  throw new Error("never");
}

type First<F extends any[]> = F["length"] extends 0 ? never : F[0];

/**
 * 因为ts是强类型，所以在定义时就能访问其属性
 * extends 继承，也可以理解为约束其类型范围。
 */
