/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */

// option one

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// option two

//   function forEach (array, callback){
//           for (const [index, elem] of array.entries()) {
//                   callback(elem, index, array)
//               }
//           }

forEach([1, 2, 3], function (element, index, array) {
  console.log(element, index, array);
});

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */

function map(array, callback) {
  const arrCopy = [];
  for (let i = 0; i < array.length; i++) {
    const mappedCopy = callback(array[i], i, array);
    arrCopy.push(mappedCopy);
  }
  return arrCopy;
}

map([1, 2, 3], (element) => element * 2);

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array

 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */

function reduce(array, callback, acc) {
  let initValue = acc === undefined;
  for (let i = 0; i < array.length; i++) {
    if (initValue) {
      acc = array[i];
      initValue = false;
    } else {
      acc = callback(acc, array[i], i, array);
    }
  }
  return acc;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */

function upperProps(obj) {
  return Object.keys(obj).map((key) => key.toUpperCase());
}
/*
 Задание 5 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат

 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(obj, prop, value) {
      obj[prop] = value * 2;
      return true;
    },
  });
}
// console.log(createProxy.value1);

export { forEach, map, reduce, upperProps, createProxy };
