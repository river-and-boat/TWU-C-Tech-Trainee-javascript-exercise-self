export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let values = Object.values(source);
  return values.reduce((prev, next, index, array) => Number(prev) + Number(next));
}
