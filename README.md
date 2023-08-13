<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![commits][commits-shield]][commits-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shtxkrxl/auth-app">
    <img src="public/icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Auth</h3>

  <p align="center">
    Веб-сайт с функционалом авторизации
    <br />
    <a href="https://auth-app.pages.dev">Сайт</a>
    ·
    <a href="https://github.com/shtxkrxl/auth-app/issues">Сообщить об ошибке</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
    </li>
    <li><a href="#лицензия">Лицензия</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## О проекте

![image](https://github.com/shtxkrxl/auth-app/assets/68380962/5affbc87-5cd9-4682-826e-a39cd33416dc)

Проект создан с целью изучения и практического освоения процесса авторизации пользователя на веб-сайте. 

Основной функционал проекта включает в себя:
* Регистрация новых пользователей: на сайте имеется форма, где пользователь может ввести свои данные, такие как имя, электронная почта, пароль и аватар. Введенные данные сохраняются в базе данных для последующей авторизации.
* Авторизация зарегистрированных пользователей: пользователь может войти в свою учетную запись с помощью своей электронной почты и пароля. Если данные верны, пользователь перенаправляется на страницу личного профиля.
* Защита авторизованных маршрутов: страница личного профиля на сайте доступна только авторизованным пользователям. Если пользователь попытается получить доступ к странице без авторизации, он будет перенаправлен на страницу входа.
* Возможность выхода из учетной записи: пользователь может выйти из своей учетной записи, нажав на соответствующую кнопку. После выхода пользователь перенаправляется на страницу входа.
* Валидация данных: на сайте присутствует валидация вводимых данных, чтобы предотвратить ввод некорректных или неполных данных при регистрации и авторизации.

Этот проект представляет собой простую реализацию основных механизмов авторизации на сайте и предоставляет хорошую основу для дальнейшего изучения и разработки более сложных систем авторизации.

Во время разработки:
* Использовал фреймворк [Nuxt](https://nuxt.com/)
* Писал стили с помощью css-фреймворка - [Tailwindcss](https://tailwindcss.com/)
* Использовал базу данных - [Firebase](https://firebase.google.com/)
* Разработал валидацию введённых данных
* Использовал хостинг [Cloudflare](https://www.cloudflare.com/)

<!-- LICENSE -->
## Лицензия

Распространяется под лицензией MIT License. Читайте `LICENSE.txt` для большей информации.

<!-- CONTACT -->
## Контакты

Александр Кальмаев - <a href="mailto:shtxkrxl@ya.ru" target="_blank">shtxkrxl@ya.ru</a>

Ссылка на проект: [https://github.com/shtxkrxl/auth-app](https://github.com/shtxkrxl/auth-app)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[commits-shield]: https://img.shields.io/github/commit-activity/t/shtxkrxl/auth-app.svg?style=for-the-badge
[commits-url]: https://github.com/shtxkrxl/auth-app/graphs/commit-activity
[issues-shield]: https://img.shields.io/github/issues/shtxkrxl/auth-app.svg?style=for-the-badge
[issues-url]: https://github.com/shtxkrxl/auth-app/issues
[license-shield]: https://img.shields.io/github/license/shtxkrxl/auth-app.svg?style=for-the-badge
[license-url]: https://github.com/shtxkrxl/auth-app/blob/master/LICENSE
