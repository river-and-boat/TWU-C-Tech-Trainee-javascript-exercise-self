export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const AGE_CHILDREN = 18;
  return collection.find(c => c.age <= AGE_CHILDREN).name;
}
