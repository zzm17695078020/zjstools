// 扩展一个防抖函数

type FunType = (...args: any[]) => any;

export function debounce<T extends FunType>(
  func: T,
  awaitTime: number
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func(...args);
    }, awaitTime);
  };
}
