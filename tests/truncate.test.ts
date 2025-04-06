import { truncate } from "../src/string";

test("测试应该将字符串截取到指定长度", () => {
  const str = "123456789";
  expect(truncate(str, 5)).toBe("12...");
  expect(truncate(str, 8)).toBe("12345...");
  expect(truncate(str, 9)).toBe("123456789");
  expect(truncate(str, 100)).toBe("123456789");
  expect(truncate(str, 3, "-")).toBe("12-");
});

test("如果长度参数不是一个数字，则返回原字符串", () => {
  const str = "123456789";
  expect(truncate(str, NaN)).toBe(str);
  expect(truncate(str, "abc" as any)).toBe(str);
  expect(truncate(str, null)).toBe(str);
  expect(truncate(str, undefined)).toBe(str);
  expect(truncate(str, "")).toBe(str);
});

test("处理字符串非法情况", () => {
  expect(truncate("", 5)).toBe("");
  expect(truncate(null, 5)).toBe("null");
  expect(truncate(undefined, 5)).toBe("un...");
  expect(truncate(undefined, 5, "--")).toBe("und--");
});

test("测试始终返回一个字符串", () => {
  expect(typeof truncate("123", 5)).toBe("string");
  expect(typeof truncate("123", NaN)).toBe("string");
  expect(typeof truncate(undefined, 5)).toBe("string");
});
