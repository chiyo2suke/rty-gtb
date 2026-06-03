
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
"Y1e Senshi 9-6",
"O1e Inazaru 11-4",
"O1w Genbu 4-11",
"S1e Miyanoyama 12-3 DO",
"S1w Tentoryu 9-6",
"K1e Midorisetchi 6-9",
"K1w Shihojo 10-5 T",
"K2w Akekitsu 7-8",
"M1e Chiyonouchi 8-7",
"M1w Nekonoyama 8-7",
"M2e Kaeruwani 9-6",
"M2w Otaiho 6-9",
"M3e Bunbukuchagama 6-9",
"M3w Enkaga 0-0-15",
"M4e Shitayama 9-6",
"M4w Wakashaka 10-5",
"M5e Terukaze 9-6",
"M5w Rikioi 0-0-15",
"M6e Marumoru 9-6",
"M6w Shinkoizumi 5-10",
"M7e Otoriyama 3-12 R",
"M7w Kuroneko 8-7",
"M8e Kokucho 6-9 R",
"M8w Akaitenzan 7-8",
"M9e Takashoji 8-7",
"M9w Nishikimori 10-5",
"M10e Kitashoritsu 9-6",
"M10w Kanikama 6-9",
"M11e Mazoku 5-10",
"M11w Takaitsu 8-7",
"M12e Shirobara 5-10",
"M12w Hikarinowaka 8-7",
"M13e Takaryu 8-7",
"M13w Kaga 12-3 YOF",
"M14e Gonenodeda 10-5",
"M14w Maizuru 2-13",
"M15e Etomi 7-8",
"M15w Yamaarashi 10-5",
"M16e Ikarishima 7-8",
"M16w Haregeto 8-7",
"M17e Suzukafuji 5-10",
"M17w Aoiyamayama 6-9",
"J1e Kunousagi 10-5",
"J1w Yukishoryu 7-8",
  "J2e Akakuma 8-7",
"J2w Kotowazasato 9-6",
"J3e Tenho 7-8",
"J3w Hakunotora 3-12",
"J4e Toryuken 6-9",
"J4w Namakemonomaru 8-7",
"J5e Hikozaru 8-7",
"J5w Ookimizu 9-6",
"J6e Chubamidori 8-7",
"J6w Kazahyuto 11-4 S",
"J7e Kiriwaffuru 6-9",
"J7w Hitouki 7-8",
"J8e Mezunofuji 3-12",
"J8w Yamakuma 6-9",
"J9e Kitanoishi 9-6",
"J9w Gokujira 9-6",
"J10e Etsunotora 7-8",
"J10w Ryukaze 12-3 J",
"J11e Kenkaiwani 13-2 Y",
"J11w Kusawara 4-11",
"J12e Kuzushirisu 8-7",
"J12w Tenshi 7-8",
"J13e Numa 4-11",
"J13w Kumamidori Kyujo",
"J14e Akumazan 3-5",
"J14w Purookami 9-6",
"Ms1e Enkaze 8-7",
"Ms1w Koumitsu 8-7",
"Ms2e Arashikage 8-7",
"Ms2w Shoho Kyujo",
"Ms3e Tsugiryu 10-5",
  "Ms3w Toyonoryu 0-0 R",
"Ms4e Matsumidori 6-9",
"Ms4w Aisukurimu 6-9",
"Ms5e Reijingukuriku 4-11",
"Ms5w Ittomaro 10-5",
"Ms6e Asanotora 7-8",
"Ms6w Daikeisho 11-4 D",
"Ms7e Chibiyamayama 6-9",
"Ms7w Higawa 11-4 Y",
"Ms8e Razeko 7-8",
"Ms8w Shoyama 0-0 R",
"Ms9e Tsuzuteikoi 9-6",
"Ms9w Daimausanezumi 0-0 R",
  "Ms10e Yoshisuzu 7-8",
"Ms10w Rizutenshu 11-4 D",
"Ms11e Shiosei 3-9",
"Ms11w Shirayaminosora 8-7",
"Ms12e Fubukiryu 7-8",
"Ms12w Kudamono Kyujo",
"Ms13e Yukinoshoma 10-5 S",
"Ms13w Abounogaku 0-0 R",
"Ms14e Mokorisu 9-6",
"Ms14w Zuichoufuji 9-6",
"Ms15e Touyoyama 8-7",
"Ms15w Onikuma 9-6",
"Ms16e Akuto 0-0-15",
"Ms16w Suiga Kyujo",
"Ms17e Jurukaze 0-0 R”,
"Ms17w Karamifuji 0-0 R",
"Ms18e Isshuntaro Kyujo",
"Ms18w Sugoryoshi 8-7",
"Ms19e Takokuro Kyujo",
"Ms19w Seikazan 7-8",
"Ms20e Kokutouryu 7-8”,
"Ms20w Tamamidori 8-7",
"Ms21e Kanzenkuria 7-8",
"Ms21w Fujinokaze 6-9",
"Ms22e Takemidori 6-9",
"Ms22w Irukanada 9-6",
"Ms23e Yoshino 5-10",
"Ms23w Washuyama 0-0-15",
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Karamifuji","Jurukaze","Abounogaku","Daimausanezumi","Shoyama","Toyonoryu","Kokucho","Otoriyama"
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
