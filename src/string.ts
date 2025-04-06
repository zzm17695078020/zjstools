// 扩展一个string的截取方法
export function truncate(str?: any, len?: any, omission = "...") {
  // 参数防御
  str = String(str);
  omission = String(omission);
  len = len ? Math.round(len) : NaN; // Math.round() 取整
  if (isNaN(len)) {
    return str;
  }
  if (str.length > len) {
    return str.slice(0, len - omission.length) + omission;
  }
  return str;
}
