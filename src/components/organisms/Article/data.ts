import mainImage1 from "/images/articles/1/test_article_main.png";
import imageFigure1 from "/images/articles/1/imageFigures/imageFigure_1.png";
import imageFigure2 from "/images/articles/1/imageFigures/imageFigure2.png";
import imageFigure3 from "/images/articles/1/imageFigures/imageFigure3.png";

export enum ARTICLE_TYPE {
  ONE = "one",
  TWO = "two",
  THREE = "three",
}

type ImageInterface = {
  url: string;
  alt: string;
};

type ArticleInterface = {
  title: string;
  month: string;
  date: string;
  mainImage: ImageInterface;
  text: string;
  textEnglish: string;
  tag: string;
  imageFigures: ImageInterface[];
};

type ArticlesInterface = {
  [key in ARTICLE_TYPE]: ArticleInterface;
};

export const Articles: ArticlesInterface = {
  [ARTICLE_TYPE.ONE]: {
    title: "IN KYOTO LIFE",
    month: "February",
    date: "2022.02.01",
    mainImage: {
      url: mainImage1,
      alt: "記事1のメイン画像",
    },
    text: `2022年は勢いを持ち越し、住んでいた富小路三条下ルにあるホテルで新年を迎えた。つまりホームレスとして一年が始まった。なぜホテルに住んでいたかは割愛しよう。
    京都の新年はそれまでとは違い、どの神社に初詣に行こうか、選り取り緑な雰囲気で満ちていた。縁も様々、酸いも甘いも想い出があり、選ばれたのは下鴨神社であった。
    
    さて、振り返るとホテル暮らし生活も長くなり、1年以上このスタイルで生活をしていた。賃貸に住むのとは違って、気軽に住む場所を変えられるというのは二十数年間の人生でもかなり前衛的な試みになった。東京に暮らしていたら出会えなかった人間との出会いを考えると感慨深い。地元の人々、コーヒー屋、KYOTO GRAPHIE、蒸留士、バーテンダー、学生、パン屋、ギャラリーの人たち、怪しげな芸術家等、さまざまである。京都には、好きなことを生業にしている面白可笑しい人たちが多いように思えた。そのおかげもあってか、商店街に活気があって、個人店が乱立し、大きな複合施設みたいなものはあまり見られない。それが心地よかった。たまに現れる複合施設も、その背景の中で新鮮味を醸し出していた。出会った人々はしきりに、「京都は田舎だからね」と言ったが、田舎では済まない何かが京都にはあるなと思った。
    
    一番大きく価値観が変わったのは、根無草としてではなく京都のどこかに定住するのも良い。と思えたところであった。それは京都で出会った人たちが、自分を快く迎え入れてくれたところに起因するだろう。きっとこの先ホテル暮らしを辞めたとして、京都に訪れる時は行くではなく帰るになるだろうな、と。`,
    textEnglish: `In 2022, I carried the momentum forward and welcomed the new year in a hotel located on Tominokoji-Sanjo-Sagaru where I had been residing. In other words, the year began with me living as a homeless individual. Let's skip the details of why I was living in a hotel.

      New Year in Kyoto was different from before, with an atmosphere filled with choices of which shrine to visit for the first prayers. There were various connections, both bitter and sweet memories, and the chosen shrine was Shimogamo Shrine.
      
      Now, looking back, my life in a hotel had become quite extended, and I had been living in this style for over a year. Unlike living in a regular rental, the ability to easily change one's place of residence became a rather avant-garde experiment in my life of over twenty years. Reflecting on the encounters with people I wouldn't have met if I had been living in Tokyo, it's quite moving. The local people, coffee shop owners, KYOTO GRAPHIE staff, distillers, bartenders, students, bakers, gallery people, and even enigmatic artists – there was a diverse array of individuals. It seemed that Kyoto had many interesting and eccentric people pursuing their passions. Thanks to this, there was vibrancy in the shopping streets, with numerous small individual shops, and you wouldn't find many large complex facilities. It was quite pleasant. Even the occasional appearance of such complexes added a touch of freshness to the backdrop. People I met frequently said, "Kyoto is a countryside," but I thought that there was something in Kyoto that transcended the typical rural experience.
      
      The most significant shift in my perspective was the realization that it would be a good idea to settle somewhere in Kyoto, not just as a transient. This probably stems from the fact that the people I met in Kyoto warmly welcomed me. I'm sure that if I ever decide to leave the hotel lifestyle in the future, when I visit Kyoto, it will feel like returning rather than just going there.`,
    tag: "NEW",
    imageFigures: [
      { url: imageFigure1, alt: "" },
      { url: imageFigure2, alt: "" },
      { url: imageFigure3, alt: "" },
    ],
  },
  [ARTICLE_TYPE.TWO]: {
    title: "BECOME A DESIGN ENGINEER",
    month: "April",
    date: "2022.04.01",
    mainImage: {
      url: "",
      alt: "",
    },
    text: `4月になって、会社員歴も3年になった。会社員らしからぬ暮らしぶりに驚く者もいよう、私だってそうである。職種が変わり、デザインエンジニアという名誉ありそうな奴隷のような役回りになった。デザインもエンジニアリングもするポジションである。
    尊敬するtakramという会社の田川欣哉氏がデザインエンジニアという仕事を語る記事を読んだのを覚えている。多分10年前くらいの記事だったと思う。
    この時は、「デザインもエンジニアリングもする」というよりは目的があってそのために必要なことをこなす人、みたいな形だろう…と解釈した。webの会社なのでwebだけを作っているが、web以外のことにもデザインエンジニア的に取り組みたいという気持ちのブーストをする機会だった。実際は「デザインもエンジニアリングもする」人になっていた。目的を見失わないように気をつけたい。
    ‘21年から始めた個人事業ではそこそこ色んなデザインやモノづくりができているので、会社とプライベートを完全に分断しないような生き方ができればいいと感じた。会社の経験はその外に活かして、外の経験は会社で活きる、みたいな形が理想である。実際には、あっちにこっちにてんやわんやだった。`,
    textEnglish: `In April, I reached three years in my career as a corporate employee. Some people might be surprised by the unconventional way I live my life as a corporate worker, and I'm no exception. My role has changed, and I've taken on the role of a design engineer, which sounds quite honorable but can feel somewhat like a slave. This position involves both design and engineering.

      I remember reading an article about the job of a design engineer, given by Mr. Kin-ya Tagawa, who I greatly respect and who works at the company "takram." This was probably about ten years ago. At that time, I interpreted the role as someone who works toward a specific goal and does whatever is necessary to achieve it, rather than simply "doing both design and engineering." Since our company is web-based, we primarily create things for the web. However, this was an opportunity to boost my desire to approach things from a design engineering perspective beyond the web. In reality, I became someone who does both design and engineering. I want to make sure I don't lose sight of the purpose.
      
      In my personal business, which I started in 2021, I've been able to engage in various design and creative projects. I hope to live a life where I can seamlessly integrate my work and personal life, leveraging the experiences from one side to enhance the other. Ideally, my experiences in the corporate world should benefit my personal ventures, and my external experiences should enrich my corporate role. In practice, it's been a bit chaotic, trying to juggle both sides.`,
    tag: "NEW",
    imageFigures: [{ url: "", alt: "" }],
  },
  [ARTICLE_TYPE.THREE]: {
    title: "IN KYOTO LIFE",
    month: "February",
    date: "2022.02.01",
    mainImage: {
      url: "",
      alt: "",
    },
    text: "この場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り2023年は何をするか、どうなりたいか一年の区切りを使って自分を知ってもらうために制作しましたこの場所は、自分の2022を振り返り20...",
    textEnglish:
      "I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.I designed this website for self produce with my life through last year. I'll look back 2022 and consider what I do in 2023 from here.",
    tag: "NEW",
    imageFigures: [{ url: "", alt: "" }],
  },
};
