// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, что пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
//
//   Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Формат сообщения:
//   'Доставка в [страна] будет стоить [цена] кредитов'.
//
//   Но доставка есть не везде, если указанной страны нет в списке, то выводи в консоль сообщение 'В вашей стране
//   доставка не доступна'.
//
//   Ниже приведен список стран и стоимость доставки.
//
// китай - 100 кредитов
// южная америка - 250 кредитов
// австралия - 170 кредитов
// индия - 80 кредитов
// ямайка - 120 кредитов


let message = prompt('Укажите страну доставки', 'Китай, Южная Америка, Австралия, Индия, Ямайка');

if (message === null) {
  alert('Отмена пользователем!');
} else {
  message = message.toLowerCase();

  switch (message) {
    case 'китай':
      message = 'Доставка в ' + capitalizationFirstLetter(message) + ' будет стоить 100 кредитов';
      break;
    case 'южная америка':
      message = 'Доставка в ' + capitalizationFirstLetter(message) + ' будет стоить 250 кредитов';
      break;
    case 'австралия':
      message = 'Доставка в ' + capitalizationFirstLetter(message) + ' будет стоить 170 кредитов';
      break;
    case 'индия':
      message = 'Доставка в ' + capitalizationFirstLetter(message) + ' будет стоить 80 кредитов';
      break;
    case 'ямайка':
      message = 'Доставка в ' + capitalizationFirstLetter(message) + ' будет стоить 120 кредитов';
      break;
    default:
      message = 'В вашей стране доставка не доступна!';
  }
}

alert(message);

function capitalizationFirstLetter(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase()
  });
}