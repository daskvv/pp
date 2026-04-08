// База квартир (аналог БД)
const database = {
  // Квартиры
  kvr_101: {
    id: "kvr_101",
    rooms: 2,
    area: 45.5,
    price: 8500000,
    address: "ул. Ленина, д. 10, кв. 101"
  },
  
  kvr_202: {
    id: "apt_202",
    rooms: 3,
    area: 68.2,
    price: 12500000,
    address: "пр. Мира, д. 25, кв. 202"
  },
  
  kvr_303: {
    id: "apt_303",
    rooms: 1,
    area: 32.0,
    price: 6200000,
    address: "ул. Гагарина, д. 5, кв. 303"
  },
  
  kvr_404: {
    id: "apt_404",
    rooms: 4,
    area: 95.7,
    price: 18700000,
    address: "б-р Победы, д. 12, кв. 404"
  },
  
  kvr_505: {
    id: "apt_505",
    rooms: 2,
    area: 51.3,
    price: 9300000,
    address: "ул. Советская, д. 8, кв. 505"
  }
};

// Получения квартиры по ID
function getKvartiraById(id) {
  const kvartira = database[id];
  
  if (kvartira) {
    return kvartira;
  } else {
    return `Квартира с ID "${id}" не найдена`;
  }
}

// Отображение всех свойств квартиры
function showApartmentInfo(id) {
  const kvartira = getKvartiraById(id);
  
  if (typeof kvartira === "object") {
    console.log(`\n=== Квартира ${kvartira.id} ===`);
    console.log(`Адрес: ${kvartira.address}`);
    console.log(`Количество комнат: ${kvartira.rooms}`);
    console.log(`Общая площадь: ${kvartira.area} м²`);
    console.log(`Стоимость: ${kvartira.price.toLocaleString()} ₽`);
  } else {
    console.log(kvartira);
  }
}

// Примеры использования
console.log("Проверка работы базы квартир\n");

// Доступ к квартире по ID
const myKvartira = getKvartiraById("kvr_303");
console.log("Полученная квартира:", myKvartira);

// Просмотр информации о квартире
showApartmentInfo("kvr_101");
showApartmentInfo("kvr_202");
showApartmentInfo("kvr_505");

// Проверка несуществующего ID
showApartmentInfo("kvr_999");

// Доступ к отдельным свойствам
console.log("\nДоступ к отдельным свойствам");
console.log(`Стоимость kvr_404: ${database.kvr_404.price.toLocaleString()} ₽`);
console.log(`Кол-во комнат kvr_202: ${database.kvr_202.rooms}`);
console.log(`Площадь kvr_101: ${database.kvr_101.area} м²`);

