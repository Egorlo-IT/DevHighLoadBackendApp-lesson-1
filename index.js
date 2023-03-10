"use strict";

/**
 * Функция для генерации рандомной строки
 * @param {number} length - размер генерируемой строки
 * @returns {string} Сгенерированная строка
 */
const generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/** Определяем переменную myArr типа Array */
const myArr = [];
/** Определяем переменную mySet типа Set */
const mySet = new Set();

/**
 * Функция для наполнения элементами myArr и mySet
 * Для реализации поиска значений в переменных
 * добавляем в переменные myArr и mySet
 * 1000000 элементов с автоматически сгенерированным значением и
 * на позиции index равному 600000 добавляем елемент
 * со значением "Привет, я здесь!"
 */
const genDataArrayAndSet = () => {
  for (let index = 0; index < 1000000; index++) {
    if (index === 600000) {
      myArr.push("Привет, я здесь!");
      mySet.add("Привет, я здесь!");
    }
    myArr.push(generateRandomString(5));
    mySet.add(generateRandomString(5));
  }
};

// Наполняем элементами myArr и mySet
genDataArrayAndSet();

// Сохраняем начальное время процесса
const myArrSearchStart = performance.now();
// Ищем строку методом indexOf
myArr.indexOf("Привет, я здесь!");
// Сохраняем финальное время процесса
const myArrSearchFinish = performance.now();
console.log(
  "Поиск в myArr занял " +
    (myArrSearchFinish - myArrSearchStart) +
    " миллисекунд."
); // Поиск в myArr занял 1.1689999997615814 миллисекунд.

// Сохраняем начальное время процесса
const mySetSearchStart = performance.now();
// Ищем строку методом has
mySet.has("Привет, я здесь!");
// Сохраняем финальное время процесса
const mySetSearchFinish = performance.now();
console.log(
  "Поиск в mySet занял " +
    (mySetSearchFinish - mySetSearchStart) +
    " миллисекунд."
); // Поиск в mySet занял 0.0037999972701072693 миллисекунд

/**
 * К сведению для оценки результатов поиска:
 * Мой комп - Процессор	12th Gen Intel(R) Core(TM) i7-12700KF, 3600 МГц, ядер: 12, логических процессоров: 20, накопитель SSD M.2 Модель WD_BLACK SN770 1TB
 **/
