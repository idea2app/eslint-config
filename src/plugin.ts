function interopDefault(obj: object): any {
  // 检查当前对象是否有 'default' 属性
  if (obj && typeof obj === 'object' && 'default' in obj) {
      // 如果有 'default' 属性，返回当前对象
      return interopDefault(obj.default as object);
  } else {
      // 如果没有 'default' 属性，返回当前对象
      return obj;
  }
}

import _configJs from '@eslint/js'
export const configJs: any = interopDefault(_configJs)
