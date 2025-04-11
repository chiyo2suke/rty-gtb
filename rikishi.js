
/* To make this, enable "One Column" option in SumoDB, copy & paste the tables 
 * as plain text and then turn them into array like this.
 */
var theSekitori = [
  "Y1e Tochinokuma 8-7",
"O1w Kokuchozan 10-5",
"S1e Dozan 11-4 JF",
"S1w Kaikaryu 9-6",
"K1e Sujiryu 3-12",
"K1w Senshi 13-2 YOF",
"M1e Kaitetsu 8-7",
"M1w Tentoryu 7-8",
"M2e Nagashima 8-7",
"M2w Maizuru 5-10",
"M3e Chiyonouchi 7-8",
"M3w Suzukafuji 5-10",
"M4e Harubayama 9-6",
"M4w Kokucho 6-9",
"M5e Kaeruwani 8-7",
"M5w Matsunofuji 7-8",
"M6e Kazesosha 10-5",
"M6w Yoshinochin 10-5",
"M7e Hikarinowaka 5-10",
"M7w Takado 8-7",
"M8e Kamahiko 7-8",
"M8w Daisashoryu 9-6",
"M9e Inazaru 10-5",
"M9w Raimei 9-6",
"M10e Genbu 10-5",
"M10w Tamanosato 5-10",
"M11e Nekonoyama 7-8",
"M11w Otoriyama 8-7",
"M12e Shihojo 9-6",
"M12w Shitayama 8-7",
"M13e Wakashaka 4-11",
"M13w Midorisetchi 11-4 JTF",
"M14e Akaitenzan 8-7",
"M14w Miyanoyama 7-8",
"M15e Akekitsu 8-7",
"M15w Takashoji 5-10",
"M16e Kaga 7-8",
"M16w Kogame 8-7",
"M17e Rikioi 4-11",
"M17w Chiyonosaka 10-5",
"M18e Bunbukuchagama 5-10",
"M18w Koizumi 5-10",
"J1e Kudasaru 9-6",
"J1w Otaiho 11-4 J",
"J2e Toryuken 6-9",
"J2w Kuroneko 9-6",
"J3e Marumoru 9-6",
"J3w Takaryu 9-6",
"J4e Enkaga 9-6",
"J4w Kanikama 7-8",
"J5e Shirobara 9-6",
"J5w Kitashoritsu 0-6",
"J6e Hikozaru 0-0",
"J6w Yamaarashi 5-10",
"J7e Kenkaiwani 8-7",
"J7w Nishikimori 7-8",
"J8e Mezunofuji 8-7",
"J8w Terukaze 10-5",
"J9e Shinkoizumi 11-4 J",
"J9w Gonenodeda 7-8",
"J10e Tatsutama 6-9",
"J10w Gokujira 10-5 S",
"J11e Akakuma 7-8",
"J11w Kumamidori 9-6",
"J12e Asanosato 12-3 Y",
"J12w Akakitsune 9-6",
"J13e Takaitsu 8-7",
"J13w Ryuho 8-7",
"J14e Kotowazasato 7-8",
"J14w Kunousagi 6-9",
"Ms1e Aoiyamayama 15-0 Y",
"Ms1w Asanoumi 6-9",
"Ms2e Chubamidori 10-5",
"Ms2w Kusawara 12-3 J",
"Ms3e Mazoku 7-8",
"Ms3w Namakemonomaru 6-9",
"Ms4e Haregeto 6-9",
"Ms4w Yamanohana 8-7",
"Ms5e Yukishoryu 7-8",
"Ms5w Akibi 8-7",
"Ms6e Dainoryu 10-5",
"Ms6w Kinzokuyama 8-7",
"Ms7e Kosu 0-0",
"Ms7w Inuyama 7-8",
"Ms8e Arashitora 3-12",
"Ms8w Enkaze 8-7",
"Ms9e Akumazan 9-6",
"Ms9w Ika 6-9",
"Ms10e Chiyotasuke 6-9",
"Ms10w Etomi 8-7",
"Ms11e Jurukaze 7-8",
"Ms11w Chousanrishi 8-7",
"Ms12e Wakakotofuji 7-8",
"Ms12w Tenshi 5-10",
"Ms13e Ryukaze 9-6",
"Ms13w Asanotora 6-9",
"Ms14e Toyonoryu 8-7",
"Ms14w Jurumoto 8-7",
"Ms15e Yamakuma 10-5",
"Ms15w Ookimizu 9-6",
"Ms16e Odorubaka 7-8",
"Ms16w Irukanami 9-6",
"Ms17e Shirokazu 7-8",
"Ms17w Asahinohana 5-10",
"Ms18e Hidenosato 8-7",
"Ms18w Etsunotora 7-8",
"Ms19e Fukutora 11-4",
"Ms19w Umihiyama 7-8",
"Ms20e Chikaminari 6-9",
"Ms20w Kitanoishi 10-5",
"Sd1e Koumitsu 6-9",
"Sd1w Kiriwaffuru 6-9",
"Sd2e Hakunotora 6-9",
"Sd2w Kitabenkei 6-9",
"Sd3e Kuzushirisu 9-6 J",
"Sd3w Shoho 10-5 Y"
];

/* Add here the shikona of retired sekitori, who will not appear in the
 * following banzuke. If nobody retired then leave this array empty
 */
var retiredRikishi = [
  "Tochinokuma",
  "Arashitora"
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
