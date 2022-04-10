const locations = [
    {
        "id": 0,
        "name": "Театр",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/0.jpg",
        "jobs": ["Зритель","Актер", "Буфетчик"]
    },
    {
        "id": 1,
        "name": "Полярная станция",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/1.jpg",
        "jobs": ["Ученый", "Полярник", "Посетитель"]
    },
    {
        "id": 2,
        "name": "Пиратский корабль",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/2.jpg",
        "jobs": ["Капитан", "Кок", "Салага"]
    },
    {
        "id": 3,
        "name": "Корпоратив",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/3.jpg",
        "jobs": ["Директор", "Пьяный работник", "Пьяница"]
    },
    {
        "id": 4,
        "name": "Университет",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/4.jpg",
        "jobs": ["Студент", "Препод", "Декан", "Уборщица"]
    },
    {
        "id": 5,
        "name": "СПА-салон",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/5.jpg",
        "jobs": ["Посетитель", "Работник", "Директор"]
    },
    {
        "id": 6,
        "name": "Подводная лодка",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/6.jpg",
        "jobs": ["Офицер", "Матрос", "Командир"]
    },
    {
        "id": 7,
        "name": "Океанский лайнер",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/7.jpg",
        "jobs": ["Отдыхающий", "Капитан", "Матрос", "Врач"]
    },
    {
        "id": 8,
        "name": "Пляж",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/8.jpg",
        "jobs": ["Отдыхающий", "Спасатель", "Продавец"]
    },
    {
        "id": 9,
        "name": "Полицейский участок",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/9.jpg",
        "jobs": ["Полицейский", "Дежурный", "Преступник"]
    },
    {
        "id": 10,
        "name": "Орбитальная станция",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/10.jpg",
        "jobs": ["Космонавт", "Пришелец", "Астронавт"]
    },
    {
        "id": 11,
        "name": "Больница",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/11.jpg",
        "jobs": ["Врач", "Доктор", "Больной"]
    },
    {
        "id": 12,
        "name": "Киностудия",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/12.jpg",
        "jobs": ["Актер", "Режиссер", "Сценарист", "Дублёр", "Массовка"]
    },
    {
        "id": 13,
        "name": "Сервис-центр",
        "url": "https://meme-police.ru/spyfall//location/spyfall1/13.jpg",
        "jobs": ["Механик", "Администратор", "Продавец", "Покупатель"]
    },
    {
        "id": 14,
        "name": "Школа",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/14.jpg",
        "jobs": ["Ученик", "Учитель", "Охраник", "Уборщица", "Завуч"]
    },
    {
        "id": 15,
        "name": "Супермаркет",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/15.jpg",
        "jobs": ["Продавец-кассир", "Покупатель", "Охраник", "Уборщица", "Консультант"]
    },
    {
        "id": 16,
        "name": "Посольство",
        "url": "https://meme-police.ru/spyfall//location/spyfall1/16.jpg",
        "jobs": ["Дипломат", "Посол", "Старший советник", "Советник"]
    },
    {
        "id": 17,
        "name": "Самолёт",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/17.jpg",
        "jobs": ["Пилот", "Пилот помощник", "Пассажир", "Стюардесса"]
    },
    {
        "id": 18,
        "name": "Ресторан",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/18.jpg",
        "jobs": ["Официант", "Повар", "Бармен", "Администратор"]
    },
    {
        "id": 19,
        "name": "Пассажирский поезд",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/19.jpg",
        "jobs": ["Проводник", "Пассажир", "Машинист"]
    },
    {
        "id": 20,
        "name": "Казино",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/20.jpg",
        "jobs": ["Охранник", "Игрок", "Крупье"]
    },
    {
        "id": 21,
        "name": "Банк",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/21.jpg",
        "jobs": ["Банкир", "Кассир", "Посетитель"]
    },
    {
        "id": 22,
        "name": "Войско крестоносцев",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/22.jpg",
        "jobs": ["Воин", "Стрелок", "Рыцарь", "Князь"]
    },
    {
        "id": 23,
        "name": "Отель",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/23.jpg",
        "jobs": ["Администратор", "Менеджер", "Охранник", "Постоялец"]
    },
    {
        "id": 24,
        "name": "Церковь",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/24.jpg",
        "jobs": ["Священник", "Посетитель", "Псаломщик", "Звонарь"]
    },
    {
        "id": 25,
        "name": "Воинская часть",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/25.jpg",
        "jobs": ["Военный", "Шпион", "Генерал"]
    },
    {
        "id": 26,
        "name": "Цирк-шапито",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/26.jpg",
        "jobs": ["Клоун", "Посетитель", "Фокусник", "Дрессировщик", "Гимнаст"]
    },
    {
        "id": 27,
        "name": "Овощебаза",
        "url":  "https://meme-police.ru/spyfall//location/spyfall1/27.jpg",
        "jobs": ["Фермер", "Разнорабочий"]
    }
]

export default locations