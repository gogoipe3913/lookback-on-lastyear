import mainImage1 from "/images/articles/1/test_article_main.png";
import imageFigure1 from "/images/articles/1/imageFigures/imageFigure_1.png";
import imageFigure2 from "/images/articles/1/imageFigures/imageFigure2.png";
import imageFigure3 from "/images/articles/1/imageFigures/imageFigure3.png";

export enum ARTICLE_TYPE {
  KYOTO_LIFE = "kyoto-life",
  DESIGN_ENGINEER = "design-engineer",
  NEW_LIFE = "new-life",
  MIDORI = "midori",
  ACID_COFFEE_TOKYO = "acid-coffee-tokyo",
  FIRST_VISITING = "first-visiting",
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
  [ARTICLE_TYPE.KYOTO_LIFE]: {
    title: "HOTEL LIFE + KYOTO",
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
    tag: "LIFE",
    imageFigures: [
      { url: imageFigure1, alt: "" },
      { url: imageFigure2, alt: "" },
      { url: imageFigure3, alt: "" },
    ],
  },
  [ARTICLE_TYPE.DESIGN_ENGINEER]: {
    title: "BECOME A DESIGN ENGINEER",
    month: "April",
    date: "2022.04.01",
    mainImage: {
      url: "",
      alt: "",
    },
    text: `4月になって、会社員歴も3年になった。会社員らしからぬ暮らしぶりに驚く者もいよう、私だってそうである。職種が変わり、デザインエンジニアという名誉ありそうな、一方で奴隷のような役回りになった。デザインもエンジニアリングもするポジションである。
    尊敬するtakramという会社の田川欣哉氏がデザインエンジニアという仕事を語る記事を読んだのを覚えている。多分10年前くらいの記事だったと思う。
    この時は、「デザインもエンジニアリングもする」というよりは目的があってそのために必要なことをこなす人、みたいな形だろう…と解釈した。webの会社なのでwebだけを作っているが、web以外のことにもデザインエンジニア的に取り組みたいという気持ちのブーストをする機会だった。実際は「デザインもエンジニアリングもする」人になっていた。目的を見失わないように気をつけたい。
    ‘21年から始めた個人事業ではそこそこ色んなデザインやモノづくりができているので、会社とプライベートを完全に分断しないような生き方ができればいいと感じた。会社の経験はその外に活かして、外の経験は会社で活きる、みたいな形が理想である。実際には、あっちにこっちにてんやわんやだった。`,
    textEnglish: `In April, I reached three years in my career as a corporate employee. Some people might be surprised by the unconventional way I live my life as a corporate worker, and I'm no exception. My role has changed, and I've taken on the role of a design engineer, which sounds quite honorable but can feel somewhat like a slave. This position involves both design and engineering.

      I remember reading an article about the job of a design engineer, given by Mr. Kin-ya Tagawa, who I greatly respect and who works at the company "takram." This was probably about ten years ago. At that time, I interpreted the role as someone who works toward a specific goal and does whatever is necessary to achieve it, rather than simply "doing both design and engineering." Since our company is web-based, we primarily create things for the web. However, this was an opportunity to boost my desire to approach things from a design engineering perspective beyond the web. In reality, I became someone who does both design and engineering. I want to make sure I don't lose sight of the purpose.
      
      In my personal business, which I started in 2021, I've been able to engage in various design and creative projects. I hope to live a life where I can seamlessly integrate my work and personal life, leveraging the experiences from one side to enhance the other. Ideally, my experiences in the corporate world should benefit my personal ventures, and my external experiences should enrich my corporate role. In practice, it's been a bit chaotic, trying to juggle both sides.`,
    tag: "NEW",
    imageFigures: [{ url: "", alt: "" }],
  },
  [ARTICLE_TYPE.NEW_LIFE]: {
    title: "NEW LIFE IN TOKYO",
    month: "June",
    date: "2022.06.05",
    mainImage: {
      url: "",
      alt: "",
    },
    text: `1年半ほど続けたホテル暮らしは6月で幕とした。京都から離れるときは10年前の上京したてのような寂しさがあり、京都に対しては故郷のような気持ちが生まれていた。きっとまたいつか帰るであろう。友人たちとは離れるが、その心許なさはSNSのありがたみを心底思い知ることで幾らか解消した。
    久々に東京定住、憧れた谷尻建築の賃貸を借りて自分だけしか居ない家での生活が始まった。三軒茶屋という東京の中でもかなりの未体験ゾーンは、新生活には相応しい期待感を演出してくれたのであった。朝から晩まで通して誰にも会わないという生活に、もの哀しさと新鮮味を感じつつ本を読む、デザインツールを弄る、プログラムを書く等、一人でないと到達しないであろう集中の時間を、とにかく量産した。そのうち一人が寂しくなる気もしていたが、孤独の時間を守ることは現代では輪をかけて難しいので、このあと数ヶ月はこの心地よい時間をひっそり過ごした。
    
    自分の部屋なので当たり前だが、家具も自分で揃える。これが意外と面白く、ミニマルなデザインのものを探して回った。出会ったモノの一つにGUBIという会社のPedreraというローテーブルがあり、シームレスな脚ベースと有機的な形のガラス天板というミニマルモダンな造形に心を燃やす。これまでプロダクトデザインはなんとなくで見てきたが、深掘りしていくとそこには大きな沼が待ち構えていそうで、これもまた人生を面白くしていきそうな予感がした。`,
    textEnglish: `I ended my one-and-a-half-year hotel stay in June. When leaving Kyoto, I felt a sense of loneliness similar to when I first moved to this city a decade ago. Kyoto had become like a hometown to me. I'm sure I'll return someday. Although I had to leave behind friends, I found some solace in the value of social media to stay connected.

      Returning to Tokyo after a long time, I started living in a rental space designed by the renowned architect Tadao Ando. Having a place to myself was a significant change. Three Mita, a neighborhood in Tokyo I hadn't experienced before, added a sense of anticipation to this new chapter in my life. Living a life where I didn't encounter anyone from morning till night brought both a sense of melancholy and freshness. During this time, I read books, tinkered with design tools, wrote code, and dedicated extended periods of solitary concentration that are hard to achieve in a crowd. I thought I might start feeling lonely at some point, but preserving moments of solitude is exceedingly challenging in the modern world. So, I quietly enjoyed this time for a few months.
      
      Since it's my own space, I had to furnish it myself. Surprisingly, this turned out to be quite interesting. I explored minimalistic product designs and came across a low table from a company called GUBI, called "Pedrera." Its seamless leg base and organic-shaped glass tabletop captivated me with its minimalistic modern design. I've casually observed product design in the past, but delving deeper into it, I have a hunch that there might be a vast world to explore, making life even more interesting.`,
    tag: "LIFE",
    imageFigures: [{ url: "", alt: "" }],
  },
  [ARTICLE_TYPE.MIDORI]: {
    title: "MIDORI WO WATARU OTO",
    month: "June",
    date: "2022.06.22",
    mainImage: {
      url: "",
      alt: "",
    },
    text: `京都で出会った男「硲 真人」は、先の京都生活を語る上で欠かせない男である。そもそもの出会いには全くコンテクストはなく偶然の巡り合わせだったが、おそらく人生レベルの関わりになるであろう気の合い方だった。大学を数ヶ月で辞めコーヒーを生業にし、ドラムを叩き、さまざまなものを蒸留し、自由に生きている。
    その彼の実家は福井にあり、watotoという名前の古民家カフェである。ということを、旅の音という北白川にある珈琲焙煎所で出会った梶本良司という男から聞いた。真人くんの父である。苗字は違うが。
    
    良司さんもまたおもしろ人間で、フリーランスのお坊さんと聞いた。当初は意味がわからなかったが、枠の外的挙動で面白い。その際に、watotoがオーガナイズする「みどりを渡る音」というイベントでコーヒーを淹れないか？と誘いを受け、そのまま話が進み福井県は小浜市へ。3人組音楽家「みどり」の演奏の横でコーヒーを淹れるというありがたい経験をした。
    兼ねてからみどりのメンバー田辺玄さんのアルバムを聴いていた自分は感動、その後もwatotoで食卓を囲んだ。
    
    偶然の出会いからwatoto、ひいては田辺玄さんというところまで、想像を遥かに超えていく出会いが溢れていた。人生には二つ返事で引き受けるということも、重要な瞬間がありそうである。
    おもしろきことは良きことなり。`,
    textEnglish: `The man I met in Kyoto, Mahito Hazama is an indispensable figure when it comes to talking about my time in Kyoto. Our initial meeting had no particular context; it was a chance encounter. However, it seemed that we instantly connected on a life-altering level. He left university after a few months to pursue a career in coffee, played the drums, distilled various things, and lived freely.

    His family home is in Fukui, and it's a traditional house cafe called "Watoto." I learned this from a man named Ryoji Kajimoto, whom I met at "Tabi-no-Ne," a coffee roastery in Kitashirakawa. He is Mahito's father, though they have different last names.
    
    Mr.Kajimoto is an interesting character too, and I heard he's a freelance monk. I didn't understand what that meant at first, but his unconventional behavior was fascinating. During that time, he invited me to brew coffee at an event organized by Watoto called "Midori wo Wataru Oto" (Sounds Crossing Over Green), and that led to a journey to Obama City in Fukui. I had the privilege of brewing coffee beside a performance by the trio of musicians known as "Midori."
    
    I had been listening to Midori member Gen Tanabe's album for some time, and I was deeply moved. Afterward, I continued to share meals at Watoto.
    
    From a chance encounter to Watoto, and even to Gen Tanabe, my life was filled with unexpected connections that far exceeded my imagination. Sometimes, accepting opportunities with an open heart can lead to important moments in life. Indeed, interesting things can also be good things.`,
    tag: "EVENT",
    imageFigures: [{ url: "", alt: "" }],
  },
  [ARTICLE_TYPE.ACID_COFFEE_TOKYO]: {
    title: "ACID COFFEE TOKYO",
    month: "July",
    date: "2022.07.15",
    mainImage: {
      url: "",
      alt: "",
    },
    text: ``,
    textEnglish: ``,
    tag: "NEW",
    imageFigures: [{ url: "", alt: "" }],
  },
  [ARTICLE_TYPE.FIRST_VISITING]: {
    title: "FIRST VISITING TO KYUSHU",
    month: "September",
    date: "2022.09.13",
    mainImage: {
      url: "",
      alt: "",
    },
    text: ``,
    textEnglish: ``,
    tag: "LIFE",
    imageFigures: [{ url: "", alt: "" }],
  },
};
