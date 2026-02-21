import drakonchik from "../assets/paintings/drakonchik.jpg";
import zhiznPrekrasna from "../assets/paintings/zhizn-prekrasna.jpg";
import italyBreakfast from "../assets/paintings/italy-breakfast.jpg";
import kapuchino from "../assets/paintings/kapuchino.jpg";
import piknik from "../assets/paintings/piknik.jpg";
import portnoy from "../assets/paintings/portnoy.jpg";
import romashki from "../assets/paintings/romashki.jpg";
import ryzhevolosaya from "../assets/paintings/ryzhevolosaya.jpg";

import holodnoeKofe from "../assets/paintings/holodnoe-kofe.JPG";
import krasnieKrishi from "../assets/paintings/krasnie-krishi.JPG";
import naTerrase from "../assets/paintings/na-terrase.JPG";
import nosochki from "../assets/paintings/nosochki.JPG";
import peredViborom from "../assets/paintings/pered-viborom.JPG";
import priznanie from "../assets/paintings/priznanie.JPG";
import taMuzika from "../assets/paintings/ta-muzika.JPG";
import vTeniOlivkovichDerevev from "../assets/paintings/v-teni-olivkovich-derevev.JPG";
import belaialoshadka from "../assets/paintings/belaialoshadka.jpg";
import drozd from "../assets/paintings/drozd.jpg";
import gorodnavode from "../assets/paintings/gorodnavode.png";
import koversamolet from "../assets/paintings/koversamolet.jpg";
import loshadka from "../assets/paintings/loshadka.jpg";
import narzissi from "../assets/paintings/narzissi.jpg";
import natiurmort01 from "../assets/paintings/natiurmort01.jpg";
import natiurmortsnastroeniem from "../assets/paintings/natiurmortsnastroeniem.jpg";
import natiurmortsrakushkami from "../assets/paintings/natiurmortsrakushkami.jpg";
import natiurmortszvetkomvgorshke from "../assets/paintings/natiurmortszvetkomvgorshke.jpg";
import seriinatiurmort from "../assets/paintings/seriinatiurmort.jpg";
import skazochniigorod from "../assets/paintings/skazochniigorod.jpg";
import visokiidom from "../assets/paintings/visokiidom.jpg";
import zveti from "../assets/paintings/zveti.jpg";

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
    imageUrl: holodnoeKofe,
  },
  {
    id: "krasnie-krishi",
    categoryId: "landscape",
    title: "Красные крыши",
    size: "80Х90см",
    imageUrl: krasnieKrishi,
  },
  {
    id: "na-terrase",
    categoryId: "figurative",
    title: "На террасе",
    size: "110Х60см",
    imageUrl: naTerrase,
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
    imageUrl: peredViborom,
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
    imageUrl: taMuzika,
  },
  {
    id: "v-teni-olivkovich-derevev",
    categoryId: "figurative",
    title: "В тени оливковых деревьев",
    size: "60Х80см",
    imageUrl: vTeniOlivkovichDerevev,
  },
  {
  id: "belaialoshadka",
  categoryId: "stilllife",
  title: "Белая лошадка",
  size: "50Х90см",
  imageUrl: belaialoshadka,
},
{
  id: "drozd",
  categoryId: "stilllife",
  title: "Дрозд",
  size: "100Х120см",
  imageUrl: drozd,
},
{
  id: "gorodnavode",
  categoryId: "landscape",
  title: "Город на воде",
  size: "40Х60см",
  imageUrl: gorodnavode,
},
{
  id: "koversamolet",
  categoryId: "stilllife",
  title: "Ковёр-самолёт",
  size: "80Х150см",
  imageUrl: koversamolet,
},
{
  id: "loshadka",
  categoryId: "stilllife",
  title: "Лошадка",
  size: "60Х80см",
  imageUrl: loshadka,
},
{
  id: "narzissi",
  categoryId: "stilllife",
  title: "Нарциссы",
  size: "30Х40см",
  imageUrl: narzissi,
},
{
  id: "natiurmort01",
  categoryId: "stilllife",
  title: "Натюрморт 01",
  size: "85Х90см",
  imageUrl: natiurmort01,
},
{
  id: "natiurmortsnastroeniem",
  categoryId: "stilllife",
  title: "Натюрморт с настроением",
  size: "40Х50см",
  imageUrl: natiurmortsnastroeniem,
},
{
  id: "natiurmortsrakushkami",
  categoryId: "stilllife",
  title: "Натюрморт с ракушками",
  size: "50Х60см—",
  imageUrl: natiurmortsrakushkami,
},
{
  id: "natiurmortszvetkomvgorshke",
  categoryId: "stilllife",
  title: "Натюрморт с цветком в горшке",
  size: "40Х60см",
  imageUrl: natiurmortszvetkomvgorshke,
},
{
  id: "seriinatiurmort",
  categoryId: "stilllife",
  title: "Серый натюрморт",
  size: "60Х80см",
  imageUrl: seriinatiurmort,
},
{
  id: "skazochniigorod",
  categoryId: "landscape",
  title: "Сказочный город",
  size: "90Х80см",
  imageUrl: skazochniigorod,
},
{
  id: "visokiidom",
  categoryId: "landscape",
  title: "Высокий дом",
  size: "60Х30см",
  imageUrl: visokiidom,
},
{
  id: "zveti",
  categoryId: "stilllife",
  title: "Цветы",
  size: "30Х30см",
  imageUrl: zveti,
},

  // Пейзаж (если пока нет — оставим пусто; потом добавишь)
  // пример:
  // { id:"...", categoryId:"landscape", title:"...", size:"...", imageUrl: someImage }
];