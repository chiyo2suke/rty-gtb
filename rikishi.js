
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Inazaru 10-5",
  "Y1w Miyanomono 12-3 D",
  "O1e Tentoryu 9-6",
  "O1w Shihojo 9-6",
  "S1e Kaeruwani 8-7",
  "S1w Akekitsu 9-6",
  "K1e Kuroneko 8-7",
  "K1w Akaitenzan 7-8",
  "M1e Shitayama 4-11",
  "M1w Hikarinowaka 8-7",
  "M2e Kaga 2-12",
  "M2w Kitashoritsu 9-6",
  "M3e Midorisetchi 8-7",
  "M3w Gonenodeda 8-7",
  "M4e Terukaze 3-12",
  "M4w Takaitsu 5-10",
  "M5e Takashoji 7-8",
  "M5w Marumoru 12-3 DFR",
  "M6e Wakashaka 6-9",
  "M6w Nishikimori 12-3 YFTO",
  "M7e Mazoku 10-5",
  "M7w Yamaarashi 7-8",
  "M8e Kanikama 7-8",
  "M8w Kotowazasato 8-7",
  "M9e Takaryu 11-4 FT",
  "M9w Otaiho 7-8",
  "M10e Shirobara 4-11",
  "M10w Tenho 7-8",
  "M11e Enkaga 11-4 FT",
  "M11w Ookimizu 8-7",
  "M12e Hikozaru 8-7",
  "M12w Aoiyamayama 7-8",
  "M13e Toryuken 10-5 F",
  "M13w Haregeto 7-8",
  "M14e Kunousagi 10-5",
  "M14w Kazahyuto 6-9",
  "M15e Namakemonomaru 8-7",
  "M15w Yukishoryu 9-6",
  "M16e Chubamidori 7-8",
  "M16w Ikarishima 7-8",
  "M17e Monokaze 6-9",
  "M17w Daikeisho 7-8",
  "J1e Kitanoishi 10-5",
  "J1w Hitouki 8-7",
  "J2e Enkaze 7-8",
  "J2w Suzukafuji 4-11",
  "J3e Yamayumono 6-9",
  "J3w Purookami 9-6",
  "J4e Etsunotora 6-9",
  "J4w Hakunotora 9-6",
  "J5e Ittomaro 7-8",
  "J5w Aisukurimu 10-5",
  "J6e Maizuru 7-8",
  "J6w Gokujira 8-7",
  "J7e Kiriwaffuru 10-5",
  "J7w Rikioi 0-0 R",
  "J8e Razeko 13-2 YS",
  "J8w Higawa 6-9",
  "J9e Tsuzuteikoi 9-6",
  "J9w Tenshi 0-0-15",
  "J10e Koumitsu 11-4",
  "J10w Arashikage 9-6",
  "J11e Tsugiryu 0-0-15",
  "J11w Rizutenshu 6-9",
  "J12e Kuzushirisu 0-0 R",
  "J12w Yukinoshoma 9-6",
  "J13e Shirayaminosora 8-7",
  "J13w Matsumidori 7-8",
  "J14e Yoshisuzu 6-8",
  "J14w Irukanada 7-8",
  "Ms1e Yoshino 5-10",
  "Ms1w Asanotora 7-8",
  "Ms2e Chibiyamayama 0-0-15",
  "Ms2w Zuichoumono 9-6",
  "Ms3e Touyoyama 9-6",
  "Ms3w Kanzenkuria 7-8",
  "Ms4e Numa 14-1 YS",
  "Ms4w Kokutouryu 12-3 S",
  "Ms5e Fujinomonokaze 9-6",
  "Ms5w Mokorisu 9-6",
  "Ms6e Kaisegawa 7-8",
  "Ms6w Tamamidori 8-7",
  "Ms7e Seikazan 9-6",
  "Ms7w Sugoryoshi 0-0-15",
  "Ms8e Torinoyama 7-8",
  "Ms8w Tamatsuyoshi 6-9",
  "Ms9e Akumazan Kyujo",
  "Ms9w Suiga 8-7",
  "Ms10e Suishotatsu 8-7",
  "Ms10w Otorikaze 11-4",
  "Ms11e Amenoyama 3-12",
  "Ms11w Chiyonogawa Kyujo",
  "Ms12e Jinmakufuji 8-7",
  "Ms12w Reijingukuriku 0-0-15",
  "Ms13e Daimonoryu 7-8",
  "Ms13w Shogazake 8-7",
  "Ms14e Fubukiryu 0-0-15",
  "Ms14w Kokutetsu 0-0 R",
  "Ms15e Oiwayama 9-6",
  "Ms15w Lankanomushin 6-9",
  "Ms16e Yubemonohana 10-5",
  "Ms16w Asashimono 8-7",
  "Ms17e Fuchi 8-7",
  "Ms17w Haginoyama 10-5",
  "Ms18e Hirohachi 9-6",
  "Ms18w Uotashaku 0-0 R",
  "Ms19e Takanowani 5-10",
  "Ms19w Tatakauhachi 10-5",
  "Ms20e Soranofuji 5-10",
  "Ms20w Chiyonourufu 9-6",
  "Ms21e Kitahagane 4-11",
  "Ms21w Zendoyama 10-5",
  "Ms22e Kochimidori 1-11",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Rikioi",
  "Kuzushirisu",
  "Kokutetsu",
  "Outashaku",
  "Marumoru"
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
