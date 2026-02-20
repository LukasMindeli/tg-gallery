import drakonchik from "../assets/paintings/drakonchik.jpg";
import zhiznPrekrasna from "../assets/paintings/zhizn-prekrasna.jpg";
import italyBreakfast from "../assets/paintings/italy-breakfast.jpg";
import kapuchino from "../assets/paintings/kapuchino.jpg";
import piknik from "../assets/paintings/piknik.jpg";
import portnoy from "../assets/paintings/portnoy.jpg";
import romashki from "../assets/paintings/romashki.jpg";
import ryzhevolosaya from "../assets/paintings/ryzhevolosaya.jpg";

export const categories = [
  { id: "figurative", title: "Фигуратив" },
  { id: "landscape", title: "Пейзаж" },
  { id: "stilllife", title: "Натюрморт" },
];

export const paintings = [
  // Фигуратив (пример распределения — потом поменяешь как хочешь)
  {
    id: "drakonchik",
    categoryId: "figurative",
    title: "Дракончик",
    size: "80Х60см", // впишешь вручную
    imageUrl: drakonchik,
  },
  {
    id: "zhizn-prekrasna",
    categoryId: "figurative",
    title: "Жизнь прекрасна",
    size: "100Х120см",
    imageUrl: zhiznPrekrasna,
  },
  {
    id: "piknik",
    categoryId: "figurative",
    title: "Пикник",
    size: "100Х120см",
    imageUrl: piknik,
  },
  {
    id: "portnoy",
    categoryId: "figurative",
    title: "Портной",
    size: "80Х60см",
    imageUrl: portnoy,
  },
  {
    id: "ryzhevolosaya",
    categoryId: "figurative",
    title: "Рыжеволосая",
    size: "90Х80см",
    imageUrl: ryzhevolosaya,
  },

  // Натюрморт
  {
    id: "kapuchino",
    categoryId: "figurative",
    title: "Капучино",
    size: "80Х60см",
    imageUrl: kapuchino,
  },
  {
    id: "romashki",
    categoryId: "figurative",
    title: "Ромашки",
    size: "85Х90см",
    imageUrl: romashki,
  },
  {
    id: "italy-breakfast",
    categoryId: "figurative",
    title: "Итальянский завтрак",
    size: "80Х100см",
    imageUrl: italyBreakfast,
  },

  // Пейзаж (если пока нет — оставим пусто; потом добавишь)
  // пример:
  // { id:"...", categoryId:"landscape", title:"...", size:"...", imageUrl: someImage }
];