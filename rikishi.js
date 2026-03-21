
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Senshi 9-6",	
  "Y1w Kokuchozan 9-6 R", 
  "O1e Inazaru 13-2 Y",			
  "S1e Genbu 10-5",	
  "S1w Akekitsu 7-8",
  "K1e Nekonoyama 6-9",	
  "K1w Miyanoyama 9-6",
  "K2e Shitayama 5-10",	
  "K2w Bunbukuchagama 6-9",
  "M1e Enkaga 6-9",	
  "M1w Tentoryu 11-4 FT",
  "M2e Shihojo 9-6",	
  "M2w Chiyonouchi 8-7",
  "M3e Kaeruwani 8-7",	
  "M3w Suzukafuji 0-15",
  "M4e Kokucho 5-10",	
  "M4w Otoriyama 6-9",
  "M5e Midorisetchi 12-3 JFT",	
  "M5w Otaiho 9-6",
  "M6e Wakashaka 8-7",	
  "M6w Takashoji 5-10",
  "M7e Terukaze 8-7",	
  "M7w Tamanosato 9-6 R",
  "M8e Daisashoryu 7-8 R",	
  "M8w Akaitenzan 7-8",
  "M9e Nishikimori 6-9",	
  "M9w Kaga 5-10",
  "M10e Shinkoizumi 9-6",	
  "M10w Gonenodeda 5-10",
  "M11e Rikioi 10-5",	
  "M11w Marumoru 10-5",
  "M12e Takaitsu 7-8",	
  "M12w Maizuru 6-9",
  "M13e Kuroneko 10-5",	
  "M13w Kanikama 8-7",
  "M14e Shirobara 8-7",	
  "M14w Hikarinowaka 8-7",
  "M15e Kitashoritsu 9-6",	
  "M15w Etomi 7-8",
  "M16e Tenho 4-11",	
  "M16w Akakuma 5-10",
  "M17e Takaryu 9-6",			
  "J1e Yamaarashi 9-6",	
  "J1w Aoiyamayama 8-7",
  "J2e Chiyotasuke 9-6",	
  "J2w Haregeto 9-6",
  "J3e Kumamidori 1-14",	
  "J3w Yukishoryu 8-7",
  "J4e Mazoku 13-2 Y",	
  "J4w Namakemonomaru 7-8",
  "J5e Kotowazasato 8-7",	
  "J5w Chubamidori 7-8",
  "J6e Kusawara Kyujo",	
  "J6w Kunousagi 10-5",
  "J7e Ookimizu 8-7",	
  "J7w Mezunofuji 6-9",
  "J8e Kenkaiwani 5-10",	
  "J8w Hikozaru 9-6",
  "J9e Gokujira 6-9",	
  "J9w Hakunotora 10-5",
  "J10e Toryuken 10-5",	
  "J10w Hitouki 8-7",
  "J11e Etsunotora 7-8",	
  "J11w Shoho 4-11",
  "J12e Kiriwaffuru 9-6",	
  "J12w Toyonoryu Kyujo",
  "J13e Kuzushirisu 7-8",	
  "J13w Ryukaze 8-7",
  "J14e Kazahyuto 11-4",	
  "J14w Kitanoishi 9-6",
  "Ms1e Tenshi 9-6",	
  "Ms1w Yamakuma 11-4 Y",
  "Ms2e Enkaze 8-7",	
  "Ms2w Numa 9-6",
  "Ms3e Akumazan 9-6",	
  "Ms3w Chibiyamayama 5-10",
  "Ms4e Koumitsu 9-6",	
  "Ms4w Reijingukuriku 7-8",
  "Ms5e Purookami 10-5",	
  "Ms5w Tsugiryu 9-6",
  "Ms6e Aisukurimu 8-7",	
  "Ms6w Arashikage 10-5",
  "Ms7e Tsuzuteikoi 6-9",	
  "Ms7w Higawa 7-8",
  "Ms8e Jurukaze Kyujo",	
  "Ms8w Asanotora 8-7",
  "Ms9e Jurumoto 0-0 R",	
  "Ms9w Abounogaku Kyujo",
  "Ms10e Shirayaminosora 6-9",	
  "Ms10w Daikeisho 9-6",
  "Ms11e Ittomaro 10-5",	
  "Ms11w Matsumidori 11-4 DS",
  "Ms12e Daimausanezumi 8-7",	
  "Ms12w Fubukiryu 7-8",
  "Ms13e Rizutenshu 8-7",	
  "Ms13w Yukinoshoma 6-9",
  "Ms14e Kudamono 7-8",	
  "Ms14w Razeko 10-5",
  "Ms15e Takokuro Kyujo",	
  "Ms15w Suiga Kyujo",
  "Ms16e Yoshisuzu 10-5",	
  "Ms16w Shoyama 11-4 D",
  "Ms17e Shiosei 10-5",	
  "Ms17w Kogumanami Kyujo",
  "Ms18e Isshuntaro 3-12",	
  "Ms18w Akuto 6-9",
  "Ms19e Touyoyama 7-8",	
  "Ms19w Zuichoufuji 8-7",
  "Ms20e Mokorisu 9-6",	
  "Ms20w Sugoryoshi 3-12",
  "Ms21e Karamifuji 6-9",	
  "Ms21w Onikuma 8-5",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Kokuchozan",
  "Tamanosato",
  "Daisashoryu",
  "Jurumoto"
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
