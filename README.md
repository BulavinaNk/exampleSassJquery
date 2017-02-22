# Example gulp + sass + jquery + ajax

Описание 
Страница предназначена для просмотра карточек-заметок у которых есть название и описание, пользователь может поставить лайк или убрать его, и удалить карточку. Манипуляции с карточками происходят с помощью библиотеки jquery и ajax запросах. Информация содержащаяся в заметках находится на сервере в виде json, поэтому удаленные карточки можно восстановить при перезапуске сервера, а не страницы. 

К странице применена адаптивная верстка, все элементы являются гибкими, кроме того, для разных носителей происходит различная компановка элементов страницы (для телефонов блоки размещены в 1 колонку, для планшетов в 2 и для больших эранов 4 колонки).  



## Установка

Перейти в каталог с репозиторием. Для уставноки нужна node.

```
npm install
npm install gulp -g
```

## Использование

Для запуска сервера запустить:

```
node server_js/server.js
```

Для запуска `browser-sync` и сборки scss в css нужно запусить gulp.

```
gulp
```

Будет запущен фронтэнд сервер.

