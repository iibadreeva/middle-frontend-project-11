# Hexlet tests and linter status:
[![Node CI](https://github.com/iibadreeva/middle-frontend-project-11/actions/workflows/nodejs.yml/badge.svg)](https://github.com/iibadreeva/middle-frontend-project-11/actions/workflows/nodejs.yml)

### RSS Aggregator [демо](https://middle-frontend-project-11.vercel.app/)
Деплой получившееся на [Vercel](https://vercel.com/iibadreevas-projects).

## Setup

```sh
npm install
```

## Run

```sh
npm run dev
```

### 1. Архитектура (MVC)
- Разделен код на три слоя: Model, View, Controller.
- Выведен слой View (с вотчерами) в отдельный файл (view.js). 
- - шаблон формы `example/template.js`шаблон формы `example/template.js`

### 2. Валидация
- Использован Yup с асинхронной валидацией.
- Валидирована форма:
- - непустое поле;
- - корректность URL (валидный формат);
- - отсутствие дубликатов в списке фидов.
- При ошибке подсвечена красным рамка вокруг инпута.
- Очистить форму и установить фокус на инпут после успешного добавления потока.

### 3. Локализация (i18next)
- Все тексты интерфейса выводятся через i18next.
- Тексты ошибок Yup также выводятся через i18next (настоин yup.setLocale()).
- Тексты хранят в состоянии — коды ошибок, получен текст через i18next по коду.
- Поддерживаемые тексты:
- - лейбл поля ввода: «Ссылка RSS»;
- - текст кнопки: «Добавить»;
- - ошибки: «Не должно быть пустым», «Ссылка должна быть валидным URL».

### 4. Асинхронные операции
- Все асинхронные операции на промисах.
- Для проверки URL использован запрос к API:
- Проверка дубликатов выполняется на стороне клиента (сравнение с текущим списком фидов).


## Настройка зависимостей
- `Yup`: настроена локаль через yup.setLocale(), используя переводы i18next.
- `i18next`: инициализировано с ресурсами для русского языка (ключи: rssLabel, addButton, errors.required, errors.invalidUrl).
- `Axios`: использовано для запроса к API проверки URL.
- `Valtio`: создать реактивное состояние в Model.
