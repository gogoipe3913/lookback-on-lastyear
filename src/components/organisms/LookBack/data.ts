import { LookBackItemDataProps } from ".";

const SORT_ITEM_NAME = {
  ALL: "All",
  MONTH: "Month",
  LIFE: "LIFE",
  EVENT: "Event",
};

const lookBackSortItems = [
  {
    name: SORT_ITEM_NAME.ALL,
  },
  {
    name: SORT_ITEM_NAME.MONTH,
  },
  {
    name: SORT_ITEM_NAME.LIFE,
  },
  {
    name: SORT_ITEM_NAME.EVENT,
  },
];

const lookBackItems: LookBackItemDataProps[] = [
  {
    title: "HOTEL LIFE + KYOTO",
    month: "February",
    slug: "kyoto-life",
    url: "/images/inKyotoLife.png",
    alt: "IN KYOTO LIFEのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "BECOME DESIGN ENGINEER",
    month: "April",
    slug: "design-engineer",
    url: "/images/becomeDesignEngineer.png",
    alt: "BECOME DESIGN ENGINEERのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "NEW LIFE IN TOKYO",
    month: "June",
    slug: "new-life",
    url: "/images/newLifeTokyo.png",
    alt: "NEW LIFE IN TOKYOのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "MIDORI WO WATARU OTO",
    month: "June",
    slug: "midori",
    url: "/images/midoriWoWataruOto.png",
    alt: "MIDORI WO WATARU OTOのサムネイル画像",
    isLife: false,
    isEvent: true,
  },
  {
    title: "ACID COFFEE TOKYO",
    month: "July",
    slug: "acid-coffee-tokyo",
    url: "/images/barista.png",
    alt: "ACID COFFEE TOKYOのサムネイル画像",
    isLife: false,
    isEvent: true,
  },
  {
    title: "FIRST VISITING TO KYUSHU",
    month: "September",
    slug: "first-visiting",
    url: "/images/firstVisitingToKumamoto.png",
    alt: "FIRST VISITING TO KYUSHUのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "HISTORICAL SCIENCE",
    month: "October",
    slug: "historical-science",
    url: "/images/historicalScience.png",
    alt: "HISTORICAL SCIENCEのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
  {
    title: "LOOK BACK SUMMARY",
    month: "December",
    slug: "look-back-summary",
    url: "/images/lookBackSummary.png",
    alt: "LOOK BACK SUMMARYのサムネイル画像",
    isLife: true,
    isEvent: false,
  },
];

export { lookBackSortItems, lookBackItems, SORT_ITEM_NAME };
