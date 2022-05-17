//component Home
const Home = {
  template: "<h1>Home</h1>",
  name: "Home",
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

//Router
const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "user-settings", component: UserSettings, name: "UserSettings" },
    { path: "whish-list", component: WishList, name: "WishList" },
    { path: "shopping-cart", component: ShoppingCart, name: "ShoppingCart" },
  ],
});

//Call de VueJS
const vue = new Vue({
  router,
}).$mount("#app");
