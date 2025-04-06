// 对数组扩展一个range方法 生成 指定范围的数组 前开后闭
export function range(start?: any, stop?: any, step?: any) {
  // 做参数防御
  start = start ? (isNaN(+start) ? 0 : +start) : 0;
  stop = stop ? (isNaN(+stop) ? 0 : +stop) : 0;
  step = step ? (isNaN(+step) ? 0 : +step) : 1;

  // 处理step
  if ((start < stop && step < 0) || (start > stop && step > 0)) {
    step = -step;
  }

  const list: number[] = [];

  for (let i = start; start < stop ? i < stop : i > stop; i += step) {
    list.push(i);
  }
  return list;
}
