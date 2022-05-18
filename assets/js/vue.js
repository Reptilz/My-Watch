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
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  //computed est un listenner...
  computed: {
    //search data
    filterList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    //On récupère les cookies 'like'
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get("like"));
      //si cookieValue est vide alors on dit que this.like est vide sinon on ajoute les cookies dans liked (component Home)
      cookieValue == null ? (this.liked = []) : (this.liked = cookieValue);
    },
    //calcule la somme totale du panier
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price;
      }
      return total;
    },
    //affiche le total d'item dans le panier
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].quantity;
      }
      return itemTotal;
    },
  },
  //la méthode se déclenche uniquement lors d'un click sur une checkbox
  methods: {
    setLikeCookie() {
      document.addEventListener("input", () => {
        //setTimeout pour faire une fonction asynchrone
        setTimeout(() => {
          $cookies.set("like", JSON.stringify(this.liked));
        }, 300);
      });
    },
    //ajoute des élements dans le panier
    addToCart(product) {
      //check si c'est déjà dans le tableau (éviter les doublons dans le panier)
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1,
      });
    },
    //ajouteune quantité de +1 dans le panier à un élément (+)
    cartPlusOne(product) {
      product.quantity = product.quantity + 1;
    },
    //diminue une quantité de -1 dans le panier à un élément (-)
    cartMinusOne(product, id) {
      if (product.quantity == 1) {
        //si il n'y a qu'un élément dans quantity, alors on le supprime du panier
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    //supprime un élément du panier (poubelle)
    cartRemoveItem(id) {
      this.cart.splice(id, 1);
    },
  },
  //mounted permet de monter les composants : à chaque lancement de page il va lancer getLikeCookie
  mounted: () => {
    this.getLikeCookie;
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
