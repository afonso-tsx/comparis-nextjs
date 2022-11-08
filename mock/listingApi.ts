import { Listing } from "../types/Listing";
import { validateListing } from "./validateListing";

const listings = [
  {
    Id: 7717902,
    Title:
      "Cherchez-vous un pied-à-terre proche du Chuv et de l'autoroute Vennes?",
    Description:
      "Situation<br /><br />Logement situé dans le nord de la Ville,proche du Chuv, vous apprécierez la proximité de l'autoroute, tout en étant près dela forêt qui invite à la promenade. Vous habitez ici dans un quartier d'habitationoffrant un accès rapide aux diverses commodités. <br /><br />Descriptif de votreappartement<br /><br />L'appartement est facilement aménageable et possède unbalcon. Ce logement présente en outre le descriptifsuivant:<ul><li>Salon</li><li>Chambre</li><li>Hall</li><li>Cuisineagencée</li><li>Salle de bains</li><li>Balcon</li><li>Cave</li></ul>Sur demande, ilest possible de louer en plus une place de parc dans le parking souterrain à fr.130.00 par mois.<br /><br />Appeler. Visiter. Louer.<br /><br />Nous nous ferons unplaisir de vous aider.<br /><br />Sophie Huguenin<br />058 280 70 84<br/>sophie.huguenin@helvetia.ch<br /><br /><br />Les photos publiées représentent deslogements de même type ou de type analogue. Des différences par rapport à l'offreeffective sont par conséquent possibles.<br /><br />Vous trouverez d'autres objetsintéressants à louer sous: www.helvetia.ch/location",
  },
  {
    Id: 7717073,
    Title: "Lagerraum mit direkter Zufahrt PW",
    Description:
      "Wir vermieten einen Lagerraum, welcher direkt über eineAutoeinstellhalle und somit mit einem PW erreichbar ist.</br>Nicht geeignet alsBandraum oder Nutzung mit langer Aufenthaltsdauer.",
  },
  {
    Id: 7717072,
    Title: "Atelier zur Vermietung",
    Description:
      "Diese Liegenschaft mit dem hellen und schönen Atelier befindetsich in Liestal. Der öffentliche Verkehr befindet sich in unmittelbarer Nähe.</br>Ausstattung im Atelier:</br>-Lavabo mit Kalt- undWarmwasser</br>-Spiegel</br>-Teppichboden</br>-Fenster</br>-Steckdosen</br>-Grundbeleuchtung</br>-Höhe: ca. 242 cm.</br>",
  },
  {
    Id: 7717071,
    Title: "Beheiztes Lager",
    Description:
      "Das Carba-Areal befindet sich 10 Fahrminuten vom StadtzentrumBern entfernt und liegt mitten in Liebefeld in der Gemeinde Köniz.</br>DieserLagerraum bietet folgende Ausstattungsmerkmale: </br> ein beheizter Raum mitFenster</br> Gitterabtrennung</br> kein Wasseranschluss</br>Verlangen Sieunverbindlich weitere Unterlagen und Auskünfte.</br>",
  },
  {
    Id: 7717069,
    Title: "Restaurantfläche an zentraler Lage",
    Description:
      "An der Löwenstrasse 24 vermieten wir ein helles Lokal von 90 m2und zwei separaten WC's. Das Lokal hat einen eigenen direkten Eingang,Sitzgelegenheiten für die Gäste innen und aussen, einen Lagerraum und einenBarbereich.</br>Rufen sie uns an, wir geben Ihnen gerne weitere Auskünfte.",
  },
  {
    Id: 7717068,
    Title: "Hobbyraum / Atelier / Lager",
    Description:
      "Atelier / Hobbyraum / Lager zu vermieten 20m2</br>Der Hobbyraumbefindet sich im UG und verfügt über 20m. Der Raum ist hell, da es auf 2 Seiten desRaumes Fenster gibt. </br>Die Räumlichkeit ist nicht geeignet als Musik- oderGamer-Raum.</br>Es sind keine Toiletten vorhanden.</br>Wenn wir Ihr Interessegeweckt haben, zeigen wir Ihnen diesen Raum gerne.</br>",
  },
  {
    Id: 7717067,
    Title: "Grosses Büro oder Hobbyraum an perfekter Lage!",
    Description:
      "Per sofort oder nach Vereinbarung vermieten wir diversepraktische Räumlichkeiten. (Objekte werden geräumt.)</br>Ideal für den Gebraucheiner KMU.</br>Eine Nasszelle sowie eine Küche ist vorhanden.</br>Div. Objekte habenseparate Eingänge.</br>Eine Öffentliche Besichtigung findet am Freitag, 30.09.2022um 11:00 Uhr statt.</br>",
  },
  {
    Id: 7717066,
    Title: "Die perfekte Lage für Ihr kleines Büro/Atelier/Hobbyraum!",
    Description:
      "Per sofort oder nach Vereinbarung vermieten wir diversepraktische Räumlichkeiten. </br>Im Bereich von 12-19m2 und preislich zwischen CHF250.- - 350.- Netto.</br>Ideal für den Gebrauch einer KMU.</br>Eine Nasszelle (wirdsaniert) sowie eine Küche zur Mitbenützung ist vorhanden.</br>Eine ÖffentlicheBesichtigung findet am Freitag, 30.09.2022 um 11:00 Uhr statt.</br>*Räumlichkeitenwerden geräumt.",
  },
  {
    Id: 7717065,
    Title: "Atelier in Schindellegi",
    Description:
      "Unsere schönen Atelierräumlichkeiten möchten wir gerne zurMitbenutzung teilen. Als Arbeitsplatz (Co-Workingspace) unter der Woche oder auchals Kursräumlichkeiten. Die Kurstische und Stühle können individuell platziertwerden und bieten Platz für max. 16 Personen. Auf Wunsch kann ein eigenerArbeitsplatz eingerichtet werden. </br>Wir haben ein kleines Bad und eine kleine,gute eingerichtete Küche mit Hochherd, Backofen, Kühlschrank, Kaffee- undTeemaschinen, die gerne mitbenutzt werden dürfen dürfen. </br>im Mietpreisinbegriffen ist ein Parkplatz und die Internetnutzung. Im Sommer bleiben unsereRäumlichkeiten angenehm kühl, im Winter sorgt die Zentralheizung im Haus für eineangenehme Arbeitstemperatur. Für Gäste und Kunden stehen einige Besucherparkplätzezur Verfügung. </br>Interessiert? Gerne zeigen wir unsere Räumlichkeiten.</br>",
  },
  {
    Id: 7717064,
    Title: "Moderne Shisha Bar & Lounge",
    Description:
      "Diese moderne und erfolgreiche Shisha Bar Lounge befindet sichim Bezirk Hinwil.</br>Die Shisha Bar Lounge ist beliebt und hat viele Stammkunden.Im Jahr 2018 wurde das Lokal komplett renoviert und hochwertig neu eingerichtet. DerBetrieb lief auch während der Pandemie gut.</br>Die Location verfügt über eineperfekte Grösse mit 70 Innenplätzen und 50 Terrassenplätzen.</br>Es gibt keineGastroküche mit Abzug. Aber es gibt eine Zubereitungsküche für die Shishas und dieZubereitung von Snacks für die Gäste.</br>Diese schöne und coole Lounge Bar hatkeine Getränkelieferverträge und auch keine anderen Verpflichtungen.</br>DerÜbernahmepreis für den laufenden Betrieb mit Stammkundschaft, das Inventar und denkompletten Innen-Ausbau beträgt CHF 100'000.-.</br>.</br>Weitere Informationenerhalten Sie unter info@gastroforyou.ch</br>Weitere Gastronomie-Objekte finden Sieunter www.gastroforyou.ch</br>Unser Team freut sich auf Ihre Kontaktaufnahme.</br>",
  },
  {
    Id: 7717062,
    Title: "Hier entsteht attraktiver Raum zum Arbeiten in Dübendorf",
    Description:
      "An der Ueberlandstrasse 237/239 entsteht die Business Class desArbeitens. Nahe an der Stadt, Nahe am Land. Perfekt für das Gewebe. </br>ImErdgeschoss und im 1. OG entstehen spannende Gewerberäume für Ihr Geschäftsidee. Von27 -276m2 Fläche ist alles dabei und eignen sich perfekt für einen Bürobetrieb, einePraxis, ein Atelier oder ein Verkaufsgeschäft. </br>Weitere Details finden Sie aufunserer Projekthomepage </br>www.juliett-mike.ch </br>Wir freuen uns auf IhreKontaktaufnahme. </br>",
  },
  {
    Id: 7717061,
    Title: "",
    Description:
      "Stadthotel mit 31 Zimmern und Suiten plus 2 MA-Wohnungen </br>AmEingang der Altstadt Winterthur vermieten wir ein vollausgestattetes Hotel mit 31Zimmern davon 3 Suiten mit vollausgestatteter Küche. Zusätzlich sind 2Mitarbeiterwohnungen inklusive. Das Hotel ist im vollen Betrieb und bei allengängigen Buchungsportalen angemeldet. </br>Die Zimmer sind auf 3 Etagen (mit Lifterreichbar) verteilt und sind zwischen 19 bis 36 m2 gross. Die Ausstattungentspricht dem gehobenen 3 Sterne Niveau. </br>Das Hotel verfügt über eineRezeption sowie einen Check-In-Automaten. Buchungssystem ist im Übernahmepreis mitinbegriffen.</br>Nasszellen sind barrierefrei, jedes Zimmer verfügt überFlachbildschirm, Kaffeemaschine, Minibar, Safe Bügelbrett und ein Public-Wi-Fi.</br>Im Untergeschoss ist eine Frühstücksküche, Industrie-Waschmaschine,Industrie-Trockner sowie eine Mange untergebracht. Lagerräume sind vorhanden.</br>Übernahme der Infrastruktur ist bei CHF 300'000 angesetzt. </br>",
  },
  { AdId: 7717060, Title: "", Description: "" },
  {
    AdId: 7717057,
    Title: "",
    Description:
      "An bester Lage im erst kürzlich saniertem Hotel Des Alpes, fälltdie Gewerbefläche mit seiner modernen und grossen Schaufensterfront besonders auf.Das Gebäude besteht aus einem Mix von Hotel-, Restaurant-, Eigentumswohnungen sowiedie zu vermietende Ladenfläche.",
  },
  {
    AdId: 7717056,
    Title: "Chur - 4.5-Zimmerwohnungen (Erstvermietung)",
    Description: "",
  },
];
export const getListings = async () => {
  return listings.filter((listing) => validateListing(listing)) as Listing[];
};

export const getListing = async (Id: number) => {
  const listings = await getListings();
  return listings.find((listing) => listing.Id === Id) as Listing;
};
