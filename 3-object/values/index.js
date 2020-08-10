export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const values = Object.values(source);
  // eslint-disable-next-line no-unused-vars
  return values.reduce((prev, next, index, array) => Number(prev) + Number(next));
}
