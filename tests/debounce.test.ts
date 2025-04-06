import { debounce } from "../src/function";

beforeEach(() => {
  // 使用jest的模拟定时器
  jest.useFakeTimers();
});

afterEach(() => {
  // 清除jest模拟的定时器
  jest.clearAllTimers();
  // 还原定时器
  jest.useRealTimers();
});

test("应该在等待时间之后调用函数", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);
  debouncedFunc();
  jest.advanceTimersByTime(500);
  expect(func).toHaveBeenCalledTimes(0);
  jest.advanceTimersByTime(500);
  expect(func).toHaveBeenCalledTimes(1);
});

test("当防抖函数执行的时候，始终只执行最后一次调用", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc("1");
  debouncedFunc("2");
  debouncedFunc("3");
  debouncedFunc("4");

  jest.advanceTimersByTime(1000);
  expect(func).toHaveBeenCalledWith("4");
});

test("在等待时间内又调用了函数，重置定时器", () => {
  const func = jest.fn();
  const debouncedFunc = debounce(func, 1000);

  debouncedFunc();
  jest.advanceTimersByTime(500);
  debouncedFunc();
  jest.advanceTimersByTime(500);
  debouncedFunc();
  expect(func).toHaveBeenCalledTimes(0);

  jest.advanceTimersByTime(1000);
  expect(func).toHaveBeenCalledTimes(1);
});
