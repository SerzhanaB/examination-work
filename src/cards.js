import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";

class Cards extends Component {
  /* state = {
    cards: [
      "Карточка 1",
      "Карточка 2",
      "Карточка 3",
      "Карточка 4",
      "Карточка 5",
      "Карточка 6",
      "Карточка 7",
      "Карточка 8",
      "Карточка 9",
      "Карточка 10",
      "Карточка 11",
      "Карточка 12",
      "Карточка 13",
      "Карточка 14",
      "Карточка 15",
    ],
  };

  render() {
    return (
      <ul>
        {this.state.cards.map((item, index) => (
          <li key={index.toString()}><a href="/card">{item}</a></li>
        ))}
      </ul>
    );
  }
}*/
  render() {
    return (
      <ul>
        <li><a href="/card1">Карточка 1 Создание проекта курса в Трелло. Создание репозитория на GitHub. Файл ReadMe. Markdown язык разметки. Базовые команды Git. npm. Package.json. Создание проекта на stackblitz.com </a></li>
        <li><a href="/card2">Карточка 2 Создание React-приложения. Установка расширения React Developer Tools. Введение в React. Виртуальный DOM. Основы JSX.</a></li>
        <li><a href="/card3">Карточка 3 Рендеринг элементов. Компоненты и пропсы.</a></li>
        <li><a href="/card4">Карточка 4 Обработка событий и состояние компонента</a></li>
        <li><a href="/card5">Карточка 5 Жизненный цикл компонента</a></li>
        <li><a href="/card6">Карточка 6 Управление ресурсами. Условный рендеринг</a></li>
        <li><a href="/card7">Карточка 7 Списки и ключи</a></li>
        <li><a href="/card8">Карточка 8 Подъём состояния. Композиция компонентов</a></li>
        <li><a href="/card9">Карточка 9 HOC. Refs. Контекст. Формы. Валидация.</a></li>
        <li><a href="/card10">Карточка 10 Маршрутизация</a></li>
        <li><a href="/card11">Карточка 11 Хуки. Основные хуки</a></li>
        <li><a href="/card12">Карточка 12 Введение в Flux и Redux. Дополнительные хуки React</a></li>
        <li><a href="/card13">Карточка 13 Введение в React Redux</a></li>
        <li><a href="/card14">Карточка 14 Введение в MobX</a></li>
        <li><a href="/card15">Карточка 15 Основы тестирования</a></li>

      </ul>
    );
  }
}

export default Cards;
