import { FOR_ALL, GUEST_ONLY, USER_ONLY } from './route.type';
import { MENU_TYPES } from '@/consts';

const applinks = [{
   name: 'home',
   path: '/',
   view: 'Home',
   parent: '',
   meta: {
      type: FOR_ALL,
      menus: [{
         key: MENU_TYPES.MAIN, show: FOR_ALL, order: 0
      }],
      icon: 'mdi-home',
      title: '首頁'
   } 
},{
   name: 'articles',
   path: '/articles',
   view: 'Articles',
   parent: '',
   meta: {
      type: FOR_ALL,
      menus: [],
      icon: 'mdi-post-outline',
      title: ''
   } 
},{
   name: 'article-details',
   path: '/articles/:id/:title?/:user?',
   view: 'articles/Details',
   props: true,
   parent: 'articles',
   meta: {
      type: FOR_ALL,
      menus: [],
      title: ''
   } 
},{
   name: 'qrcode',
   path: '/qrcode',
   view: 'QRcode',
   parent: '',
   meta: {
      type: FOR_ALL,
      menus: [{
         key: MENU_TYPES.MAIN, show: FOR_ALL, order: 99
      }],
      icon: 'mdi-cellphone',
      title: '手機版'
   } 
},{
   name: 'close',
   path: '/close',
   view: 'Close',
   parent: '',
   meta: {
      type: FOR_ALL,
      menus: [],
      icon: '',
      title: '系統維護中'
   } 
}
];

const userLinks = [];


const guestLinks = [];

let appRoutes = applinks.concat(userLinks).concat(guestLinks);

for(let i = 0; i < appRoutes.length; i++){
   appRoutes[i].meta.order = i;
}

export default appRoutes;