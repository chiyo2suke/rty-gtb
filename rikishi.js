
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Senshi 10-5",
  "O1w Kokuchozan 13-2 Y",
  "S1e Inazaru 11-4 JS",
  "S1w Kaitetsu 7-8",
  "S2e Yoshinochin 7-8",
  "K1e Shitayama 9-6",
  "K1w Kaeruwani 8-7",
  "M1e Chiyonouchi 6-9",
  "M1w Takado 3-12",
  "M2e Raimei 5-10",
  "M2w Akekitsu 7-8",
  "M3e Kamahiko Kyujo",
  "M3w Nekonoyama 7-8",
  "M4e Tentoryu 7-8",
  "M4w Genbu 9-6",
  "M5e Akaitenzan 4-11",
  "M5w Marumoru 5-10",
  "M6e Suzukafuji 9-6",
  "M6w Enkaga 11-4 JGK",
  "M7e Kokucho 7-8",
  "M7w Bunbukuchagama 8-7",
  "M8e Daisashoryu 7-8",
  "M8w Tamanosato 11-4 JK",
  "M9e Midorisetchi 8-7",
  "M9w Wakashaka 8-7",
  "M10e Nagashima 7-8",
  "M10w Shihojo 10-5",
  "M11e Otoriyama 10-5",
  "M11w Otaiho 6-9",
  "M12e Terukaze 6-9",
  "M12w Aoiyamayama 2-13",
  "M13e Miyanoyama 10-5",
  "M13w Maizuru 4-11",
  "M14e Rikioi 6-9",
  "M14w Shinkoizumi 8-7",
  "M15e Takaryu 6-9",
  "M15w Kaga 7-8",
  "M16e Hikarinowaka 8-7",
  "M16w Nishikimori 8-7",
  "M17e Kuroneko 7-8",
  "M17w Takashoji 9-6",
  "M18e Kanikama 8-7",
  "J1e Hikozaru 9-6",
  "J1w Gonenodeda 11-4 D",
  "J2e Shirobara 6-9",
  "J2w Chubamidori 6-9",
  "J3e Takaitsu 9-6",
  "J3w Akakuma 9-6",
  "J4e Mezunofuji 7-8",
  "J4w Mazoku 6-9",
  "J5e Kusawara 7-8",
  "J5w Kitashoritsu 11-4 D",
  "J6e Kunousagi 6-9",
  "J6w Akibi 0-0",
  "J7e Kenkaiwani 9-6",
  "J7w Tenho 8-7",
  "J8e Kumamidori 9-6",
  "J8w Toryuken 8-7",
  "J9e Kotowazasato 7-8",
  "J9w Gokujira 9-6",
  "J10e Yamaarashi 8-7",
  "J10w Etomi 11-4 D",
  "J11e Namakemonomaru 9-6",
  "J11w Haregeto 10-5",
  "J12e Yukishoryu 11-4 Y",
  "J12w Ookimizu 9-6",
  "J13e Kitanoishi 6-9",
  "J13w Wakakotofuji 6-9",
  "J14e Hitouki 7-8",
  "J14w Tenshi 8-7",
  "Ms1e Toyonoryu 8-7",
  "Ms1w Jurumoto 6-9",
  "Ms2e Ryukaze 8-7",
  "Ms2w Yamakuma 10-5",
  "Ms3e Jurukaze 7-8",
  "Ms3w Chiyotasuke 10-5",
  "Ms4e Enkaze 7-8",
  "Ms4w Koumitsu 9-6",
  "Ms5e Ika 0-0",
  "Ms5w Kuzushirisu 10-5",
  "Ms6e Hakunotora 8-7",
  "Ms6w Etsunotora 10-5",
  "Ms7e Tsugiryu 5-10",
  "Ms7w Asahinohana Kyujo",
  "Ms8e Chousanrishi 8-7",
  "Ms8w Shoho 12-3 Y",
  "Ms9e Kiriwaffuru 11-4",
  "Ms9w Akumazan 6-9",
  "Ms10e Kazahyuto 10-5",
  "Ms10w Reijingukuriku 10-5",
  "Ms11e Asanotora 9-6",
  "Ms11w Chibiyamayama 6-9",
  "Ms12e Abounogaku 7-8",
  "Ms12w Purookami 8-7",
  "Ms13e Daikeisho 11-4",
  "Ms13w Takerusato 3-2",
  "Ms14e Ittomaro 8-7",
  "Ms14w Arashikage 9-6",
  "Ms15e Takakeizuma 1-4",
  "Ms15w Jinan 0-2",
  "Ms16e Numa 8-7",
  "Ms16w Gerinoumi 6-9",
  "Ms17e Yukinoshoma 5-10",
  "Ms17w Matsumidori 6-9",
  "Ms18e Aisukurimu 8-7",
  "Ms18w Shirayaminosora 7-8",
  "Ms19e Higawa 10-5 R",
  "Ms19w Daimausanezumi 10-5",
  "Ms20e Suiga 7-8",
  "Ms20w Ishikai 6-9",
  "Ms21e Ayakasai 5-10"
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Yoshinochin",
  "Akibi",
  "Ika",
  "Takerusato",
  "Takakeizuma",
  "Ayakasai"
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
