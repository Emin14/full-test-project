// Данные туров/отелей
const tours = [
  {
    id: 1,
    name: "Отель 'Москва'",
    location: "Москва, Россия",
    price: 5000,
    rating: 4.5,
    description: "Пятизвездочный отель в центре Москвы",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    category: "luxury"
  },
  {
    id: 2,
    name: "Пляжный курорт 'Тропик'",
    location: "Сочи, Россия",
    price: 3500,
    rating: 4.2,
    description: "Отель у самого моря с собственным пляжем",
    image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d",
    category: "beach"
  },
  {
    id: 3,
    name: "Горный лагерь 'Эдельвейс'",
    location: "Алтай, Россия",
    price: 2800,
    rating: 4.7,
    description: "Домики в горах с видом на вершины",
    image: "https://images.unsplash.com/photo-1531214159280-079b95d26139",
    category: "mountain"
  },
  {
    id: 4,
    name: "Историческая гостиница 'Петра'",
    location: "Санкт-Петербург, Россия",
    price: 4200,
    rating: 4.4,
    description: "Отель в историческом здании 19 века",
    image: "https://images.unsplash.com/photo-1549451371-64aa98a6f660",
    category: "historical"
  },
  {
    id: 5,
    name: "Спа-отель 'Релакс'",
    location: "Кисловодск, Россия",
    price: 6500,
    rating: 4.8,
    description: "Отель с лечебными источниками и спа-процедурами",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    category: "spa"
  }
];

// Категории туров
const categories = [
  { id: 1, name: "Все", value: "all" },
  { id: 2, name: "Люкс", value: "luxury" },
  { id: 3, name: "Пляжный", value: "beach" },
  { id: 4, name: "Горный", value: "mountain" },
  { id: 5, name: "Исторический", value: "historical" },
  { id: 6, name: "Спа", value: "spa" }
];

module.exports = { tours, categories };