
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Senshi 9-6",
  "O1w Kokuchozan 10-5",
  "S1e Kaeruwani 7-8",
  "S1w Inazaru 9-6",
  "K1e Kaitetsu 8-7",
  "K1w Yoshinochin 12-3 YSK",
  "M1e Harubayama 7-8",
  "M1w Genbu 1-5",
  "M2e Raimei 7-8",
  "M2w Kazesosha 2-4",
  "M3e Chiyonouchi 8-7",
  "M3w Kamahiko 7-8",
  "M4e Tentoryu 7-8",
  "M4w Shitayama 10-5",
  "M5e Takado 9-6",
  "M5w Daisashoryu 6-9",
  "M6e Nagashima 5-10",
  "M6w Akaitenzan 8-7",
  "M7e Maizuru 2-13",
  "M7w Midorisetchi 7-8",
  "M8e Suzukafuji 8-7",
  "M8w Kokucho 8-7",
  "M9e Akekitsu 10-5",
  "M9w Tamanosato 8-7",
  "M10e Otoriyama 6-9",
  "M10w Bunbukuchagama 9-6",
  "M11e Hikarinowaka 4-11",
  "M11w Nekonoyama 11-4 JK",
  "M12e Enkaga 10-5",
  "M12w Marumoru 11-4 JGK",
  "M13e Takaryu 6-9",
  "M13w Wakashaka 9-6",
  "M14e Otaiho 8-7",
  "M14w Shinkoizumi 7-8",
  "M15e Terukaze 8-7",
  "M15w Shihojo 9-6",
  "M16e Aoiyamayama 8-7",
  "M16w Kanikama 6-9",
  "M17e Kuroneko 7-8",
  "M17w Takashoji 7-8",
  "M18e Kenkaiwani 4-11",
  "M18w Asanosato 4-11",
  "J1e Miyanoyama 10-5",
  "J1w Shirobara 7-8",
  "J2e Toryuken 5-10",
  "J2w Rikioi 10-5",
  "J3e Mezunofuji 7-8",
  "J3w Kaga 9-6",
  "J4e Nishikimori 9-6",
  "J4w Takaitsu 8-7",
  "J5e Chiyonosaka 0-0-15",
  "J5w Gokujira 5-10",
  "J6e Kusawara 8-7",
  "J6w Hikozaru 10-5",
  "J7e Gonenodeda 10-5",
  "J7w Akibi 8-7",
  "J8e Kumamidori 8-7",
  "J8w Akakuma 10-5",
  "J9e Kinzokuyama 0-0",
  "J9w Chubamidori 11-4",
  "J10e Yamaarashi 7-8",
  "J10w Mazoku 11-4",
  "J11e Koizumi 4-11",
  "J11w Namakemonomaru 7-8",
  "J12e Kunousagi 11-4",
  "J12w Etomi 8-7",
  "J13e Kitashoritsu 12-3 Y",
  "J13w Haregeto 8-7",
  "J14e Ryukaze 5-10",
  "J14w Jurukaze 5-10",
  "Ms1e Ookimizu 9-6",
  "Ms1w Toyonoryu 7-8",
  "Ms2e Kotowazasato 12-3 Y",
  "Ms2w Yukishoryu 10-5",
  "Ms3e Kitanoishi 9-6",
  "Ms3w Enkaze 7-8",
  "Ms4e Ika 6-9",
  "Ms4w Wakakotofuji 9-6",
  "Ms5e Hitouki 9-6",
  "Ms5w Akakitsune 0-0-15",
  "Ms6e Jurumoto 9-6",
  "Ms6w Yamakuma 9-6",
  "Ms7e Tenshi 10-5",
  "Ms7w Chousanrishi 6-9",
  "Ms8e Shinohiwashi 0-0-15",
  "Ms8w Asanotora 5-10",
  "Ms9e Chiyotasuke 10-5",
  "Ms9w Shoho 7-8",
  "Ms10e Tsugiryu 8-7",
  "Ms10w Kuzushirisu 9-6",
  "Ms11e Hakunotora 9-6",
  "Ms11w Etsunotora 9-6",
  "Ms12e Akumazan 8-7",
  "Ms12w Fukutora 0-0-15",
  "Sd1e Koumitsu 11-4 Y",
  "Sd1w Kiriwaffuru 9-6",
  "Sd2e Shirokazu 9-6",
  "Sd2w Abounogaku 7-8",
  "Sd3e Asahinohana 10-5",
  "Sd3w Chibiyamayama 8-7",
  "Sd4e Odorubaka 0-0-15",
  "Sd4w Purookami 8-7",
  "Sd5e Reijingukuriku 10-5",
  "Sd5w Ono 7-8",
  "Sd6e Chikaminari 0-0-15",
  "Sd6w Ittomaro 7-8",
  "Sd7e Numa 4-11",
  "Sd7w Daikeisho 9-6",
  "Sd8e Jinan 5-10",
  "Sd8w Takakeizuma 6-9",
  "Sd9e Arashikage 8-7",
  "Sd9w Takerusato 9-6",
  "Sd10e Oke 7-8",
  "Sd10w Takakeumi 0-0",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Kazesosha",
  "Kamahiko",
  "Takakeumi",
  "Koizumi",
  "Harubayama",
  "Kinzokuyama"
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
