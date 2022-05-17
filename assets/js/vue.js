// datas
const products = [
  {
    id: 1,
    description: "Quarz Luxe",
    price: 12,
    img: "assets/img/quarz-luxe.JPG",
  },
  {
    id: 2,
    description: "Curren Business",
    price: 20,
    img: "assets/img/curren-business.JPG",
  },
  {
    id: 3,
    description: "Curren Sport",
    price: 5,
    img: "assets/img/curren-sport.JPG",
  },
  {
    id: 4,
    description: "Jaragar Racing",
    price: 8,
    img: "assets/img/jaragar-racing.JPG",
  },
  {
    id: 5,
    description: "Liges Hommes",
    price: 3,
    img: "assets/img/liges-hommes.JPG",
  },
  {
    id: 6,
    description: "Maserati Mechanical",
    price: 65,
    img: "assets/img/maserati-mechanical.JPG",
  },
  {
    id: 7,
    description: "Montre Mecanique",
    price: 25,
    img: "assets/img/montre-mecanique.JPG",
  },
  {
    id: 8,
    description: "Brand Designer",
    price: 28,
    img: "assets/img/brand-designer.JPG",
  },
  {
    id: 9,
    description: "Relogio Masculino",
    price: 4,
    img: "assets/img/relogio-masculino.JPG",
  },
  {
    id: 10,
    description: "Tissot Multifunction",
    price: 29,
    img: "assets/img/tissot-multifunction.JPG",
  },
  {
    id: 11,
    description: "Hip Hop Gold",
    price: 87,
    img: "assets/img/hiphop-gold.JPG",
  },
  {
    id: 12,
    description: "Mesh Genova",
    price: 6,
    img: "assets/img/mesh-genova.JPG",
  },
];

//component Home
const Home = {
  template: "#home",
  name: "Home",
  data: () => {
    return {
      products,
    };
  },
};

//component UserSettings
const UserSettings = {
  template: "<h1>UserSettings</h1>",
  name: "UserSettings",
};

//component WishList
const WishList = {
  template: "<h1>WishList</h1>",
  name: "WishList",
};

//component ShoppingCart
const ShoppingCart = {
  template: "<h1>ShoppingCart</h1>",
  name: "ShoppingCart",
};

//Routes
const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/user-settings", component: UserSettings, name: "UserSettings" },
  { path: "/whish-list", component: WishList, name: "WishList" },
  { path: "/shopping-cart", component: ShoppingCart, name: "ShoppingCart" },
];

//Router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

//Call de VueJS
const app = Vue.createApp({});
app.use(router);
app.mount("#app");
