import { Equal, Expect } from "@type-challenges/utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function myReadonly(todo) {
  const result = {};
  for (const [key, value] of todo) {
    result[`readonly${key}`] = value;
  }
  return result;
}
