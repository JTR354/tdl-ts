import { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P;
};

function tupleToObject(tuple) {
  const obj = {};
  tuple.forEach((key) => {
    obj[key] = key;
  });
  return obj;
}

/**
 * 总结：
 * 1. typeof 将js的数据类型转换为ts的类型约束
 * 2. const tuple = ["tesla", "model 3", "model X", "model Y"] as const 中的 `as const` 可以约束每个元素为常量，类似枚举;
 */

const a = { b: "123" };
type r = typeof a;
