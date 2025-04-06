# zjstools

zjstools 是一个 javascript 工具库，提供了一些常用的函数和方法，可以方便的用于开发 js 应用。目前处于学习交流阶段
当前版本提供如下功能：

- 数组方法：range
- 字符串方法： truncate
- 函数方法：debounce

## 安装

可以使用 npm 或者 yarn 安装 zjstools

```bash
npm install zjstools
或
yarn add zjstools
```

## 使用

在使用之前，需要先导入 zjstools

```js
import { range, truncate, debounce } from "zjstools";
```

然后就可以使用这些方法了。

## 示例

### range

```js
range(0, 5); // [0,1,2,3,4]
range(1, 5); // [1,2,3,4]
range(0, 5, 2); // [0,2,4]
```

### truncate

```js
truncate("Hello, world!", 5); // 'He...'
truncate("Hello, world!", 8); // 'Hello...'
truncate("Hello, world!", 20); // 'Hello, world!'
```

### debounce

```js
const fn = debounce(() => console.log("Hello, world!"), 1000);
fn(); // 不会立即执行
fn(); // 不会立即执行
fn(); // 不会立即执行
// 1000 毫秒之后，'Hello, world!' 会被执行
```

## 贡献

如果您在使用 zjstools 的时候发现任何问题或建议，欢迎在 GitHub 上提交 issue 或 PR。

## 许可证

zjstools 遵循 MIT 许可证。详情请参阅 LICENSE 文件。
