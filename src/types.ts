export type ValueOf<T> = T[keyof T];
export type Nullable<T> = { [P in keyof T]: T[P] | null };

/**
 * @alias DeepReadonly
 * @see https://github.com/piotrwitek/utility-types/blob/master/src/mapped-types.ts
 */
export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | null
  | undefined;
export type _DeepReadonlyArray<T> = ReadonlyArray<DeepReadonly<T>>;
/** @private */
export type _DeepReadonlyObject<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
export type DeepReadonly<T> = T extends ((...args: any[]) => any) | Primitive
  ? T
  : T extends _DeepReadonlyArray<infer U>
  ? _DeepReadonlyArray<U>
  : T extends _DeepReadonlyObject<infer V>
  ? _DeepReadonlyObject<V>
  : T;
