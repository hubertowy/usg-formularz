/* Dane ręcznie zweryfikowane w polskich ChPLW KRKA, 14.10.2026.
   Wartości dawek dotyczą sumy amoksycyliny i kwasu klawulanowego.
   Przedziały odwzorowują tabelę dosłownie; nie interpolujemy jej luk. */
window.VetDrugs=(()=>{
const sources=[
'https://www.krka-polska.pl/_assets/Cladaxxa_40mg10mg_ChWPL_.pdf',
'https://www.krka-polska.pl/_assets/Cladaxxa-200-mg_50-mg_chplw.pdf',
'https://www.krka-polska.pl/_assets/Cladaxxa-400-mg_100-mg_chplw.pdf'];
const entries=[
{id:'cladaxxa-50',name:'Cladaxxa',amoxicillin:40,clavulanic:10,species:['dog','cat'],source:sources[0],bands:[[1,2,.5],[2.1,4,1],[4.1,6,1.5],[6.1,8,2]],min:1,max:8,below:'Tabela producenta zaczyna się od 1 kg.',above:'Według ChPLW użyj mocy 200/50 mg lub 400/100 mg (ta ostatnia tylko dla psów).'},
{id:'cladaxxa-250',name:'Cladaxxa',amoxicillin:200,clavulanic:50,species:['dog','cat'],source:sources[1],bands:[[8.1,10,.5],[10.1,20,1],[20.1,30,1.5],[30.1,40,2]],min:8.1,max:40,below:'Według ChPLW dla masy do 8 kg użyj mocy 40/10 mg.',above:'Według ChPLW użyj mocy 400/100 mg (tylko dla psów).'},
{id:'cladaxxa-500',name:'Cladaxxa',amoxicillin:400,clavulanic:100,species:['dog'],source:sources[2],bands:[[30.1,40,1],[40.1,60,1.5],[60.1,80,2]],min:30.1,max:80,below:'Według ChPLW dla masy do 30 kg użyj mocy 40/10 mg lub 200/50 mg.',above:'Tabela producenta kończy się na 80 kg. Liczbę tabletek ustala lekarz.'}
].map(d=>({...d,library:'vet',checked:'14.10.2026',substance:'amoksycylina + kwas klawulanowy',indications:'Zakażenia bakteryjne wrażliwe: skóra, tkanki miękkie, zęby, układ moczowy, oddechowy i jelita.'}));
entries.push({id:'rapidexon-2',name:'Rapidexon',library:'vet',kind:'injection',species:['dog','cat'],substance:'deksametazon',concentration:2,mgPerKg:.1,checked:'14.10.2026',source:'https://rejestry.ezdrowie.gov.pl/api/rpl/medicinal-products/20028/characteristic',indications:'Stany zapalne lub alergiczne.',notes:'Dawka uśredniona z ChPLW; lekarz dostosowuje ją do nasilenia i czasu trwania objawów. Dla psów i kotów: domięśniowo, fiolka 25 ml. Dla objętości poniżej 1 ml użyj strzykawki z odpowiednią podziałką. ChPLW nie ustala tu stałego odstępu między kolejnymi podaniami ani długości terapii.',cautions:'Przeciwwskazania obejmują m.in. wiremię, uogólnione grzybice, owrzodzenia przewodu pokarmowego lub rogówki i demodekozę. Poza nagłymi przypadkami nie stosować przy cukrzycy, niewydolności nerek/serca, hiperadrenokortycyzmie i osteoporozie. Nie stosować w ciąży ani łącznie ze szczepionkami lub przez 2 tygodnie po szczepieniu. NLPZ zwiększają ryzyko owrzodzeń. Pełne ograniczenia i interakcje: ChPLW.'});
entries.push(...(window.ExtraDrugs||[]));
entries.push(...[20,60,100].map(mg=>({id:'galliprant-'+mg,name:'Galliprant',kind:'tabletBands',library:'vet',species:['dog'],strength:mg+' mg',mg,substance:'grapiprant',checked:'14.10.2026',source:'https://www.uskvbl.cz/attachments/spc/0910f7c7806dc93d.pdf',bands:mg===20?[[3.6,6.8,.5],[6.9,13.6,1]]:mg===60?[[13.7,20.4,.5],[20.5,34,1]]:[[34.1,68,1],[68.1,100,2]],ageNotice:'Bezpieczeństwo nieustalone poniżej 9 miesięcy.',indications:'Ból związany z łagodną lub umiarkowaną osteoartrozą u psów.',notes:'Doustnie raz na dobę, na czczo, co najmniej godzinę przed posiłkiem. Dawka docelowa 2 mg/kg; liczba tabletek według przedziałów ChPLW. Tabletki 20 i 60 mg podzielne na połowy; 100 mg bez podziału. Bez poprawy po 14 dniach przerwać leczenie i ocenić inne możliwości.',cautions:'Nie stosować u ciężarnych, karmiących ani zwierząt hodowlanych. Unikać łączenia z innymi lekami przeciwzapalnymi. Ostrożność przy chorobach nerek, wątroby, serca i żołądka. Bezpieczeństwo nieustalone poniżej 9 miesięcy i 3,6 kg.'})));
entries.push(...(window.VetSupplements||[]));
entries.push(...(window.DermatologyDrugs||[]));
entries.push(...(window.HumanDrugs||[]));
entries.push(...(window.ThyroidDrugs||[]));
entries.push(...(window.SteroidDrugs||[]));
function parseWeight(raw){const s=String(raw).trim();if(!s)return {status:'empty'};if(!/^\d+(?:[.,]\d+)?$/.test(s))return {status:'invalid'};const kg=Number(s.replace(',','.'));return Number.isFinite(kg)&&kg>0?{status:'valid',kg}:{status:'invalid'};}
function calculate(d,species,raw,schemeId,ageRaw){if(d.kind==='schemes')return calculateScheme(d,species,raw,schemeId,ageRaw);if(!d.species.includes(species))return {status:'species'};const p=parseWeight(raw);if(p.status!=='valid')return p;const kg=p.kg;
if(d.kind==='dailyTablets'){
 const mgRange=d.doseRange.map(rate=>kg*rate);
 const lo=Math.max(1,Math.ceil(mgRange[0]/d.mg*4-1e-10)),hi=Math.floor(mgRange[1]/d.mg*4+1e-10);
 if(!mgRange.every(Number.isFinite)||!Number.isSafeInteger(lo)||!Number.isSafeInteger(hi))return {status:'invalid'};
 return {status:'dailyTablets',kg,mgRange,quarters:lo<=hi?[lo/4,hi/4]:null};
}
if(d.kind==='initialTablets'){
 const special=d.name==='Forthyron'&&kg<5;
 const make=(ug,frequency,label)=>{const quotient=ug/d.ug;return {ug,frequency,label,tablets:Math.abs(quotient*4-Math.round(quotient*4))<1e-9&&quotient>=.25?Math.round(quotient*4)/4:null};};
 const doses=special?[make(50,'Raz na dobę','Pies poniżej 5 kg')]:d.name==='Forthyron'?[make(kg*10,'Co 12 godzin','Dawka początkowa')]:[make(kg*20,'Raz na dobę','Wariant 1 — jedno podanie'),make(kg*10,'2 razy dziennie','Wariant 2 — dwa równe podania')];
 if(!doses.every(v=>Number.isFinite(v.ug)))return {status:'invalid'};
 if(special&&d.ug!==200)doses[0].tablets=null;
 // Veterinarian-configured upward rounding proposal, separate from the label calculation.
 const quarterCount=d.name==='Forthyron'&&!special?Math.ceil(doses[0].ug/d.ug*4-1e-10):null;
 const proposal=quarterCount!==null&&Number.isSafeInteger(quarterCount)&&quarterCount>0?{tablets:quarterCount/4,ug:quarterCount/4*d.ug,rounded:Math.abs(quarterCount/4*d.ug-doses[0].ug)>1e-8}:null;
 return {status:'initialTablets',kg,doses,special,proposal,dailyUg:special?50:kg*20,precisionNotice:d.tabletCautionBelow&&kg<d.tabletCautionBelow?`Dla mocy ${d.ug} µg ustalenie optymalnej dawki poniżej ${d.tabletCautionBelow} kg może być niemożliwe ze względu na podzielność tabletek.`:''};
}
if(d.kind==='humanTablets'){
 const mgRange=d.doseRange.map(rate=>kg*rate),tablets=mgRange.map(mg=>mg/d.mg);
 if(![...mgRange,...tablets].every(Number.isFinite))return {status:'invalid'};
 // Only quarter increments inside the prescribed range; never round outward.
 const lo=Math.max(1,Math.ceil(tablets[0]*4-1e-10)),hi=Math.floor(tablets[1]*4+1e-10);
 if(!Number.isSafeInteger(lo)||!Number.isSafeInteger(hi))return {status:'invalid'};
 const quarters=lo<=hi?{range:[lo/4,hi/4],count:hi-lo+1,mgRange:[lo/4*d.mg,hi/4*d.mg]}:null;
 return {status:'humanTablets',kg,mgRange,tablets,quarters,frequency:d.frequency};
}
if(d.kind==='supplement'){
 const capsules=d.perKg?Math.ceil(kg/d.perKg):(kg<10?1:kg<=d.threshold?2:3);
 if(!Number.isFinite(capsules))return {status:'invalid'};
 // Full capsules for each started weight interval, as configured by the veterinarian.
 return {status:'supplement',kg,capsules};
}
if(d.kind==='tabletBands'){
 if(kg<(d.minimumTableWeight||3.6))return {status:'blocked',message:d.weightNotice||'Bezpieczeństwo nieustalone poniżej 3,6 kg; brak automatycznego wyliczenia.'};
 const b=d.bands.find(([lo,hi])=>kg>=lo&&kg<=hi);
 return b?{status:'tabletBands',frequency:d.stages?'początkowo 2×, potem 1× dziennie':d.frequency,kg,tablets:b[2],range:b.slice(0,2),actualTotal:b[2]*d.mg,targetMg:d.doseRange?null:kg*2,mgRange:d.doseRange?.map(rate=>rate*kg)}:{status:'outside',message:d.outsideNotice||'Ta masa nie mieści się w tabeli dla tej mocy. Wybierz inną moc lub ustal dawkę indywidualnie; nie zaokrąglamy masy.'};
}
if(d.kind==='injection')return {status:'injection',kg,mg:kg*d.mgPerKg,ml:kg*d.mgPerKg/d.concentration};const base={kg,amoxicillin:kg*10,clavulanic:kg*2.5,total:kg*12.5};const band=d.bands.find(([lo,hi])=>kg>=lo&&kg<=hi);if(band)return {...base,status:'table',tablets:band[2],range:[band[0],band[1]],actualTotal:band[2]*(d.amoxicillin+d.clavulanic)};
// Small gaps (e.g. 2.05 kg) and out-of-table weights must never acquire a rounded dose.
let message='Ta dokładna masa nie mieści się w przedziałach tabeli ChPLW. Nie zaokrąglamy masy automatycznie.';
if(kg<d.min&&(d.id==='cladaxxa-50'||kg<=d.min-.1+1e-9))message=d.below;
if(kg>d.max)message=d.above;
return {...base,status:'outside',message};}
function calculateScheme(d,species,raw,schemeId,ageRaw){
 if(!d.species.includes(species))return {status:'species'};
 const scheme=(d.regimens[species]||[]).find(s=>s.id===schemeId);
 if(!scheme)return {status:'select'};
 const minAge=d.minAgeBySpecies?.[species]??d.minAge;
 if(minAge&&ageRaw!=='adult'&&ageRaw!=='young'){const age=parseWeight(ageRaw??'');if(age.status!=='valid')return {status:'blocked',message:`Podaj wiek w tygodniach (minimum ${minAge}).`};if(age.kg<minAge)return {status:'blocked',message:`Przeciwwskazane poniżej ${minAge} tygodni życia.`};}
 if(scheme.fixedMl)return {status:'scheme',scheme,ml:scheme.fixedMl,amount:scheme.fixedMl.map(v=>v*d.concentration),unit:d.unit,fixed:true};
 const p=parseWeight(raw);if(p.status!=='valid')return p;
 const minWeight=d.minWeightBySpecies?.[species]??d.minWeight;
 if(minWeight&&p.kg<minWeight)return {status:'blocked',message:`Przeciwwskazane przy masie poniżej ${minWeight} kg.`};
 const rates=Array.isArray(scheme.rate)?scheme.rate:[scheme.rate];
 let ml=rates.map(v=>v*p.kg/d.concentration),amount=rates.map(v=>v*p.kg);
 if(scheme.procox){const kg=p.kg;const volume=kg<=4?Math.ceil((kg-1e-10)/.2)*.1:kg<=10?Math.ceil(kg)*.5:kg*.5;ml=[volume];amount=[volume*.9];}
 if(![...ml,...amount].every(Number.isFinite))return {status:'invalid'};
 return {status:'scheme',scheme,ml,amount,kg:p.kg,unit:d.unit,second:scheme.secondRate?p.kg*scheme.secondRate:null,procox:scheme.procox};
}
// Presentation groups preserve each verified calculation and its clinical context.
function presentation(d,species){
 const schemes=d.regimens?.[species]||[];
 const item=(id,label,more={})=>({schemeId:id,label,...more});
 if(!schemes.length)return [];
 if(d.id==='loxicom-cat')return [
 {id:'chronic',label:'Przewlekłe schorzenie narządu ruchu',items:[item('chronic-first','Pierwszy dzień'),item('next','Kolejne dni')]},
 {id:'acute',label:'Ostre schorzenie narządu ruchu',items:[item('acute-first','Pierwszy dzień'),item('next','Kolejne dni')]},
 {id:'postop',label:'Po zabiegu — kontynuacja po iniekcji',items:[item('postop','Kontynuacja doustna')]}];
 if(d.id==='loxicom-inj'&&species==='dog')return [{id:'injection',label:'Jednorazowa iniekcja',items:[item('sc','Dawka na podanie',{route:'Podskórnie; przed zabiegiem także dożylnie',frequency:'Jednorazowo'})],note:'Narząd ruchu: podskórnie. Ból pooperacyjny: podskórnie lub dożylnie przed zabiegiem.'}];
 if(schemes.length===2&&schemes[0].id==='first'&&schemes[1].id==='next')return [{id:'oral-course',label:'Leczenie doustne',items:[item('first','Pierwszy dzień'),item('next','Kolejne dni')]}];
 const key=r=>JSON.stringify([r.rate,r.fixedMl,r.secondRate,r.procox,r.frequency]);
 if(schemes.length>1&&schemes.every(r=>key(r)===key(schemes[0])))return [{id:'same-dose',label:'Dawka na podanie',items:[item(schemes[0].id,'',{route:[...new Set(schemes.map(r=>r.route))].map((route,i)=>i?route.toLocaleLowerCase('pl'):route).join(' lub ')})]}];
 return schemes.map(r=>({id:r.id,label:r.label,items:[item(r.id,'')]}));
}
const normalize=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ł/g,'l').toLowerCase();
function search(query,library,species){const needle=normalize(query.trim());return entries.filter(d=>d.library===library&&(d.species.includes(species)||d.showUnavailable)&&normalize(`${d.name} ${d.name.replace(/ /g,'')} ${d.aliases||''} ${d.strength||''} ${d.substance} ${d.name==='Cladaxxa'?'amoxicillin clavulanic':''} ${d.kind==='injection'?'dexamethasone 2 mg/ml iniekcja':d.amoxicillin+'/'+d.clavulanic+' '+(d.amoxicillin+d.clavulanic)}`).includes(needle));}
function recommendVariant(options,species,raw){
 if(!options.length||options.some(d=>!['Cladaxxa','Galliprant','Zenrelia','Apoquel','Numelvi'].includes(d.name)))return null;
 const candidates=options.map(d=>({d,r:calculate(d,species,raw)})).filter(x=>['table','tabletBands'].includes(x.r.status));
 candidates.sort((a,b)=>a.r.actualTotal-b.r.actualTotal||a.r.tablets-b.r.tablets);
 return candidates[0]?.d||null;
}
return {entries,parseWeight,calculate,search,recommendVariant,presentation};
})();
