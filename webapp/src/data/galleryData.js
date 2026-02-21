import drakonchik from "../assets/paintings/drakonchik.jpg";
import zhiznPrekrasna from "../assets/paintings/zhizn-prekrasna.jpg";
import italyBreakfast from "../assets/paintings/italy-breakfast.jpg";
import kapuchino from "../assets/paintings/kapuchino.jpg";
import piknik from "../assets/paintings/piknik.jpg";
import portnoy from "../assets/paintings/portnoy.jpg";
import romashki from "../assets/paintings/romashki.jpg";
import ryzhevolosaya from "../assets/paintings/ryzhevolosaya.jpg";
import ryzhevolosaya from "../assets/paintings/holodnoe-kofe.JPG";
import ryzhevolosaya from "../assets/paintings/krasnie-krishi.JPG";
import ryzhevolosaya from "../assets/paintings/na-terrase.JPG";
import ryzhevolosaya from "../assets/paintings/nosochki.JPG";
import ryzhevolosaya from "../assets/paintings/pered-viborom.JPG";
import ryzhevolosaya from "../assets/paintings/priznanie.JPG";
import ryzhevolosaya from "../assets/paintings/ta-muzika.JPG";
import ryzhevolosaya from "../assets/paintings/v-teni-olivkovich-derevev.JPG";

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
  {
    id: "holodnoe-kofe",
    categoryId: "figurative",
    title: "Холодное кофе",
    size: "80Х60см",
    imageUrl: holodnoe-kofe,
  },
  {
    id: "krasnie-krishi",
    categoryId: "landscape",
    title: "Красные крыши",
    size: "80Х90см",
    imageUrl: krasnie-krishi,
  },
  {
    id: "na-terrase",
    categoryId: "figurative",
    title: "На террасе",
    size: "110Х60см",
    imageUrl: na-terrase,
  },
  {
    id: "nosochki",
    categoryId: "figurative",
    title: "Носочки",
    size: "80Х90см",
    imageUrl: nosochki,
  },
  {
    id: "pered-viborom",
    categoryId: "figurative",
    title: "Перед выбором",
    size: "90Х85см",
    imageUrl: pered-viborom,
  },
  {
    id: "priznanie",
    categoryId: "figurative",
    title: "Признание",
    size: "80Х100см",
    imageUrl: priznanie,
  },
  {
    id: "ta-muzika",
    categoryId: "figurative",
    title: "Та музыка",
    size: "100Х80см",
    imageUrl: ta-muzika,
  },
  {
    id: "v-teni-olivkovich-derevev",
    categoryId: "figurative",
    title: "В тени оливковых деревьев",
    size: "60Х80см",
    imageUrl: v-teni-olivkovich-derevev,
  },

  // Пейзаж (если пока нет — оставим пусто; потом добавишь)
  // пример:
  // { id:"...", categoryId:"landscape", title:"...", size:"...", imageUrl: someImage }
];