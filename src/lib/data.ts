import { Home, Info, Phone, ShoppingBag } from "lucide-svelte";

export let BRAND_NAME = "Kojie San.";
export let BRAND_DESCRIPTION =
  "Votre partenaire de beauté, de style et de luxe.";

export let navigation = [
    {
      "name": "Accueil",
      "href": "/",
      "id": "home",
      icon: Home
    },
    {
      "name": "Produits",
      "href": "/#",
      "id": "products",
      icon: ShoppingBag
    },
    {
      "name": "À propos",
      "href": "/#",
      "id": "about",
      icon: Info
    },
    {
      "name": "Contact",
      "href": "/#",
      "id": "contact",
      icon: Phone
    }
  ]
