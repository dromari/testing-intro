const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары с 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, "asc");
    expect(result.map((p) => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products);
    expect(result.map((p) => p.id)).toEqual([3, 6, 5, 4, 2, 1]);
  });

  test("товары [1, 3, 4] с 'asc' сортируются как [3, 4, 1]", () => {
    const filtered = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(filtered, "asc");
    expect(result.map((p) => p.id)).toEqual([3, 4, 1]);
  });

  test("все товары с 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, "desc");
    expect(result.map((p) => p.id)).toEqual([1, 2, 4, 5, 6, 3]);
  });

  test("товары [3, 1, 4] с 'desc' сортируются как [1, 4, 3]", () => {
    const filtered = products.filter(({ id }) => [3, 1, 4].includes(id));
    const result = sortProductsByPrice(filtered, "desc");
    expect(result.map((p) => p.id)).toEqual([1, 4, 3]);
  });

  test("товары [5, 2, 6] с 'desc' сортируются как [2, 5, 6]", () => {
    const filtered = products.filter(({ id }) => [5, 2, 6].includes(id));
    const result = sortProductsByPrice(filtered, "desc");
    expect(result.map((p) => p.id)).toEqual([2, 5, 6]);
  });

  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const filtered = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(filtered, "asc");
    expect(filtered.map((p) => p.id)).toEqual([1, 3, 4]);
  });

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const filtered = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(filtered, "desc");
    expect(filtered.map((p) => p.id)).toEqual([1, 3, 4]);
  });

  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const productsCopy = [...products];
    sortProductsByPrice(productsCopy);
    expect(productsCopy.map((p) => p.id)).toEqual(products.map((p) => p.id));
  });
});
