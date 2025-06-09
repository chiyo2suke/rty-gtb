
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "O1e Kokuchozan 12-3 Y",
  "O1w Senshi 13-2 J",
  "O2e Dozan 7-8",
  "S1e Kaikaryu 4-7",
  "S1w Kaitetsu 7-8",
  "K1e Nagashima 3-12",
  "K1w Harubayama 7-8",
  "M1e Kazesosha 6-9",
  "M1w Yoshinochin 8-7",
  "M2e Tentoryu 6-9",
  "M2w Kaeruwani 10-5",
  "M3e Chiyonouchi Kosho",
  "M3w Inazaru 10-5",
  "M4e Genbu 8-7",
  "M4w Daisashoryu 6-9",
  "M5e Takado 7-8",
  "M5w Matsunofuji 7-8",
  "M6e Raimei 9-6",
  "M6w Midorisetchi 6-9",
  "M7e Maizuru 7-8",
  "M7w Kokucho 6-9",
  "M8e Suzukafuji 7-8",
  "M8w Sujiryu 10-5",
  "M9e Kamahiko 10-5 G",
  "M9w Shihojo Kyujo",
  "M10e Otoriyama 7-8",
  "M10w Shitayama 10-5",
  "M11e Hikarinowaka 6-9",
  "M11w Nekonoyama 7-8",
  "M12e Chiyonosaka 0-6-9",
  "M12w Akaitenzan 9-6",
  "M13e Akekitsu 8-7",
  "M13w Otaiho 6-9",
  "M14e Tamanosato 8-7",
  "M14w Miyanoyama 4-11",
  "M15e Kogame 5-10",
  "M15w Kudasaru 4-10",
  "M16e Kaga 6-9",
  "M16w Kuroneko 4-11",
  "M17e Marumoru 8-7",
  "M17w Takaryu 8-7",
  "M18e Enkaga 9-6",
  "J1e Wakashaka 9-6",
  "J1w Shirobara 7-8",
  "J2e Shinkoizumi 9-6",
  "J2w Takashoji 8-7",
  "J3e Asanosato 8-7",
  "J3w Terukaze 9-6",
  "J4e Aoiyamayama 9-6",
  "J4w Bunbukuchagama 12-3 Y",
  "J5e Toryuken 8-7",
  "J5w Koizumi 3-12",
  "J6e Kanikama 10-5",
  "J6w Kenkaiwani 10-5",
  "J7e Rikioi 9-6",
  "J7w Mezunofuji 9-6",
  "J8e Gokujira 8-7",
  "J8w Nishikimori 9-6",
  "J9e Kumamidori 6-9",
  "J9w Akakitsune 0-6-9",
  "J10e Kusawara 9-6",
  "J10w Gonenodeda 8-7",
  "J11e Yamaarashi 6-9",
  "J11w Akakuma 7-8",
  "J12e Chubamidori 7-8",
  "J12w Takaitsu 11-4",
  "J13e Ryuho 0-6-9",
  "J13w Tatsutama 0-6-9",
  "J14e Hikozaru 10-5",
  "J14w Kotowazasato 4-11",
  "Ms1e Kunousagi 7-8",
  "Ms1w Shinohiwashi 2-10-3",
  "Ms2e Asanoumi 0-0",
  "Ms2w Akibi 12-3 Y",
  "Ms3e Mazoku 9-6",
  "Ms3w Kinzokuyama 10-5",
  "Ms4e Kitashoritsu 8-7",
  "Ms4w Akumazan 1-5",
  "Ms5e Yukishoryu 6-9",
  "Ms5w Namakemonomaru 10-5",
  "Ms6e Haregeto 9-6",
  "Ms6w Enkaze 6-9",
  "Ms7e Etomi 10-5",
  "Ms7w Inuyama 0-0-15",
  "Ms8e Ryukaze 9-6",
  "Ms8w Yamakuma 6-9",
  "Ms9e Chousanrishi 6-9",
  "Ms9w Fukutora Kyujo",
  "Ms10e Jurukaze 10-5",
  "Ms10w Ika 8-7",
  "Ms11e Ookimizu 10-5",
  "Ms11w Chiyotasuke 6-9",
  "Ms12e Toyonoryu 10-5",
  "Ms12w Wakakotofuji 9-6",
  "Ms13e Irukanami 0-0-15",
  "Ms13w Jurumoto 9-6",
  "Ms14e Kitanoishi 10-5",
  "Ms14w Kosu 0-0",
  "Ms15e Asanotora 8-7",
  "Ms15w Hidenosato 0-0",
  "Ms16e Odorubaka Kyujo",
  "Ms16w Tenshi 10-5",
  "Ms17e Shirokazu 6-9",
  "Ms17w Shoho 9-6",
  "Ms18e Etsunotora 8-7",
  "Ms18w Kuzushirisu 9-6",
  "Ms19e Hitouki 12-3",
  "Ms19w Asahinohana 6-9",
  "Ms20e Chikaminari Kyujo",
  "Ms20w Koumitsu 8-7",
  "Sd1e Kiriwaffuru 8-7",
  "Sd1w Hakunotora 10-5",
  "Sd2e Kitabenkei 0-0-15",
  "Sd2w Chibiyamayama 7-8",
  "Sd3e Chiyonoshoryu 0-6-9",
  "Sd3w Nagisatori 0-6-9",
  "Sd4e Abounogaku 9-6",
  "Sd4w Ono 5-10",
  "Sd5e Reijingukuriku 6-9",
  "Sd5w Purookami 7-8"
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Matsunofuji",
  "Kinzokuyama",
  "Kogame",
  "Hidenosato",
  "Kosu",
  "Kudasaru",
  "Kaikaryu",
  "Dozan",
  "Sujiryu"
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
