// *Example #1
//==================================================================================================================
// Доповни функцію makeMessage таким чином,
//     щоб вона очікувала другим параметром(параметр callback)
// колбек - функцію і повертала її виклик.Функція deliverPizza
// або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри,
//     названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza)
// повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}
// *Example #2
//==================================================================================================================

// Необхідно написати логіку обробки замовлення піци.
// Виконай рефакторинг методу order таким чином, щоб він приймав другим і
// третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onError,
//         передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onSuccess,
//         передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError) повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError) повертає "Error! There is no pizza with a name Vienna in the assortment."
//
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(pizzaName);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(pizzaName) {
  return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

// *Example #3
//==================================================================================================================

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems -
//     масив чисел, і розраховує загальну суму його елементів,
//         яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Change code below this line

  orderedItems.forEach(function (orderedItems) {
    totalPrice += orderedItems;
  });

  // Change code above this line
  return totalPrice;
}
// *Example #4
//==================================================================================================================

// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає
// новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));
//
function filterArray(numbers, value) {
  const filteredNumbers = [];
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}
// console.log(filterArray([12, 24, 8, 41, 76], 38));
//
// *Example #5
//==================================================================================================================

// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної
//  довжини в параметри firstArray і secondArray, і повертає новий масив їхніх
//  спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра (масиву) використаний метод forEach
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
//
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line
  firstArray.forEach(function (firstArray) {
    if (secondArray.includes(firstArray)) {
      commonElements.push(firstArray);
    }
  });

  return commonElements;
  // Change code above this line
}
// console.log(getCommonElements([1, 2, 3], [2, 4]));
//
// *Example #6
//==================================================================================================================
