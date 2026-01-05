
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Senshi 11-4 JY",
  "Y1w Kokuchozan 5-7",
  "O1e Inazaru 10-5",
  "S1e Shitayama 7-8",
  "S1w Kaeruwani 5-10",
  "K1e Enkaga 7-8",
  "K1w Kaitetsu 5-10 R",
  "M1e Genbu 10-5",
  "M1w Tamanosato 3-12",
  "M2e Suzukafuji 6-9",
  "M2w Akekitsu 10-5",
  "M3e Chiyonouchi 8-7",
  "M3w Nekonoyama 10-5",
  "M4e Tentoryu 9-6 T",
  "M4w Shihojo 9-6 O",
  "M5e Otoriyama 6-9",
  "M5w Bunbukuchagama 10-5",
  "M6e Raimei 7-8",
  "M6w Kokucho 8-7",
  "M7e Midorisetchi 7-8",
  "M7w Miyanoyama 12-3 YFT",
  "M8e Wakashaka 7-8",
  "M8w Daisashoryu 6-9",
  "M9e Takado 7-8",
  "M9w Marumoru 5-10",
  "M10e Nagashima 0-0 R",
  "M10w Akaitenzan 7-8",
  "M11e Shinkoizumi 6-9",
  "M11w Otaiho 9-6",
  "M12e Takashoji 9-6",
  "M12w Terukaze 9-6",
  "M13e Gonenodeda 7-8",
  "M13w Hikarinowaka 5-10",
  "M14e Nishikimori 8-7",
  "M14w Kaga 8-7",
  "M15e Rikioi 8-7",
  "M15w Kanikama 7-8",
  "M16e Hikozaru Kyujo",
  "M16w Takaryu 6-9",
  "M17e Kuroneko 8-7",
  "M17w Kitashoritsu 7-8",
  "M18e Takaitsu 9-6",
  "J1e Akakuma 8-7",
  "J1w Maizuru 11-4",
  "J2e Etomi 9-6",
  "J2w Aoiyamayama 8-7",
  "J3e Kenkaiwani Kyujo",
  "J3w Shirobara 10-5",
  "J4e Mezunofuji 4-11",
  "J4w Kumamidori 8-7",
  "J5e Yukishoryu 8-7",
  "J5w Chubamidori 7-8",
  "J6e Kusawara 6-9",
  "J6w Tenho 11-4",
  "J7e Gokujira 5-10",
  "J7w Haregeto 10-5",
  "J8e Toryuken 5-10",
  "J8w Mazoku 9-6",
  "J9e Namakemonomaru 9-6",
  "J9w Yamaarashi 12-3",
  "J10e Kunousagi 8-7",
  "J10w Ookimizu 8-7",
  "J11e Kotowazasato 10-5",
  "J11w Tenshi Kyujo",
  "J12e Yamakuma 4-11",
  "J12w Chiyotasuke 13-2 Y",
  "J13e Hitouki 7-8",
  "J13w Shoho 7-8",
  "J14e Toyonoryu 7-8",
  "J14w Kitanoishi 6-9",
  "Ms1e Kuzushirisu 8-7",
  "Ms1w Ryukaze 9-6",
  "Ms2e Wakakotofuji 8-7 R",
  "Ms2w Koumitsu 6-9",
  "Ms3e Etsunotora 10-5",
  "Ms3w Kiriwaffuru 10-5",
  "Ms4e Jurukaze 5-10",
  "Ms4w Jurumoto 5-10",
  "Ms5e Enkaze 8-7",
  "Ms5w Hakunotora 12-3 Y",
  "Ms6e Kazahyuto 10-5",
  "Ms6w Reijingukuriku 8-7",
  "Ms7e Daikeisho 5-10",
  "Ms7w Chousanrishi 7-8",
  "Ms8e Asanotora 7-8",
  "Ms8w Purookami 9-6",
  "Ms9e Arashikage 8-7",
  "Ms9w Tsugiryu 9-6",
  "Ms10e Akumazan 10-5",
  "Ms10w Abounogaku 8-7",
  "Ms11e Ittomaro 7-8",
  "Ms11w Higawa 9-6",
  "Ms12e Chibiyamayama 11-4",
  "Ms12w Daimausanezumi 7-8",
  "Ms13e Numa 12-3",
  "Ms13w Aisukurimu 11-4",
  "Ms14e Gerinoumi 0-0 R",
  "Ms14w Shirayaminosora 10-5",
  "Ms15e Matsumidori 9-6",
  "Ms15w Suiga 5-10",
  "Ms16e Yukinoshoma 7-8",
  "Ms16w Ishikai 0-0 R",
  "Ms17e Jinan Kyujo",
  "Ms17w Takokuro 8-7",
  "Ms18e Shiosei 4-11",
  "Ms18w Razeko 8-7",
  "Ms19e Fubukiryu 10-5",
  "Ms19w Kudamono 9-6",
  "Ms20e Kogumanami 5-10",
  "Ms20w Shoyama 7-8",
  "Ms21e Rizutenshu 11-4",
  "Ms21w Isshuntaro 5-10",
  "Ms22e Yoshisuzu 8-7",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Ishikai",
  "Nagashima",
  "Kaitetsu",
  "Wakakotofuji",
  "Gerinoumi"
];

/*
Use the code below to get the IDs from SumoDB with "no rank colouring" checked
Later on I will extend this to grab the rikishi strings as well

document.head.appendChild(Object.assign(
    document.createElement('script'),
    { src: 'https://code.jquery.com/jquery-3.6.4.min.js' }
));

var shikona = $(".banzuke").find(".shikona").has("a")
var ids = []
shikona.each(function(i) {
    if ($(this).prev().text().startsWith("Sd"))
        return false;
    else if ($(this).prev().text().startsWith("Ms") && parseInt($(this).prev().text().slice(2)) > 15 && parseInt($(this).next().text().charAt(0)) < 4)
        return;
    ids.push(parseInt($(this).children().first().attr("href").slice(15)))
}) 
*/
var sekitoriID = [
];

class Rikishi {
  constructor(rank, name, winCount, id) {
    this.rank = rank;
    this.name = name;
    this.winCount = winCount;
    this.id = id;
  }

  getLink() {
    return `<span href="https://sumodb.sumogames.de/Rikishi.aspx?r=${this.id}" target="_blank">${this.name}</span>`;
  }

  getRecordLink(basho) {
    return `<span href="https://sumodb.sumogames.de/Rikishi_basho.aspx?r=${this.id}&b=${basho}" target="_blank">${this.winCount}</span>`;
  }

  createCard(basho) {
    const card = document.createElement("div");
    const wins = this.winCount.split("-")[0];
    card.id = this.rank;
    card.className = "redips-drag se";
    card.setAttribute("data-w", wins);
    card.setAttribute("data-re", this.winCount);
    card.innerHTML = this.getLink(basho);
    return card;
  }
}

export class RetiredRikishi extends Rikishi {
  constructor(rank, name, winCount, id) {
    super(rank, name, winCount, id);
  }

  createCard(basho) {
    const card = super.createCard(basho);
    card.style.backgroundColor = "rgb(203, 203, 203)";
    card.className = "redips-drag intai";
    card.setAttribute("title", "Retired");
    return card;
  }
}

export const allRikishi = theSekitori.map((rikishiString, index) => {
  var [rank, name, winCount] = rikishiString.split(' ');
  if (rikishiString.split(' ')[3]) 
    winCount += ' ' + rikishiString.split(' ')[3];
  if (retiredRikishi.includes(name)) {
    return new RetiredRikishi(rank, name, winCount);
  }
  return new Rikishi(rank, name, winCount);
});
