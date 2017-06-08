// Убираем подключённый файл скриптов, т.к. при деве стили берутся из памяти
const $stylesheet = document.getElementById('main-stylesheet');
if ($stylesheet) {
    $stylesheet.parentNode.removeChild( $stylesheet );
}
