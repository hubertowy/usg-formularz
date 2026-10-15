/* Unijne ChPLW, oficjalny rejestr ÚSKVBL; tabele sprawdzone również wizualnie 14.10.2026. */
window.DermatologyDrugs=(()=>{
 const make=(common,rows,forms=[['film','tabletki powlekane']])=>rows.flatMap(([mg,bands])=>forms.map(([form,label])=>({...common,id:common.name.toLowerCase()+'-'+mg+'-'+form,mg,strength:String(mg).replace('.',',')+' mg · '+label,bands,kind:'tabletBands',library:'vet',species:['dog'],checked:'14.10.2026',minimumTableWeight:3})));
 const indications='Świąd w alergicznym zapaleniu skóry oraz objawy atopowego zapalenia skóry u psów.';
 return [
 ...make({name:'Zenrelia',substance:'ilunocitinib',aliases:'JAK dermatologia',doseRange:[.6,.8],frequency:'Raz na dobę',ageNotice:'Bezpieczeństwo niebadane poniżej 12 miesięcy.',source:'https://www.uskvbl.cz/attachments/spc/0910f7c781c94ff8.pdf',indications,weightNotice:'Bezpieczeństwo niebadane poniżej 3 kg. Stosowanie wymaga oceny korzyści i ryzyka; kalkulator nie dobiera tabletek.',outsideNotice:'Poza tabelą tej mocy. Od 75 kg ChPLW przewiduje odpowiednią kombinację mocy, ustalaną indywidualnie. Nie zaokrąglamy masy automatycznie.',notes:'Doustnie, z pokarmem lub bez. Wszystkie moce podzielne na równe połowy. Czas leczenia zależy od indywidualnej oceny.',cautions:'Nie stosować przy immunosupresji, nadwrażliwości, złośliwym nowotworze ani demodekozie. Monitorować infekcje i nowotwory. Nie zaleca się w ciąży, laktacji i u zwierząt hodowlanych. Opis wpływu na odpowiedź poszczepienną: ChPLW.'},[
 [4.8,[[3,4,.5],[6.6,8,1]]],
 [6.4,[[4.1,5.3,.5],[8.1,10.6,1],[14.2,16,1.5]]],
 [8.5,[[5.4,6.5,.5],[10.7,14.1,1],[16.1,19.5,1.5],[25,28.3,2]]],
 [15,[[19.6,24.9,1],[28.4,37.4,1.5],[37.5,49.9,2],[50,62.4,2.5],[62.5,74.9,3]]]
 ]),
 ...make({name:'Apoquel',substance:'oclacitinib',aliases:'oklacytynib JAK dermatologia',doseRange:[.4,.6],frequency:'Początkowo 2× dziennie (do 14 dni); podtrzymująco 1× dziennie',stages:[['Początek leczenia','2 razy dziennie przez maksymalnie 14 dni'],['Leczenie podtrzymujące','Raz na dobę']],ageNotice:'Nie stosować poniżej 12 miesięcy życia.',weightNotice:'Nie stosować u psów o masie poniżej 3 kg.',source:'https://www.uskvbl.cz/attachments/spc/0910f7c78024e66a.pdf',indications,outsideNotice:'Ta masa nie mieści się w tabeli dla tej mocy (tabela obejmuje 3–80 kg). Wybierz odpowiednią moc; poza tabelą dawkę ustala lekarz. Nie zaokrąglamy masy automatycznie.',notes:'Doustnie, z pokarmem lub bez. Tabletki powlekane i do rozgryzania i żucia: te same moce oraz dawkowanie, podzielne na równe połowy.',cautions:'Nie stosować przy immunosupresji lub postępującym złośliwym nowotworze. Monitorować infekcje i nowotwory; przy długim leczeniu kontrolować morfologię i biochemię. Nie zaleca się w ciąży, laktacji i u zwierząt hodowlanych. Wpływ na szczepienia: ChPLW.'},[
 [3.6,[[3,4.4,.5],[6,8.9,1]]],
 [5.4,[[4.5,5.9,.5],[9,13.4,1],[20,26.9,2]]],
 [16,[[13.5,19.9,.5],[27,39.9,1],[40,54.9,1.5],[55,80,2]]]
 ],[['film','tabletki powlekane'],['chew','tabletki do rozgryzania i żucia']]),
 ...make({name:'Numelvi',substance:'atinvicitinib',aliases:'JAK dermatologia',doseRange:[.8,1.2],frequency:'Raz na dobę',ageNotice:'Bezpieczeństwo niebadane poniżej 6 miesięcy.',weightNotice:'Bezpieczeństwo niebadane poniżej 3 kg. Ocena korzyści i ryzyka należy do lekarza. Poniżej 2 kg dostępne moce nie pozwalają na dokładne dawkowanie.',source:'https://www.uskvbl.cz/attachments/spc/0910f7c781d8cf2d.pdf',indications,outsideNotice:'Poza tabelą tej mocy (tabela obejmuje 3–79 kg). ChPLW dopuszcza dobór kombinacji całych i połówek tabletek do 0,8–1,2 mg/kg, ustalany indywidualnie. Nie zaokrąglamy masy automatycznie.',notes:'Doustnie raz dziennie, podczas karmienia lub w jego okolicy. Wszystkie moce podzielne na równe połowy. Potrzeba długiego leczenia wymaga indywidualnej oceny.',cautions:'Przy immunosupresji lub postępującym złośliwym nowotworze bezpieczeństwo niebadane — konieczna ocena korzyści i ryzyka. Nie zaleca się w ciąży, laktacji i u zwierząt hodowlanych. Zbadać i leczyć zakażenia oraz pierwotne przyczyny zapalenia skóry.'},[
 [4.8,[[4.4,6,1]]],
 [7.2,[[3,4.3,.5],[6.1,9,1]]],
 [21.6,[[9.1,13.5,.5],[19.4,26.5,1]]],
 [31.6,[[13.6,19.3,.5],[26.6,39.5,1],[39.6,54,1.5],[54.1,79,2]]]
 ],[['tablet','tabletki']])
 ];
})();
