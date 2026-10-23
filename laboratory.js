(()=>{
'use strict';
const base='https://eclinpath.com/';
const cards=[];
function add(id,group,name,units,what,high,low,factors,dog,cat,related,source){cards.push({id,group,name,units,what,high,low,factors,dog,cat,related,source:base+source});}
add('hct','hemo','HCT · Hematokryt',['%','L/L'],'Udział objętości krwinek czerwonych we krwi.','Odwodnienie lub zwiększona masa erytrocytów.','Niedokrwistość lub rozcieńczenie krwi.','Nawodnienie i sposób oznaczenia: HCT z analizatora oraz wirowany PCV mogą się różnić.','Oceniaj razem z retikulocytami i rozmazem.','Oceniaj razem z retikulocytami i rozmazem.',['retic','wbc'],'hematology/tests/hematology-guide/');
add('retic','hemo','Retikulocyty',['10⁹/L','tys./µl','%'],'Młode erytrocyty; pomagają ocenić odpowiedź szpiku na niedokrwistość.','Regeneracja po utracie krwi lub hemolizie.','Przy niedokrwistości: niedostateczna produkcja, choroba szpiku, zapalenie lub niedobór erytropoetyny.','Preferuj liczbę bezwzględną; uwzględnij czas od początku niedokrwistości.','Wynik oceniaj w odniesieniu do nasilenia niedokrwistości.','Retikulocyty agregatowe lepiej odzwierciedlają bieżącą regenerację niż punkcikowate.',['hct','creat'],'hematology/anemia/assessment-regeneration/');
add('wbc','hemo','WBC · Leukocyty',['10⁹/L','tys./µl'],'Łączna liczba krwinek białych.','Zapalenie, odpowiedź stresowa lub rozrost komórek.','Zużycie w nasilonym zapaleniu albo zmniejszona produkcja.','Łączna liczba nie zastępuje rozdziału leukocytów i oceny rozmazu.','Oceń bezwzględne liczby poszczególnych leukocytów.','Oceń bezwzględne liczby poszczególnych leukocytów.',['hct','plt'],'hematology/tests/hematology-guide/');
add('plt','hemo','PLT · Płytki krwi',['10⁹/L','tys./µl'],'Liczba płytek uczestniczących w hemostazie pierwotnej.','Odczyn reaktywny; rzadziej proces rozrostowy.','Zużycie, niszczenie, zmniejszona produkcja lub pozorne obniżenie przez agregaty.','Sprawdź rozmaz i obecność zlepów przed uznaniem wyniku za małopłytkowość.','Oceń wraz z objawami krwawienia.','Zlepianie płytek często utrudnia wiarygodny pomiar automatyczny.',['wbc','hct'],'hematology/hemogram-basics/');
add('alt','bio','ALT · Aminotransferaza alaninowa',['U/L','µkat/L'],'Aktywność enzymu wskazującego na uszkodzenie hepatocytów; nie jest bezpośrednim pomiarem wydolności wątroby.','Uszkodzenie hepatocytów różnego pochodzenia; czasem ciężkie uszkodzenie mięśni.','Niska aktywność zwykle nie ma samodzielnej wartości diagnostycznej.','Leki, m.in. glikokortykosteroidy i przeciwpadaczkowe; metoda oznaczenia.','Uwzględnij stosowane leki oraz dynamikę zmian.','Hemoliza próbki może zwiększać oznaczoną aktywność.',['alp'],'chemistry/liver/liver-injury/alanine-aminotransferase/');
add('alp','bio','ALP · Fosfataza alkaliczna',['U/L','µkat/L'],'Aktywność enzymu związanego m.in. z cholestazą i tkanką kostną.','Cholestaza, wzrost kości, niektóre choroby kości; u psa także indukcja steroidowa.','Niska aktywność zwykle ma ograniczone znaczenie diagnostyczne.','Wiek i wzrost zwierzęcia, leki oraz gatunek.','Glikokortykosteroidy mogą indukować ALP; wzrost nie oznacza automatycznie niedrożności dróg żółciowych.','Nie przenoś interpretacji steroidowej ALP z psa na kota; wzrost wymaga uwagi klinicznej.',['alt'],'chemistry/liver/cholestasis/alkaline-phosphatase/');
add('creat','bio','Kreatynina',['mg/dl','µmol/L'],'Pośredni marker filtracji kłębuszkowej, zależny również od masy mięśniowej.','Spadek filtracji z przyczyn przednerkowych, nerkowych lub pozanerkowych.','Mała masa mięśniowa może obniżać stężenie.','Umięśnienie, nawodnienie, metoda oznaczenia i interferencje; ważny jest trend.','Uwzględnij budowę i rasę pacjenta.','Utrata mięśni może maskować pogorszenie filtracji.',['sdma','usg','upc'],'chemistry/kidney/creatinine/');
add('sdma','bio','SDMA',['µg/dl'],'Pośredni marker filtracji kłębuszkowej.','Może towarzyszyć zmniejszonej filtracji; wynik nie określa samodzielnie przyczyny ani przewlekłości.','Niska wartość zwykle nie jest samodzielnym problemem diagnostycznym.','Metoda, zmienność biologiczna i powtarzalność wyniku; pojedynczy wynik nie rozstrzyga rozpoznania.','Nieprawidłowy wynik zestaw z kreatyniną i badaniem moczu.','Oceń trend wraz z kreatyniną i badaniem moczu.',['creat','usg','upc'],'chemistry/kidney/sdma/');
add('usg','urine','Ciężar właściwy moczu',['bez jednostki'],'Gęstość moczu względem wody; pomaga oceniać zagęszczanie w kontekście nawodnienia.','Zagęszczenie moczu; duże ilości glukozy lub białka również wpływają na pomiar.','Rozcieńczenie po płynach lub przy zwiększonym poborze wody; także zaburzenia zagęszczania.','Refraktometr, temperatura, płynoterapia i leki; niski wynik sam nie rozpoznaje choroby nerek.','Zestaw wynik z nawodnieniem i kreatyniną.','Interpretacja wymaga uwzględnienia gatunku oraz nawodnienia.',['creat','sdma','upc'],'urinalysis/concentrating-ability/');
add('upc','urine','UPC · Białko/kreatynina w moczu',['bez jednostki'],'Stosunek stężeń białka i kreatyniny w pojedynczej próbce moczu.','Białkomocz może mieć pochodzenie nerkowe lub pozanerkowe.','Niski wynik zwykle oznacza niewielką utratę białka w tej próbce.','Uwzględnij osad, krwawienie i zapalenie; nie przypisuj każdego wzrostu chorobie kłębuszków.','Oceń utrzymywanie się białkomoczu i ciśnienie tętnicze.','Interpretuj według kryteriów dla kota, z oceną osadu.',['ur-rbc','usg','creat'],'urinalysis/chemical-constituents/');
add('ph','urine','pH moczu',['pH'],'Odczyn moczu.','Dieta, zmiany równowagi kwasowo-zasadowej, niektóre zakażenia lub zmiany podczas przechowywania.','Dieta i zmiany równowagi kwasowo-zasadowej.','Czas do badania, przechowywanie i metoda; sam odczyn nie potwierdza zakażenia.','Zestaw z osadem i objawami.','Zestaw z osadem i objawami.',['ur-rbc','usg'],'urinalysis/chemical-constituents/');
add('ur-rbc','urine','Erytrocyty w osadzie moczu',['/HPF','/µl'],'Krwinki czerwone w moczu oceniane mikroskopowo lub przez analizator.','Krwawienie, zapalenie, uraz, zmiany rozrostowe lub domieszka krwi po pobraniu.','Brak lub niewielka liczba zwykle nie wymaga osobnej interpretacji jako obniżenie.','Cystocenteza i cewnikowanie mogą powodować krwiomocz; w rozcieńczonym moczu krwinki ulegają lizie.','Uwzględnij sposób pobrania i cały osad.','Uwzględnij sposób pobrania i cały osad.',['upc','usg'],'urinalysis/cellular-constituents/');
add('ur-protein','urine','Białko na pasku',['wynik opisowy'],'Półilościowa ocena białka, głównie albuminy.','Nadmiar białka może mieć pochodzenie nerkowe lub pozanerkowe.','Wynik ujemny nie wyklucza niewielkiego białkomoczu.','Uwzględnij ciężar właściwy, odczyn, osad i właściwości paska.','Wynik dodatni zestaw z UPC i osadem.','Wynik dodatni zestaw z UPC i osadem.',['upc','usg','ur-rbc'],'urinalysis/chemical-constituents/');
add('ur-bacteria','urine','Bakterie w osadzie',['wynik opisowy'],'Ocena obecności bakterii w próbce moczu.','Możliwe zakażenie, zanieczyszczenie lub namnażanie podczas przechowywania.','Brak bakterii w osadzie nie wyklucza zakażenia.','Znaczenie zależy od pobrania, przechowywania i sposobu identyfikacji.','Oceń z objawami, leukocytami w osadzie i ewentualnym posiewem.','Oceń z objawami, leukocytami w osadzie i ewentualnym posiewem.',['ur-rbc','ph'],'urinalysis/infectious-agents/');
add('ur-crystals','urine','Kryształy w moczu',['wynik opisowy'],'Ocena rodzaju i ilości kryształów w osadzie.','Wytrącanie zależne od składu i odczynu moczu; kryształy mogą powstać również po pobraniu.','Brak kryształów nie wyklucza kamicy.','Chłodzenie i opóźniona analiza mogą zmieniać obraz.','Krystaluria nie jest równoznaczna z kamicą; uwzględnij typ kryształów.','Krystaluria nie jest równoznaczna z kamicą; uwzględnij typ kryształów.',['ph','usg'],'urinalysis/crystals/');
add('ur-casts','urine','Wałeczki w moczu',['wynik opisowy'],'Struktury powstające w kanalikach nerkowych; istotny jest typ i liczba.','Znaczenie zależy od rodzaju wałeczków; komórkowe lub ziarniste mogą wskazywać na uszkodzenie kanalików.','Brak wałeczków nie wyklucza choroby nerek.','Wałeczki mogą rozpadać się w rozcieńczonym lub zasadowym moczu i podczas przechowywania.','Zestaw typ i ilość z kreatyniną oraz ciężarem właściwym.','Zestaw typ i ilość z kreatyniną oraz ciężarem właściwym.',['creat','usg'],'urinalysis/casts/');
const qualitative={
 'ur-protein':{section:'Badanie chemiczne',options:['Nie oznaczono','Ujemny','Ślad','1+','2+','3+','4+']},
 'ur-bacteria':{section:'Osad moczu',options:['Nie oceniono','Nie stwierdzono','Pojedyncze','Nieliczne','Liczne','Bardzo liczne']},
 'ur-crystals':{section:'Osad moczu',options:['Nie oceniono','Nie stwierdzono','Pojedyncze','Nieliczne','Liczne'],types:['Nie określono','Struwity','Szczawiany wapnia — dwuwodne','Szczawiany wapnia — jednowodne','Moczany amonu','Cystyna','Inne / mieszane']},
 'ur-casts':{section:'Osad moczu',options:['Nie oceniono','Nie stwierdzono','Pojedyncze','Nieliczne','Liczne'],types:['Nie określono','Szkliste','Ziarniste','Nabłonkowe','Erytrocytarne','Leukocytarne','Woskowe','Inne / mieszane']}
};
const aliases={hct:['hematokryt','PCV'],retic:['RET','RETIC','retikulocyty'],wbc:['leukocyty','krwinki biale'],plt:['trombocyty','plytki'],alt:['ALAT','GPT'],alp:['AP','fosfataza alkaliczna'],creat:['CREA','CRE','kreatynina'],sdma:['symetryczna dimetyloarginina'],usg:['SG','USG','gestosc moczu'],upc:['UP/C','UP:UC','bialkomocz'],ph:['odczyn moczu'],'ur-rbc':['RBC mocz','krwiomocz'],'ur-protein':['bialkomocz','bialko mocz'],'ur-bacteria':['bakteriuria'],'ur-crystals':['krystaluria'],'ur-casts':['waleczkomocz']};
const mechanisms={
 hct:{high:[['Względny wzrost','Zmniejszenie objętości osocza, np. odwodnienie.'],['Bezwzględny wzrost','Zwiększona masa erytrocytów.']],low:[['Utrata lub niszczenie krwinek','Krwawienie lub hemoliza.'],['Produkcja / rozcieńczenie','Zmniejszona produkcja erytrocytów albo zwiększona objętość osocza.']]},
 retic:{high:[['Odpowiedź szpiku','Regeneracja po krwawieniu lub hemolizie.']],low:[['Przy niedokrwistości','Niedostateczna odpowiedź szpiku; uwzględnij również wczesną fazę przed regeneracją.']]},
 wbc:{high:[['Reakcja komórkowa','Zapalenie, odpowiedź stresowa lub pobudzenie.'],['Rozrost','Proces rozrostowy układu krwiotwórczego.']],low:[['Zużycie / produkcja','Nasilone zużycie lub zmniejszona produkcja; rozdział leukocytów pomaga określić mechanizm.']]},
 plt:{high:[['Odczynowy','Reaktywny wzrost liczby płytek.'],['Rozrostowy','Rzadziej proces rozrostowy.']],low:[['Pozorny','Agregaty płytek mogą zaniżać wynik.'],['Rzeczywisty','Niszczenie, zużycie lub zmniejszona produkcja.']]},
 alt:{high:[['Wątrobowy','Uszkodzenie hepatocytów — pierwotne lub wtórne.'],['Pozawątrobowy','Przy ciężkim uszkodzeniu mięśni interpretuj razem z CK i AST.']]},
 alp:{high:[['Wątrobowo-żółciowy','Cholestaza.'],['Kostny','Wzrost i aktywność osteoblastów.'],['Indukcja u psa','Wpływ glikokortykosteroidów; interpretacja zależy od gatunku.']]},
 creat:{high:[['Przednerkowy','Zmniejszona perfuzja nerek, np. przy hipowolemii, może zmniejszać filtrację.'],['Nerkowy','Zmniejszona filtracja wskutek choroby nerek; pojedynczy wynik nie określa przewlekłości.'],['Pozanerkowy','Utrudniony odpływ moczu lub wyciek moczu do jam ciała.']],low:[['Produkcja','Mała masa mięśniowa może obniżać stężenie.']]},
 sdma:{high:[['Filtracja','Zmniejszona filtracja kłębuszkowa; oceń przyczynę i powtarzalność odchylenia.']]},
 usg:{high:[['Zagęszczanie / skład','Zagęszczenie moczu lub wpływ dużej ilości substancji, np. glukozy.']],low:[['Fizjologia / leczenie','Większy pobór wody, płynoterapia lub leki.'],['Zdolność zagęszczania','Zaburzenia nerkowe lub pozanerkowe wymagają oceny z nawodnieniem.']]},
 upc:{high:[['Nerkowy','Utrata białka w związku z zaburzeniami kłębuszków lub kanalików.'],['Pozanerkowy','Krwawienie lub zapalenie dróg moczowych może zwiększać wynik.']]},
 ph:{high:[['Skład / przechowywanie','Wpływ diety, równowagi kwasowo-zasadowej lub zmian po pobraniu.'],['Drobnoustroje','Niektóre zakażenia mogą alkalizować mocz; samo pH nie potwierdza zakażenia.']]},
 'ur-rbc':{high:[['Drogi moczowe','Krwawienie, zapalenie, uraz lub zmiany rozrostowe.'],['Pobranie','Domieszka krwi związana z pobraniem próbki.']]}
};
const normalize=s=>String(s).toLocaleLowerCase('pl').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ł/g,'l').trim();
function searchCards(query,group,species){const q=normalize(query);return cards.filter(c=>(!species||!c.species||c.species.includes(species))&&(q?[c.name,c.id,...(aliases[c.id]||[])].some(v=>normalize(v).includes(q)):c.group===group));}
function directionFor(result){return ['low','high','within'].includes(result.status)?result.status:'all';}
const groups={hemo:'Morfologia',bio:'Biochemia',urine:'Badanie moczu'};
const numeric=s=>{const t=String(s??'').trim();return /^(?:\d+(?:[.,]\d+)?|[.,]\d+)$/.test(t)?Number(t.replace(',','.')):NaN;};
function compare({value,lower,upper,unit,upperExclusive=false}){
 if(!String(value??'').trim())return {status:'empty',text:'Wpisz wynik i zakres z laboratorium.'};
 const v=numeric(value),hasLo=String(lower??'').trim()!=='',hasHi=String(upper??'').trim()!=='',lo=hasLo?numeric(lower):null,hi=hasHi?numeric(upper):null;
 if(!Number.isFinite(v)||hasLo&&!Number.isFinite(lo)||hasHi&&!Number.isFinite(hi))return {status:'invalid',text:'Wpisz nieujemne liczby, używając przecinka lub kropki.'};
 if(!String(unit??'').trim())return {status:'invalid',text:'Podaj jednostkę zgodną z wydrukiem laboratorium.'};
 if(!hasLo&&!hasHi)return {status:'empty',text:'Podaj co najmniej jedną granicę z laboratorium.'};
 if(hasLo&&hasHi&&lo>hi)return {status:'invalid',text:'Dolna granica nie może przekraczać górnej.'};
 if(hasLo&&v<lo)return {status:'low',text:'Poniżej podanej dolnej granicy'};
 if(hasHi&&(v>hi||upperExclusive&&v===hi))return {status:'high',text:upperExclusive?'Poza zakresem — wynik musi być mniejszy od górnej granicy':'Powyżej podanej górnej granicy'};
 return hasLo&&hasHi?{status:'within',text:'W podanym zakresie referencyjnym'}:{status:'bound',text:hasHi?'Nie przekracza podanej górnej granicy':'Nie jest poniżej podanej dolnej granicy'};
}
// Zakresy przepisane z tabeli Lab-Wet dla istniejących kart, bez przeliczeń jednostek.
const labwet={
 source:'https://labwet.pl/wartosci-referencyjne/',checked:'21.10.2026',
 ranges:{
  hct:{unit:'L/L',dog:['0,37','0,55'],cat:['0,30','0,45']},
  wbc:{unit:'10⁹/L',dog:['6,0','12,0'],cat:['6,0','18,0']},
  plt:{unit:'10⁹/L',dog:['200','580'],cat:['200','600']},
  retic:{unit:'%',dog:['','1,0'],cat:['','0,6']},
  alt:{unit:'U/L',dog:['5','60'],cat:['10','107']},
  alp:{unit:'U/L',dog:['5','155'],cat:['7','107'],note:'W tabeli Lab-Wet parametr oznaczono jako AP.'},
  creat:{unit:'mg/dl',dog:['0,8','1,7'],cat:['1,0','2,0']}
 }
};
function preset(provider,id,species,unit){
 const r=provider==='labwet'?labwet.ranges[id]:null;if(!r||r.descriptive)return null;
 const variant=unit&&unit!==r.unit?r.variants?.[unit]:r;
 return variant&&variant[species]?{value:'',unit:unit||r.unit,lower:variant[species][0],upper:variant[species][1],upperExclusive:!!variant[species+'Exclusive'],edited:false}:null;
}
// Pełna tabela dla psów i kotów; jednostki źródłowe zachowane bez przeliczeń.
const labwetCatalog=[
 ['wbc','hemo','WBC · Leukocyty','10⁹/L','6,0|12,0','6,0|18,0','Hematologia'],
 ['rbc','hemo','RBC · Erytrocyty','10¹²/L','5,5|8,0','6,5|10,0','Hematologia'],
 ['hgb','hemo','HGB · Hemoglobina','mmol/L','7,45|11,17','6,01|9,31','Hematologia'],
 ['hct','hemo','HCT · Hematokryt','L/L','0,37|0,55','0,30|0,45','Hematologia'],
 ['mcv','hemo','MCV · Średnia objętość erytrocytu','fL','60|77','39|55','Hematologia'],
 ['mch','hemo','MCH · Średnia zawartość hemoglobiny','fmol','1,19|1,49','0,81|1,05','Hematologia'],
 ['mchc','hemo','MCHC · Średnie stężenie hemoglobiny','mmol/L','19,8|22,3','18,6|22,3','Hematologia'],
 ['rdw','hemo','RDW · Zróżnicowanie objętości erytrocytów','%','13|19','13|25','Hematologia'],
 ['plt','hemo','PLT · Płytki krwi','10⁹/L','200|580','200|600','Hematologia'],
 ['mpv','hemo','MPV · Średnia objętość płytki','fL','6|9','13|18','Hematologia'],
 ['esr','hemo','OB · Opad krwinek','mm/h','1|6','2|8','Hematologia'],
 ['bands','hemo','Neutrofile pałeczkowate','10⁹/L','0|0,5','0|0,57','Rozdział leukocytów','0|3','0|3'],
 ['neut','hemo','Neutrofile segmentowane','10⁹/L','3,6|12,7','1,93|14,25','Rozdział leukocytów','60|77','35|75'],
 ['eos','hemo','Eozynofile · Granulocyty kwasochłonne','10⁹/L','0,1|1,65','0|2,28','Rozdział leukocytów','2|10','2|12'],
 ['baso','hemo','Bazofile · Granulocyty zasadochłonne','10⁹/L','0|0','0|0','Rozdział leukocytów','0|0','0|0'],
 ['lymph','hemo','Limfocyty','10⁹/L','0,72|4,95','1,1|10,45','Rozdział leukocytów','12|30','20|55'],
 ['mono','hemo','Monocyty','10⁹/L','0,18|1,65','0,06|0,76','Rozdział leukocytów','1|10','1|4'],
 ['anisocytosis','hemo','Anizocytoza','opis','nie stwierdzono','nie stwierdzono','Obraz krwinek czerwonych'],
 ['polychromasia','hemo','Polichromazja','opis','nie stwierdzono','nie stwierdzono','Obraz krwinek czerwonych'],
 ['poikilocytosis','hemo','Poikilocytoza','opis','nie stwierdzono','nie stwierdzono','Obraz krwinek czerwonych'],
 ['nrbc','hemo','Erytroblasty · Jądrzaste erytrocyty','/100 leukocytów','0|0','0|0','Obraz krwinek czerwonych'],
 ['retic','hemo','Retikulocyty','%','|1,0','|0,6','Obraz krwinek czerwonych'],
 ['pt','hemo','PT · Czas protrombinowy','s','7|14','7|12','Koagulogram'],
 ['aptt','hemo','APTT · Czas kaolinowo-kefalinowy','s','|21','|19','Koagulogram'],
 ['fibrinogen','hemo','Fibrynogen','mg/dl','100|500','50|300','Koagulogram'],
 ['ast','bio','AST · Aminotransferaza asparaginianowa','U/L','3|45','3|44','Chemia kliniczna'],
 ['alt','bio','ALT · Aminotransferaza alaninowa','U/L','5|60','10|107','Chemia kliniczna'],
 ['alp','bio','ALP · Fosfataza alkaliczna','U/L','5|155','7|107','Chemia kliniczna'],
 ['glucose','bio','Glukoza','mg/dl','70|120','100|130','Chemia kliniczna'],
 ['creat','bio','Kreatynina','mg/dl','0,8|1,7','1,0|2,0','Chemia kliniczna'],
 ['urea','bio','Mocznik','mg/dl','20|50','25|70','Chemia kliniczna'],
 ['total-protein','bio','Białko całkowite','g/L','55|75','60|80','Chemia kliniczna'],
 ['bilirubin','bio','Bilirubina całkowita','mg/dl','0,2|0,9','0,2|1,2','Chemia kliniczna'],
 ['albumin','bio','Albumina','g/L','29|43','27|39','Chemia kliniczna'],
 ['ggt','bio','GGT · Gamma-glutamylotransferaza','U/L','5|25','0|10','Chemia kliniczna'],
 ['gldh','bio','GLDH · Dehydrogenaza glutaminianowa','U/L','0|11','0|11','Chemia kliniczna'],
 ['calcium','bio','Wapń całkowity','mg/dl','8,4|11,5','8,0|11,1','Chemia kliniczna'],
 ['phosphorus','bio','Fosfor','mg/dl','2,5|5,9','3,0|6,8','Chemia kliniczna'],
 ['magnesium','bio','Magnez','mg/dl','1,7|2,9','2,1|3,2','Chemia kliniczna'],
 ['cholesterol','bio','Cholesterol całkowity','mg/dl','128|360','77|201','Chemia kliniczna'],
 ['ldh','bio','LDH · Dehydrogenaza mleczanowa','U/L','80|1683','120|1051','Chemia kliniczna'],
 ['ck','bio','CK · Kinaza kreatynowa','U/L','5|467','49|688','Chemia kliniczna'],
 ['triglycerides','bio','Trójglicerydy','mg/dl','18|115','18|159','Chemia kliniczna'],
 ['sodium','bio','Sód','mmol/L','139,1|156,5','143,3|156,5','Chemia kliniczna'],
 ['potassium','bio','Potas','mmol/L','4,1|5,4','4,1|5,6','Chemia kliniczna'],
 ['chloride','bio','Chlorki','mmol/L','98,7|120,6','101,5|123,4','Chemia kliniczna'],
 ['globulin','bio','Globuliny','g/L','28|42','27|45','Chemia kliniczna'],
 ['amylase','bio','Amylaza','U/L','300|1800','433|1600','Chemia kliniczna'],
 ['lipase','bio','Lipaza','U/L','0|135','0|45','Chemia kliniczna'],
 ['fructosamine','bio','Fruktozamina','µmol/L','225|365','190|365','Chemia kliniczna'],
 ['copper','bio','Miedź','µg/dl','20|80','60|140','Chemia kliniczna'],
 ['zinc','bio','Cynk','µg/dl','70|100','54|96','Chemia kliniczna'],
 ['iron','bio','Żelazo','µmol/L','16,8|29,8','12,2|38,5','Chemia kliniczna'],
 ['uric-acid','bio','Kwas moczowy','mg/dl','0,2|0,9','0,0|1,9','Chemia kliniczna'],
 ['t3','bio','T3 · Trijodotyronina','ng/dl','50|160','75|150','Hormony tarczycy'],
 ['t4','bio','T4 · Tyroksyna','ng/ml','15|40','10|30','Hormony tarczycy'],
 ['ft3','bio','fT3 · Wolna trijodotyronina','pg/ml','1,8|2,5','1,8|2,5','Hormony tarczycy'],
 ['ft4','bio','fT4 · Wolna tyroksyna','ng/dl','1|4','1|3','Hormony tarczycy'],
 ['tsh','bio','TSH · Tyreotropina','ng/ml','0,03|0,8','0,03|0,32','Hormony tarczycy'],
 ['cortisol','bio','Kortyzol','nmol/L','27,6|165,5','27,6|137,9','Inne oznaczenia'],
 ['phenobarbital','bio','Luminal · Fenobarbital','µg/ml','15,0|45,0','15|45','Inne oznaczenia'],
 ['insulin','bio','Insulina','µIU/ml','15|20','15|20','Inne oznaczenia'],
 ['estradiol-male','bio','Estradiol · Samiec','pg/ml','0,5|5,0','0,5|5,0','Inne oznaczenia'],
 ['estradiol-female','bio','Estradiol · Samica','pg/ml','15,0|60,0','15,0|60,0','Inne oznaczenia'],
 ['testosterone-male','bio','Testosteron · Samiec','ng/ml','0,5|6,0','0,5|6,0','Inne oznaczenia'],
 ['testosterone-female','bio','Testosteron · Samica','ng/ml','<0,5','<0,5','Inne oznaczenia'],
 ['pth','bio','PTH · Parathormon','pg/ml','9,1|59,0','4,54|18,6','Inne oznaczenia'],
 ['b12','bio','Witamina B12 · Kobalamina','pmol/L','155|362','177|885','Inne oznaczenia'],
 ['tli','bio','TLI · Immunoreaktywność trypsynopodobna','ng/ml','5|35',null,'Inne oznaczenia']
];
function parseReference(value){if(value===null)return null;if(value.startsWith('<'))return {lower:'',upper:value.slice(1),upperExclusive:true};const [lower,upper]=value.split('|');return {lower,upper};}
for(const [id,group,name,unit,dog,cat,section,dogPercent,catPercent] of labwetCatalog){
 const descriptive=unit==='opis';
 const r=descriptive?{unit:'wynik opisowy',descriptive:true,dogText:dog,catText:cat}:{unit,dog:dog===null?null:[parseReference(dog).lower,parseReference(dog).upper],cat:cat===null?null:[parseReference(cat).lower,parseReference(cat).upper],dogExclusive:dog!==null&&!!parseReference(dog).upperExclusive,catExclusive:cat!==null&&!!parseReference(cat).upperExclusive};
 if(dogPercent)r.variants={'%':{dog:dogPercent.split('|'),cat:catPercent.split('|')}};
 labwet.ranges[id]=r;
 let card=cards.find(c=>c.id===id);
 if(!card){card={id,group,name,units:[descriptive?'wynik opisowy':unit],what:section+' — parametr z tabeli zakresów Lab-Wet.',high:'',low:'',factors:'',dog:'',cat:'',related:[],source:labwet.source,referenceOnly:true};cards.push(card);}
 card.section=section;if(dogPercent)card.units=[unit,'%'];
 if(descriptive){qualitative[id]={section,options:['Nie oceniono','Nie stwierdzono','Obecne','Nasilone']};card.units=['wynik opisowy'];}
}
Object.assign(aliases,{rbc:['erytrocyty','krwinki czerwone'],hgb:['HGB','HB','hemoglobina'],bands:['BAND','paleczki'],neut:['NEU','NEUT','segmenty'],eos:['EOS'],baso:['BASO'],lymph:['LYM','LYMPH'],mono:['MONO'],ast:['ASPAT','ASAT','GOT'],glucose:['GLU','glikemia'],urea:['UREA','mocznik'],albumin:['ALB','albuminy'],bilirubin:['BIL','TBIL'],sodium:['Na'],potassium:['K'],chloride:['Cl'],calcium:['Ca'],phosphorus:['P','fosforany'],magnesium:['Mg'],ck:['CPK'],triglycerides:['TG','triglicerydy'],phenobarbital:['fenobarbital','luminal'],b12:['kobalamina'],anisocytosis:['anizocytoza'],polychromasia:['polichromazja'],poikilocytosis:['poikilocytoza']});
cards.push({id:'folate',group:'bio',name:'Witamina B9 · Foliany',units:['µg/L'],section:'Witaminy i trzustka',species:['dog','cat']},{id:'cpl',group:'bio',name:'cPL · Lipaza trzustkowa psa',units:['µg/L'],section:'Trzustka',species:['dog']},{id:'fpl',group:'bio',name:'fPL · Lipaza trzustkowa kota',units:['µg/L'],section:'Trzustka',species:['cat']});
Object.assign(aliases,{folate:['B9','folate','foliany','kwas foliowy','witamina B9'],tli:['cTLI','fTLI','trypsynogen','trypsyna','trzustka'],cpl:['cPLI','Spec cPL','PLI','lipaza trzustkowa','trzustka'],fpl:['fPLI','Spec fPL','PLI','lipaza trzustkowa','trzustka']});
// Kolejność odpowiada sekcjom tabeli; zachowujemy dodatkowe istniejące karty.
cards.sort((a,b)=>{const groupsOrder={hemo:0,bio:1,urine:2};if(a.group!==b.group)return groupsOrder[a.group]-groupsOrder[b.group];const ia=labwetCatalog.findIndex(r=>r[0]===a.id),ib=labwetCatalog.findIndex(r=>r[0]===b.id);return (ia<0?999:ia)-(ib<0?999:ib);});
// Interpretacje są oddzielone od tabel zakresów i nie zmieniają wartości laboratoryjnych.
const knowledge=window.LaboratoryKnowledge||{};
const reading=window.LaboratoryReading||{};
for(const card of cards){
 const k=knowledge[card.id];if(!k)continue;
 Object.assign(card,{what:k.what,high:k.high.map(r=>r.join(': ')).join(' '),low:k.low.map(r=>r.join(': ')).join(' '),factors:k.factors,context:k.context,dog:k.dog||k.context,cat:k.cat||k.context,related:k.related,source:k.sources[0],sources:k.sources,referenceOnly:false});
 mechanisms[card.id]={high:k.high,low:k.low};
}
const sourceLabel=url=>url.includes('eclinpath.com')?'Cornell / eClinPath':url.includes('vet.cornell.edu')?'Cornell — Animal Health Diagnostic Center':url.includes('cvm.msu.edu')?'Michigan State University — VDL':url.includes('tvmdl.tamu.edu')?'Texas A&M — TVMDL':url.includes('tamu.edu')?'Texas A&M — materiały weterynaryjne':url.includes('merckvetmanual.com')?'Merck Veterinary Manual':url.includes('aaha.org')?'AAHA — wytyczne':url.includes('academic.oup.com')?'ACVIM — konsensus':url.includes('sciencedirect.com')?'Publikacja: OB u psów':url.includes('pubmed.ncbi.nlm.nih.gov/36581149')?'Publikacja: OB u psów':url.includes('pmc.ncbi.nlm.nih.gov/articles/PMC6524396')?'ACVIM — konsensus hepatologiczny':url.includes('pubmed.ncbi.nlm.nih.gov')?'Publikacja: oznaczanie cynku':url.includes('labwet.pl')?'Lab-Wet — zakresy':'Materiał źródłowy';
window.VetLaboratory={cards,compare,numeric,labwet,preset,labwetCatalog,qualitative,searchCards,directionFor,mechanisms,knowledge,reading};
if(typeof document==='undefined')return;
const root=document.getElementById('vp-blood');if(!root)return;
root.innerHTML=`<p class="vp-eyebrow">KREW I MOCZ</p><h1>Laboratorium</h1><p class="vp-lead">Poznaj fizjologię parametrów i mechanizmy ich zmian.</p><div class="vl-controls"><fieldset class="vp-species"><legend>Gatunek</legend><label><input type="radio" name="vl-species" value="dog" checked><span>🐶 Pies</span></label><label><input type="radio" name="vl-species" value="cat"><span>🐱 Kot</span></label></fieldset><label class="vl-search" for="vl-search">Szukaj we wszystkich działach<input id="vl-search" type="search" placeholder="np. ALAT, AP, PCV, bakterie…" autocomplete="off"></label></div><div class="vl-tabs" role="group" aria-label="Dział laboratorium">${Object.entries(groups).map(([id,name])=>`<button type="button" data-vl-group="${id}">${name}</button>`).join('')}</div><div class="vl-layout"><aside class="vl-list-wrap" aria-label="Parametry"><p id="vl-count" class="vl-muted" role="status"></p><div id="vl-list"></div></aside><article id="vl-card" class="vl-card" aria-label="Karta parametru"></article></div>`;
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let group='bio',selected='creat',species='dog';const drafts={};
const key=()=>species+':'+selected;
const draft=()=>drafts[key()]||(drafts[key()]={direction:'high'});
function tabs(){root.querySelectorAll('[data-vl-group]').forEach(b=>b.setAttribute('aria-pressed',!$('vl-search').value.trim()&&b.dataset.vlGroup===group));}
function renderList(){const q=$('vl-search').value,list=searchCards(q,group,species);tabs();$('vl-count').textContent=list.length?(q.trim()?'Wszystkie działy · ':'')+'Parametry: '+list.length:'Brak pasujących parametrów.';if(!list.some(c=>c.id===selected))selected=list[0]?.id||null;$('vl-list').innerHTML=list.map(c=>`<button type="button" data-vl-id="${c.id}" aria-pressed="${c.id===selected}"><strong>${esc(c.name.split(' · ')[0])}</strong><span>${esc(q.trim()?[c.name.split(' · ')[1],groups[c.group]].filter(Boolean).join(' · '):c.name.split(' · ')[1]||c.section||groups[c.group])}</span></button>`).join('');renderCard();}
function renderCreatinine(){
 const d=draft();if(!['high','low','within'].includes(d.direction))d.direction='high';
 const paragraphs=items=>items.map(p=>`<p>${p}</p>`).join('');
 const content={
 high:{title:'Podwyższona kreatynina',rows:[['Przednerkowo — mniej krwi dociera do nerek','Hipowolemia i obniżona perfuzja mogą zmniejszać filtrację bez pierwotnego uszkodzenia miąższu. Oceń nawodnienie i krążenie. Długotrwała hipoperfuzja może jednak prowadzić do uszkodzenia nerek; mechanizmy mogą współistnieć.'],['Nerkowo — zmniejszona filtracja w samych nerkach','Możliwa jest ostra lub przewlekła choroba nerek, a także zaostrzenie choroby przewlekłej. Sama wysokość kreatyniny nie określa czasu trwania ani odwracalności procesu. Zestaw wynik z wywiadem, diurezą, badaniem moczu i obrazowaniem.'],['Pozanerkowo — odpływ lub szczelność dróg moczowych','Niedrożność dróg moczowych albo wyciek moczu do jam ciała mogą powodować azotemię. Oceń oddawanie moczu, pęcherz i drogi moczowe. Brak oddawania moczu wymaga pilnej oceny, również pod kątem zaburzeń elektrolitowych.']],attention:'Ciężar właściwy moczu interpretuj w kontekście nawodnienia i wcześniejszej płynoterapii. Samo zagęszczenie moczu nie rozstrzyga wszystkich przypadków. Wysoka kreatynina nie oznacza automatycznie przewlekłej choroby nerek.'},
 low:{title:'Obniżona kreatynina',rows:[['Mniejsza produkcja','Niewielka masa mięśniowa, utrata mięśni i wyniszczenie mogą obniżać stężenie. Oceń umięśnienie, a nie tylko masę ciała.'],['Wynik pozornie niski','Interferencje zależą od metody oznaczenia; znaczna bilirubinemia może zaniżać wynik. Nie przypisuj każdej niskiej wartości poprawie filtracji.']],attention:'U pacjenta z zanikiem mięśni choroba nerek może pozostawać zamaskowana. Porównaj trend, SDMA i badanie moczu; mała kreatynina sama nie oznacza nadmiernej sprawności nerek.'},
 within:{title:'Kreatynina w zakresie referencyjnym',rows:[['Zakres populacyjny a punkt wyjścia pacjenta','Wartość mieszcząca się w zakresie nie wyklucza wczesnej choroby nerek. Utrzymujący się wzrost względem wcześniejszych wyników może być istotny, nawet bez przekroczenia górnej granicy.'],['Szerszy obraz','Oceń SDMA, zdolność zagęszczania moczu, białkomocz i obraz nerek. Zmiany strukturalne lub czynnościowe mogą występować bez azotemii.']],attention:'Staging IRIS stosuje się po rozpoznaniu przewlekłej choroby nerek, u odpowiednio ocenionego, stabilnego pacjenta. Nie zastępuje on ustalenia przyczyny zmiany kreatyniny.'}
 };
 const view=content[d.direction];
 $('vl-card').classList.add('vl-reading-card');
 $('vl-card').innerHTML=`<header class="vl-card-head"><span>BIOCHEMIA · ${species==='cat'?'KOT':'PIES'}</span><h2 tabindex="-1">Kreatynina</h2><p>Marker filtracji kłębuszkowej, którego znaczenie zależy również od mięśni i stanu pacjenta.</p></header><section class="vl-reading-section"><h3>Fizjologia i mechanizm</h3>${paragraphs(['Kreatynina powstaje podczas przemian kreatyny i fosfokreatyny w mięśniach. Jej produkcja jest u danego zwierzęcia względnie stała, ale zależy od masy mięśniowej. Dlatego identyczne stężenie u umięśnionego psa i wyniszczonego kota nie musi oznaczać takiej samej filtracji.','Jest swobodnie filtrowana w kłębuszkach, bez istotnego zwrotnego wchłaniania u psów i kotów. Gdy filtracja kłębuszkowa (GFR) maleje, kreatynina gromadzi się we krwi. Zależność jest nieliniowa: początkowy spadek GFR może nie powodować wyraźnego wzrostu stężenia.','Kreatynina jest przede wszystkim wskaźnikiem wydalania, a nie bezpośrednim pomiarem uszkodzenia komórek nerek. Jej stężenie nie wskazuje konkretnej choroby i nie wyjaśnia samo objawów mocznicy. Ważna jest równoczesna ocena produkcji, filtracji oraz odpływu moczu.'])}</section><section class="vl-reading-section"><h3>Interpretacja</h3><div class="vl-directions" role="group" aria-label="Kierunek odchylenia">${[['high','Podwyższony'],['low','Obniżony'],['within','W zakresie']].map(([id,label])=>`<button type="button" data-vl-direction="${id}" aria-pressed="${d.direction===id}">${label}</button>`).join('')}</div><div class="vl-reading-interpretation" aria-live="polite"><h3>${view.title}</h3>${view.rows.map(([title,text])=>`<h4>${title}</h4><p>${text}</p>`).join('')}<aside class="vl-reading-attention"><strong>Na co zwrócić uwagę</strong><p>${view.attention}</p></aside></div></section><section class="vl-reading-section"><h3>Co może zmienić ocenę</h3><p>Uwzględnij umięśnienie, dietę i jakość próbki. Metoda Jaffégo i metody enzymatyczne różnią się podatnością na interferencje; przy niezgodności z obrazem klinicznym sprawdź uwagi laboratorium. Trend najlepiej oceniać w porównywalnych warunkach.</p><p>Łączna ocena obejmuje mocznik, SDMA, badanie moczu z osadem, UPC oraz ciśnienie tętnicze. UPC wymaga oceny źródła białkomoczu. Zakres referencyjny z raportu jest kontekstem, a nie samodzielnym kryterium rozpoznania.</p></section><footer class="vl-reading-sources"><span>Materiały źródłowe</span><a href="https://eclinpath.com/chemistry/kidney/creatinine/" target="_blank" rel="noopener">Cornell · Kreatynina ↗</a><a href="https://eclinpath.com/chemistry/kidney/azotemia/" target="_blank" rel="noopener">Cornell · Azotemia ↗</a><a href="https://www.iris-kidney.com/iris-staging-system" target="_blank" rel="noopener">IRIS · Ocena choroby nerek ↗</a></footer>`;
}

function renderCard(){
 root.classList.add('vl-reading-mode');
 const c=cards.find(c=>c.id===selected),card=$('vl-card');card.classList.remove('vl-reading-card');
 if(!c){card.innerHTML='<h2>Nie znaleziono parametru</h2><p>Zmień wyszukiwanie lub wybierz inny dział.</p>';return;}
 if(selected==='creat'){renderCreatinine();return;}
 const d=draft(),k=knowledge[c.id],r=reading[c.id],q=qualitative[c.id];
 if(!['high','low','within'].includes(d.direction)||q&&d.direction==='within')d.direction='high';
 const labels=q?[['high','Obecność / nasilenie'],['low','Brak / niewielkie nasilenie']]:c.id==='pt'||c.id==='aptt'?[['high','Wydłużony'],['low','Skrócony'],['within','W zakresie']]:c.id==='ph'?[['high','Wyższe pH'],['low','Niższe pH'],['within','Ocena w kontekście']]:[['high','Podwyższony'],['low','Obniżony'],['within',c.id==='phenobarbital'?'W zakresie terapeutycznym':'W zakresie']];
 const rows=d.direction==='within'?[]:(k[d.direction]||[]).filter(([name])=>species!=='cat'||name!=='Indukcja u psa');
 const title=d.direction==='within'?labels[2][1]:q?(d.direction==='high'?'Znaczenie obecności lub nasilenia':'Znaczenie braku lub małego nasilenia'):d.direction==='high'?(c.id==='pt'||c.id==='aptt'?'Przyczyny wydłużenia':'Mechanizmy wzrostu'):(c.id==='pt'||c.id==='aptt'?'Znaczenie skrócenia':'Mechanizmy obniżenia');
 card.classList.add('vl-reading-card');
 card.innerHTML=`<header class="vl-card-head"><span>${esc(c.section||groups[c.group])} · ${species==='cat'?'KOT':'PIES'}</span><h2 tabindex="-1">${esc(c.name)}</h2><p>${esc(c.what)}</p></header><section class="vl-reading-section"><h3>${c.id==='phenobarbital'?'Co oznacza stężenie leku':'Fizjologia i mechanizm'}</h3>${r.physiology.map(p=>`<p>${esc(p)}</p>`).join('')}</section><section class="vl-reading-section"><h3>Interpretacja</h3><div class="vl-directions" role="group" aria-label="Kierunek odchylenia">${labels.map(([id,label])=>`<button type="button" data-vl-direction="${id}" aria-pressed="${d.direction===id}">${label}</button>`).join('')}</div><div class="vl-reading-interpretation" aria-live="polite"><h3>${title}</h3>${d.direction==='within'?`<p>${esc(r.within)}</p>`:rows.map(([name,text])=>`<h4>${esc(name)}</h4><p>${esc(text)}</p>`).join('')}<aside class="vl-reading-attention"><strong>Na co zwrócić uwagę</strong><p>${esc(r.attention)}</p>${d.direction!=='within'?`<p>${esc(c.context)}</p>`:''}</aside></div></section><section class="vl-reading-section"><h3>Jak łączyć wyniki</h3><p>${esc(r.analysis)}</p></section><section class="vl-reading-section"><h3>Co może zmienić ocenę</h3><p>${esc(c.factors)}</p>${k[species]?`<h4>Ważne dla ${species==='cat'?'kota':'psa'}</h4><p>${esc(k[species])}</p>`:''}</section>${c.related.length?`<section class="vl-reading-section vl-related"><h3>Interpretuj łącznie</h3><div>${c.related.filter(id=>{const p=cards.find(p=>p.id===id);return !p.species||p.species.includes(species);}).map(id=>`<button type="button" data-vl-related="${id}">${esc(cards.find(p=>p.id===id).name)} ↗</button>`).join('')}</div></section>`:''}<footer class="vl-reading-sources"><span>Materiały źródłowe</span>${c.sources.map((url,i)=>`<a href="${esc(url)}" target="_blank" rel="noopener">${esc(sourceLabel(url))}${c.sources.length>1?' · '+(i+1):''} ↗</a>`).join('')}</footer>`;
}
root.addEventListener('click',e=>{
 const g=e.target.closest('[data-vl-group]');if(g){group=g.dataset.vlGroup;$('vl-search').value='';renderList();return;}
 const b=e.target.closest('[data-vl-id],[data-vl-related]');if(b){selected=b.dataset.vlId||b.dataset.vlRelated;group=cards.find(c=>c.id===selected).group;if(b.dataset.vlRelated)$('vl-search').value='';renderList();if(b.dataset.vlRelated)$('vl-card').querySelector('h2').focus();return;}
 const dir=e.target.closest('[data-vl-direction]');if(dir){draft().direction=dir.dataset.vlDirection;renderCard();root.querySelector(`[data-vl-direction="${dir.dataset.vlDirection}"]`)?.focus({preventScroll:true});}
});
root.addEventListener('input',e=>{if(e.target.id==='vl-search')renderList();});
root.addEventListener('change',e=>{if(e.target.name==='vl-species'){species=e.target.value;renderList();}});
renderList();
})();
