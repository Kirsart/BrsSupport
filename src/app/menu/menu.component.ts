import {Component} from '@angular/core';


export  interface MenuItem {
  ref: string;
  name: string;
  submenu?: MenuItem[];
  visibility?: boolean;
}



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


menu: MenuItem[] = [{ ref: '', name: 'Введение'},
  {ref: '/chapter1', name: 'Глава 1. Основная структура данных и порядок работы в ПК «БАРС-Имущество»',
  submenu: [
    {ref: '/chapter1p1', name: '1.1. Архитектура ПК «БАРС-Имущество»'},
    {ref: '/chapter1p2', name: '1.2. Вход в систему и главное меню'},
    {ref: '/chapter1p3', name: '1.3. Главное окно'},
    {ref: '/chapter1p4', name: '1.4. Главное меню'}
    ]},
  { ref: '/chapter2', name: 'Глава 2. Основные элементы интерфейса, функции работы с данными',
  submenu: [
    { ref: '/chapter2p1', name: '2.1. Настройка вида таблицы',
      submenu: [
        { ref: '/chapter2p1p1', name: '2.1.1. Настройка колонок в таблице'},
        { ref: '/chapter2p1p2', name: '2.1.2. Сортировка элементов в списке'},
        { ref: '/chapter2p1p3', name: '2.1.3. Настройка оформления таблицы'}
      ]},
  ]}
];
  // отображение субменю
 submenuShow(indx: number): void{
   this.menu[indx].visibility = !this.menu[indx].visibility;
  }
}




