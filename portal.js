(()=>{
const usg=document.getElementById('usg-focus');
const icons={templates:'<rect x="6" y="4" width="24" height="28" rx="4"/><path d="M12 12h12M12 18h12M12 24h7"/>',drugs:'<g transform="rotate(40 18 18)"><rect x="11" y="4" width="14" height="28" rx="7"/><path d="M11 18h14"/><path d="M15 10v3" opacity=".55"/></g>',diet:'<rect x="7" y="3" width="22" height="30" rx="4"/><rect x="11" y="7" width="14" height="7" rx="1.5"/><path d="M12 20h2m8 0h2M12 25h2m8 0h2M12 29h2m8 0h2"/>'};
const brandMark='<svg class="vp-ai-logo" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M13 18c-4 1-7-1-7-4 0-3 2-5 5-5 0-4 2-6 5-6s5 2 5 5c0 4-4 9-8 10Z" fill="#75C8FF"/><path d="M35 30c4-1 7 1 7 4 0 3-2 5-5 5 0 4-2 6-5 6s-5-2-5-5c0-4 4-9 8-10Z" fill="#75C8FF"/><path d="m17 26 10-10c-1-3-2-6 0-8 2-2 5-2 7 0 1 1 1 3 1 5 3-1 5-1 7 1 2 2 1 5-1 7-2 1-5 1-8 0L22 32c1 3 1 6 0 8-2 2-5 3-7 1-2-2-2-4-1-7-2 0-4 0-5-1-2-2-2-5 0-7 2-2 5-1 8 0Z" fill="white"/></svg>';
const icon=k=>`<svg viewBox="0 0 36 36" fill="none" aria-hidden="true">${icons[k]}</svg>`;
const shell=document.createElement('div');shell.id='vet-portal';
shell.innerHTML=`<header class="vp-top"><a href="#" class="vp-brand" data-page="home"><span class="vp-mark" title="Narzędzia weterynaryjne">${brandMark}</span><span>Narzędzia weterynaryjne<small>Twój pomocnik w gabinecie</small></span></a><nav aria-label="Główne panele"><button data-page="templates">Szablony badań</button><button data-page="drugs">Leki i suplementy</button><button data-page="diet">Dietetyka</button></nav></header>
<main id="vp-home" class="vp-section"><p class="vp-eyebrow">NARZĘDZIA DO CODZIENNEJ PRACY</p><h1>Wszystko pod ręką.</h1><p class="vp-lead">Wybierz panel i przejdź do swojego zadania.</p><div class="vp-grid">
${[['templates','01','Szablony badań','Twórz opisy USG, uzupełniaj pomiary i kopiuj gotowy tekst do dokumentacji.','3 zakresy USG'],['drugs','02','Leki i suplementy','Wyszukuj leki, sprawdzaj dawkowanie i porcje dobowe suplementów dla psa lub kota.','Leki + suplementy Vetfood'],['diet','03','Kalkulatory dietetyczne','Przeliczaj skład karmy i sprawdzaj zawartość tłuszczu w suchej masie.','Tłuszcz w suchej masie']].map(([k,n,title,desc,status])=>`<button class="vp-tile vp-${k}" data-page="${k}"><span class="vp-tile-top">${icon(k)}<span>${n}</span></span><strong>${title}</strong><span class="vp-desc">${desc}</span><span class="vp-tile-bottom">${status}<span>↗</span></span></button>`).join('')}</div></main>
<main id="vp-drugs" class="vp-section" hidden><p class="vp-eyebrow">KALKULATORY DAWEK LEKÓW</p><h1>Lek, pacjent, dawka.</h1><p class="vp-lead">Wyszukaj nazwę preparatu lub substancję czynną.</p><div class="vp-patient"><fieldset class="vp-species"><legend>Gatunek</legend><label><input type="radio" name="vp-species" value="dog" checked><span>🐶 Pies</span></label><label><input type="radio" name="vp-species" value="cat"><span>🐱 Kot</span></label></fieldset><label>Masa ciała (kg)<input id="vp-weight" type="text" inputmode="decimal" placeholder="np. 12,5"></label><fieldset class="vp-life-stage"><legend>Wiek pacjenta</legend><label><input type="radio" name="vp-life-stage" value="adult" checked><span>Dorosłe</span></label><label><input id="vp-young" type="radio" name="vp-life-stage" value="young"><span>Młode</span></label></fieldset></div><div class="vp-library"><div class="vp-tabs" role="group" aria-label="Typ preparatów"><button data-library="vet" aria-pressed="true">Preparaty weterynaryjne</button><button data-library="human" aria-pressed="false">Preparaty ludzkie</button><button data-library="supplement" aria-pressed="false">Suplementy</button></div><p id="vp-vet-note" class="vp-note">Kalkulator jest narzędziem pomocniczym. Lekarz weterynarii weryfikuje wynik, dobiera leczenie i ponosi ostateczną odpowiedzialność za zastosowaną dawkę.</p><p id="vp-human-note" class="vp-note" hidden>Preparaty zarejestrowane dla ludzi. Dawkowanie u psa i kota poniżej jest schematem podanym przez lekarza, poza wskazaniami ChPL. Wybór dawki i zasadność zastosowania określa lekarz weterynarii.</p><label class="vp-search-label" for="vp-search">Szukaj w tabeli</label><div class="vp-search-wrap"><span aria-hidden="true">⌕</span><input id="vp-search" type="search" placeholder="Nazwa preparatu, producent lub składnik…"><kbd>/</kbd></div><div class="vp-list-head" aria-hidden="true"><span>Preparat / moc</span><span>Wynik na podanie</span></div><div id="vp-results"></div><div class="vp-empty" role="status"><strong id="vp-empty-title">Baza czeka na Twoją listę leków</strong><p id="vp-empty-desc">Po weryfikacji preparatów pojawią się tutaj dawki, wyniki przeliczeń i źródła.</p></div></div><p class="vp-footnote" id="vp-footnote-drugs">Każdy schemat będzie zawierać gatunek, wskazanie, drogę podania, częstotliwość, czas stosowania oraz datę sprawdzenia źródła.</p></main>
<main id="vp-diet" class="vp-section" hidden><p class="vp-eyebrow">KALKULATORY DIETETYCZNE</p><h1>Dietetyka</h1><p class="vp-lead">Proste obliczenia na podstawie składu karmy.</p>
<section class="vd-card" aria-labelledby="vd-title"><div class="vd-heading"><span class="vd-icon" aria-hidden="true">${icon('diet')}</span><div><h2 id="vd-title">Tłuszcz w suchej masie</h2><p>Wpisz procenty podane na etykiecie karmy.</p></div></div>
<div class="vd-grid"><div class="vd-inputs"><label for="vd-moisture">Wilgotność karmy (%)</label><input id="vd-moisture" type="text" inputmode="decimal" placeholder="np. 80" aria-describedby="vd-error" autocomplete="off"><label for="vd-fat">Zawartość tłuszczu (%)</label><input id="vd-fat" type="text" inputmode="decimal" placeholder="np. 5" aria-describedby="vd-error" autocomplete="off"><p id="vd-error" class="vd-error" role="alert" hidden></p><button id="vd-clear" type="button">Wyczyść pola</button></div>
<div class="vd-result-panel"><span class="vd-result-label">Tłuszcz w suchej masie</span><output id="vd-result" for="vd-moisture vd-fat" aria-live="polite">—</output><div class="vd-dry-line"><span>Sucha masa karmy</span><span id="vd-dry">—</span></div><p id="vd-calculation">Uzupełnij oba pola, aby obliczyć wynik.</p></div></div>
<div class="vd-formula"><strong>Jak liczymy?</strong><span>Sucha masa = 100 − wilgotność</span><span>Tłuszcz w suchej masie (%) = tłuszcz ÷ sucha masa × 100</span></div></section></main>`;
usg.before(shell);usg.hidden=true;
document.body.dataset.panel='home';
let page='home',library='vet';
function show(next){page=next;document.body.dataset.panel=next;['home','drugs','diet'].forEach(k=>document.getElementById('vp-'+k).hidden=k!==next);usg.hidden=next!=='templates';shell.querySelectorAll('nav [data-page]').forEach(b=>{if(b.dataset.page===next)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});window.scrollTo({top:0});if(next!=='templates')shell.querySelector('#vp-'+next+' h1')?.focus({preventScroll:true});}
shell.addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(b){e.preventDefault();show(b.dataset.page);}const tab=e.target.closest('[data-library]');if(tab){library=tab.dataset.library;shell.querySelectorAll('[data-library]').forEach(el=>el.setAttribute('aria-pressed',el.dataset.library===library));document.getElementById('vp-human-note').hidden=library!=='human';document.getElementById('vp-vet-note').hidden=library!=='vet';updateSearch();}});
const selections={},variants={};
const ageForDose=()=>document.getElementById('vp-young').checked?'young':'adult';
const strengthOf=d=>d.kind==='supplement'?'':d.strength||(d.kind==='injection'?'2 mg/ml':`${d.amoxicillin}/${d.clavulanic} mg`);
const routeSummary=route=>{const labels=[[/domięśniowo/i,'Domięśniowo'],[/dożylnie/i,'Dożylnie'],[/podskórnie/i,'Podskórnie'],[/doustnie/i,'Doustnie']].filter(([pattern])=>pattern.test(route)).map(([,label],i)=>i?label.toLocaleLowerCase('pl'):label);return labels.length?labels.join(' / '):route;};
const brief=r=>r.status==='dailyTablets'?(r.quarters?`${tabletRange(r.quarters)} tabl. / dobę`:`${range(r.mgRange)} mg / dobę`):r.status==='initialTablets'?(r.proposal?`${r.proposal.rounded?'Propozycja: ':''}${fmt(r.proposal.tablets)} tabl. (${fmt(r.proposal.ug)} µg) · ${r.doses[0].frequency}`:r.doses.length>1?`${fmt(r.dailyUg)} µg/dobę · 1 lub 2 podania`:`${fmt(r.doses[0].ug)} µg · ${r.doses[0].frequency}`):r.status==='humanTablets'?(r.quarters?`${tabletRange(r.quarters.range)} tabl. · ${r.frequency}`:'Brak ćwiartki w zakresie dawki'):r.status==='supplement'?`${fmt(r.capsules)} kaps. / dobę`:r.status==='tabletBands'?`${r.tablets===.5?'½':fmt(r.tablets)} tabl. · ${r.frequency||'1× dziennie'}`:r.status==='scheme'?`${range(r.ml)} ml · ${routeSummary(r.scheme.route)}`:r.status==='select'?'Wybierz schemat':r.status==='species'?'Brak rejestracji dla gatunku':r.status==='blocked'?r.message:r.status==='injection'?`${fmt(r.ml)} ml · i.m.`:r.status==='table'?`${({'0.5':'½','1':'1','1.5':'1½','2':'2'})[r.tablets]||fmt(r.tablets)} tabl. · 2× dziennie`:r.status==='empty'?'Podaj masę ciała':r.status==='invalid'?'Nieprawidłowa masa':'Poza tabelą tej mocy';
const fmt=n=>new Intl.NumberFormat('pl-PL',{maximumFractionDigits:2}).format(n);
function activePlan(d,species){const plans=VetDrugs.presentation(d,species);return plans.length===1?plans[0]:plans.find(p=>p.id===selections[d.id+'-'+species]);}
function planResults(d,species,raw){const plan=activePlan(d,species);return {plan,results:(plan?.items||[]).map(item=>{const r=VetDrugs.calculate(d,species,raw,item.schemeId,ageForDose());if(r.scheme)r.scheme={...r.scheme,route:item.route||r.scheme.route,frequency:item.frequency||r.scheme.frequency};return {item,r};})};}
function schemeBrief(d,species,raw){
 const {plan,results}=planResults(d,species,raw);
 if(!plan)return d.species.includes(species)?'Wybierz wskazanie':'Brak rejestracji dla gatunku';
 if(results.some(x=>x.r.status!=='scheme'))return brief(results.find(x=>x.r.status!=='scheme').r);
 if(results.length>1)return results.map(({item,r})=>`${item.label}: ${range(r.ml)} ml`).join(' · ');
 const r=results[0].r;return `${range(r.ml)} ml · ${routeSummary(r.scheme.route)}`;
}
function doseResult(d,species,raw){
 const r=VetDrugs.calculate(d,species,raw,selections[d.id+'-'+species],ageForDose());
 if(d.kind==='dailyTablets'){
 if(r.status!=='dailyTablets')return `<small>${r.status==='empty'?'Podaj masę ciała w kg.':r.status==='species'?'Ta moc nie jest zarejestrowana dla wybranego gatunku.':'Wpisz prawidłową masę ciała.'}</small>`;
 return `<small><b>Zakres początkowy · cała doba</b></small><strong class="vp-dose-value">${range(r.mgRange)} mg na dobę</strong>`+(r.quarters?`<small><b>Tabletki:</b> ${tabletRange(r.quarters)} tabl. na dobę, w krokach co ¼.</small>`:'<small class="vp-dose-note">Brak ćwiartki tabletki w zakresie dobowym — wybierz mniejszą moc.</small>')+`<small>Doustnie · ${species==='dog'?'rano':'wieczorem'}</small><details class="vp-calculation-note"><summary>Podstawa obliczenia</summary><small>${range(d.doseRange)} mg/kg na dobę. Zakres tabletek jest przeliczeniem dla dokładnej masy, z ćwiartkami wyłącznie wewnątrz zakresu mg; nie jest odczytem z orientacyjnej tabeli mas w ChPLW. Kalkulator nie wybiera jednej dawki ani schematu redukcji.</small></details>`;
 }
 if(d.kind==='initialTablets'){
 if(r.status!=='initialTablets')return `<small>${r.status==='empty'?'Podaj masę ciała w kg.':r.status==='species'?'Brak rejestracji dla wybranego gatunku.':'Wpisz dodatnią, prawidłową masę.'}</small>`;
 const parts=r.doses.map(v=>`<div class="vp-dose-stage"><h4>${v.label}</h4><strong class="vp-dose-value">${fmt(v.ug)} µg na podanie</strong><small>${v.frequency} · doustnie</small><small>${r.special&&d.ug!==200?'Dla psa poniżej 5 kg: ¼ tabletki o mocy 200 µg. Wybierz moc 200 µg.':r.proposal?.rounded?'':v.tablets!==null?`Tabletki: ${fmt(v.tablets)} tabl. ${d.ug} µg na podanie.`:'Dawka obliczona nie odpowiada wielokrotności ¼ tabletki tej mocy. Dobór mocy lub sposobu odmierzenia wymaga decyzji lekarza.'}</small></div>`).join('');
 const rounding=r.proposal?.rounded?`<small><b>Propozycja: ${fmt(r.proposal.tablets)} tabl. = ${fmt(r.proposal.ug)} µg na podanie.</b> Zaokrąglenie w górę co ¼ tabletki.</small>`:'';
 return `<small><b>Tylko dawka początkowa${r.doses.length>1?' · warianty alternatywne, wybierz jeden':''}</b></small>`+parts+rounding+(r.precisionNotice?`<small class="vp-dose-note">${r.precisionNotice}</small>`:'')+`<details class="vp-calculation-note"><summary>Podstawa obliczenia</summary><small>${r.special?'Dla psa poniżej 5 kg: ¼ tabletki 200 µg raz dziennie.':d.name==='Forthyron'?'10 µg lewotyroksyny sodowej/kg na podanie co 12 godzin.':'20 µg lewotyroksyny sodowej/kg na dobę: jednorazowo lub jako dwa podania po 10 µg/kg.'} Ilości dotyczą lewotyroksyny sodowej. ${r.proposal?'Wynik w µg pozostaje obliczeniem z dawki początkowej. Propozycja tabletek jest zaokrąglona w górę co ¼ tabletki.':'Nie zaokrąglamy dawki do najbliższej ćwiartki.'}</small></details>`;
 }
 if(d.kind==='humanTablets'){
 const protocol=`<small class="vp-user-protocol">${d.doseSource}</small>`;
 if(r.status!=='humanTablets')return protocol+`<small>${r.status==='empty'?'Podaj masę ciała w kg.':r.status==='species'?'Schemat nie dotyczy wybranego gatunku.':'Wpisz dodatnią, prawidłową masę.'}</small>`;
 const q=r.quarters;
 const tablets=q?`<small><b>Tabletki:</b> ${tabletRange(q.range)} tabl. na podanie</small>`:`<span class="vp-dose-note">Żadna wielokrotność ¼ tabletki nie mieści się w podanym zakresie. Wybierz inną moc lub sposób odmierzenia dawki.</span>`;
 return protocol+`<strong class="vp-dose-value">${range(r.mgRange)} mg na podanie</strong>`+tablets+`<small>${d.frequency} · doustnie${d.timing?' · '+d.timing:''}</small><details class="vp-calculation-note"><summary>Szczegóły przeliczenia</summary><small>Podstawa: ${range(d.doseRange)} mg/kg na podanie. Przeliczenie tabletek w krokach co ¼, wyłącznie w granicach tego zakresu. Możliwość uzyskania równych części konkretnego preparatu ocenia lekarz.</small></details>`;
 }
 if(d.kind==='supplement'){
 const rule=d.perKg?`1 kapsułka na każde rozpoczęte ${d.perKg} kg / dobę`:`Poniżej 10 kg: 1 kaps.; 10–${d.threshold} kg: 2 kaps.; powyżej ${d.threshold} kg: 3 kaps. / dobę`;
 if(r.status==='supplement')return `<strong class="vp-dose-value">${fmt(r.capsules)} kaps. na dobę</strong><small>${rule}</small>`;
 return `<small>${r.status==='empty'?'Podaj masę ciała.':r.status==='species'?'Produkt nie jest przeznaczony dla wybranego gatunku.':'Wpisz dodatnią, prawidłową masę.'} ${rule}</small>`;
 }
 if(d.kind==='tabletBands'){
 const age=document.getElementById('vp-young').checked?`<div class="vp-young-note">${d.ageNotice} Sprawdź dokładny wiek przed zastosowaniem.</div>`:'';
 if(r.status!=='tabletBands')return age+`<span class="vp-dose-note">${r.message||(r.status==='empty'?'Podaj masę ciała.':r.status==='species'?'Tylko dla psów.':'Wpisz prawidłową masę ciała.')}</span>`;
 const tablets=r.tablets===.5?'½':fmt(r.tablets);
 const dosing=d.stages?d.stages.map(([label,frequency])=>`<div class="vp-dose-stage"><h4>${label}</h4><strong class="vp-dose-value">${tablets} tabl. na podanie</strong><small>${frequency} · doustnie</small></div>`).join(''):`<strong class="vp-dose-value">${tablets} tabl. na podanie</strong><small>${d.frequency||'Raz na dobę'} · doustnie</small>`;
 const basis=r.mgRange?`Zakres z ChPLW: ${range(d.doseRange)} mg/kg = ${range(r.mgRange)} mg na podanie.`:`Dawka docelowa: 2 mg/kg = ${fmt(r.targetMg)} mg.`;
 return age+dosing+`<small>Tabela ChPLW: ${range(r.range)} kg. Z tabletek: ${fmt(r.actualTotal)} mg (${fmt(r.actualTotal/r.kg)} mg/kg).</small><small>${basis} Liczba tabletek pochodzi z tabeli producenta.</small>`;
 }
 if(d.kind==='schemes'){const minAge=d.minAgeBySpecies?.[species]??d.minAge;const note=document.getElementById('vp-young').checked&&minAge?`<div class="vp-young-note">Od ${minAge} tygodnia życia. Przed zastosowaniem potwierdź, że pacjent osiągnął minimalny wiek — kalkulator nie zna dokładnego wieku.</div>`:'';const {plan,results}=planResults(d,species,raw);return note+(!plan?schemeResult(d,r):results.map(({item,r})=>`<div class="vp-dose-stage">${item.label?`<h4>${item.label}</h4>`:''}${schemeResult(d,r)}</div>`).join('')+(plan.note?`<small>${plan.note}</small>`:''));}
 const base=d.kind==='injection'?'<small>0,1 mg/kg · domięśniowo · stany zapalne lub alergiczne</small>':'<small>10 mg amoksycyliny + 2,5 mg kwasu klawulanowego/kg na podanie · 2 razy dziennie</small>';
 if(r.status==='empty')return '<span>Podaj masę ciała</span>'+base;
 if(r.status==='invalid')return '<span class="vp-dose-error">Wpisz dodatnią masę w kg</span>';
 if(r.status==='species')return 'Preparat niezarejestrowany dla wybranego gatunku';
 if(r.status==='injection')return `<strong class="vp-dose-value">${fmt(r.ml)} ml na podanie</strong><small>${fmt(r.mg)} mg deksametazonu · 0,1 mg/kg · domięśniowo.</small><small>Dawka uśredniona z ChPLW. Termin ewentualnego powtórzenia i czas leczenia ustala lekarz.</small>${r.ml<1?'<small>Objętość poniżej 1 ml: wymagana strzykawka z odpowiednią podziałką.</small>':''}`;
 const mg=`<small>Dawka obliczona: ${fmt(r.amoxicillin)} mg + ${fmt(r.clavulanic)} mg = ${fmt(r.total)} mg na podanie.</small>`;
 if(r.status==='outside')return `<span class="vp-dose-note">${r.message}</span>${mg}<small>Brak automatycznego doboru tabletek.</small>`;
 const tablets={'0.5':'½','1':'1','1.5':'1½','2':'2'}[r.tablets]||fmt(r.tablets);
 return `<strong class="vp-dose-value">${tablets} tabl. na podanie</strong><small>2 razy dziennie · według tabeli ChPLW (${fmt(r.range[0])}–${fmt(r.range[1])} kg).</small>${mg}<small>Z tabletek: ${fmt(r.actualTotal)} mg łącznie na podanie (${fmt(r.actualTotal/r.kg)} mg/kg).</small>`;
}
const range=values=>values.map(fmt).join('–');
const tabletRange=values=>values[0]===values[1]?fmt(values[0]):range(values);
function schemeResult(d,r){
 if(r.status==='species')return '<span class="vp-dose-error">Brak zarejestrowanego dawkowania dla wybranego gatunku. Nie wyliczamy dawki.</span>';
 if(r.status==='select')return '<small>Wybierz wskazanie, aby zobaczyć dawkowanie.</small>';
 if(r.status==='blocked')return `<span class="vp-dose-error">${r.message}</span>`;
 if(r.status==='empty')return '<small>Podaj masę ciała w kg.</small>';
 if(r.status==='invalid')return '<span class="vp-dose-error">Wpisz dodatnią, prawidłową wartość.</span>';
 if(r.status!=='scheme')return '';
 return `<strong class="vp-dose-value">${range(r.ml)} ml na podanie</strong><small>${range(r.amount)} ${r.unit} · ${r.scheme.route} · ${r.scheme.frequency}</small>${r.fixed?'<small>Dawka na zwierzę; nie zależy od masy ciała.</small>':`<small>Podstawa: ${Array.isArray(r.scheme.rate)?range(r.scheme.rate):fmt(r.scheme.rate)} ${r.unit}/kg.</small>`}${r.second?`<small>Drugi składnik: ${fmt(r.second)} mg hioscyny butylobromku.</small>`:''}${r.procox?'<small>Objętość z tabeli producenta; toltrazuryl: '+fmt(r.ml[0]*18)+' mg.</small>':''}`;
}
function updateSearch(){
 const query=document.getElementById('vp-search').value,species=shell.querySelector('[name=vp-species]:checked').value,raw=document.getElementById('vp-weight').value;
 const list=VetDrugs.search(query,library,species);
 document.querySelector('.vp-list-head span:last-child').textContent=library==='supplement'?'Porcja dobowa':'Wynik dawkowania';
 const opened=new Set([...shell.querySelectorAll('.vp-drug[open]')].map(el=>el.dataset.drug));
 const groups=new Map();list.forEach(d=>{if(!groups.has(d.name))groups.set(d.name,[]);groups.get(d.name).push(d);});
 document.getElementById('vp-results').innerHTML=[...groups].map(([name,options])=>{
 const young=document.getElementById('vp-young').checked;
 const groupKey=name.toLowerCase().replace(/[^a-z0-9]/g,'');
 const choiceKey=groupKey+'-'+species,manual=options.find(d=>d.id===variants[choiceKey]);
 const suggested=VetDrugs.recommendVariant(options,species,raw);
 const d=manual||suggested||options.find(v=>v.defaultVariant)||(options.length===1?options[0]:null);
 const ages=[...new Set((d?[d]:options).map(v=>v.minAgeBySpecies?.[species]??v.minAge).filter(Boolean))];
 const monthNotice=(d||options[0]).ageNotice;
 const ageHint=young&&monthNotice?`<small class="vp-age-limit">${monthNotice}</small>`:young&&ages.length?`<small class="vp-age-limit">Od ${ages.join(' / ')} tygodnia życia${!d&&options.length>1?' — zależnie od postaci':''}</small>`:'';
 const variantPicker=options.length>1?`<label class="vp-scheme-label">Moc i postać<select data-variant="${groupKey}" aria-label="${name} — moc i postać"><option value="">${suggested?'Automatycznie z tabeli ChPLW':'Wybierz moc i postać…'}</option>${options.map(v=>`<option value="${v.id}" ${d?.id===v.id?'selected':''}>${strengthOf(v)}</option>`).join('')}</select></label>`:'';
 const hint=suggested?`<div class="vp-suggestion">Propozycja z tabeli dla ${fmt(VetDrugs.parseWeight(raw).kg)} kg: <strong>${strengthOf(suggested)}</strong>. ${brief(VetDrugs.calculate(suggested,species,raw))}${manual&&manual.id!==suggested.id?` <button data-use-suggested="${groupKey}" class="vp-use-suggestion">Użyj propozycji</button>`:''}<small>Dobór spośród dostępnych mocy według tabeli producenta; nie określa zasadności leczenia.</small></div>`:'';
 let content=variantPicker+hint,short='Wybierz moc i postać',strength=options.length+' moce / postacie';
 if(d){
 const r=VetDrugs.calculate(d,species,raw,selections[d.id+'-'+species],ageForDose());
 strength=strengthOf(d);short=d.kind==='schemes'?schemeBrief(d,species,raw):brief(r);
 const plans=VetDrugs.presentation(d,species);
 const picker=plans.length>1?`<label class="vp-scheme-label">Wskazanie / plan leczenia<select data-scheme="${d.id}" aria-label="${d.name} ${strength} — wskazanie"><option value="">Wybierz wskazanie…</option>${plans.map(p=>`<option value="${p.id}" ${selections[d.id+'-'+species]===p.id?'selected':''}>${p.label}</option>`).join('')}</select></label>`:'';
 const description=d.notes?d.notes:'Doustnie. Tabletki do rozgryzania i żucia, podzielne na połówki. Zwykle 5–7 dni; przy leczeniu przewlekłym czas określa lekarz.';
 const cautions=d.cautions?d.cautions:'Nie stosować przy alergii na β-laktamy, ciężkiej niewydolności nerek z anurią/oligurią ani stwierdzonej oporności. Niewydolność nerek/wątroby, ciąża i laktacja wymagają oceny lekarza.';
 content+=`<div class="vp-drug-result">${picker}${doseResult(d,species,raw)}</div><div class="vp-drug-info"><p><strong>${d.kind==='supplement'?'Przeznaczenie żywieniowe':'Wskazania'}:</strong> ${d.indications}</p><p>${description}</p><p>${cautions}</p><p><a href="${d.source}" target="_blank" rel="noopener">${d.sourceLabel|| (d.kind==='supplement'?'Zalecenia producenta Vetfood':d.library==='human'?'ChPL preparatu ludzkiego (skład i ograniczenia)':'Otwórz pełną ChPLW')} ↗</a><small>Sprawdzono: ${d.checked} · ${d.library==='human'?'Schemat lekarza: pies i kot':d.species.length===2?'Pies i kot':d.species.length===0?'Inne gatunki':d.species[0]==='cat'?'Kot':'Pies'}${d.source.includes('uskvbl')?' · unijna ChPLW, wersja czeska':''}</small></p></div>`;
 }else content+='<p>Wybierz konkretną moc i postać preparatu. Dawka zależy również od wskazania i etapu leczenia.</p>';
 return `<details class="vp-drug" data-drug="${groupKey}" ${opened.has(groupKey)?'open':''}><summary><span class="vp-drug-title"><strong>${name}</strong>${library==='supplement'?'<span class="vp-supplement-badge">Suplement</span>':`<span>${strength}</span>`}<small>${options[0].substance}</small>${ageHint}</span><span class="vp-quick">${short}</span><span class="vp-expand" aria-hidden="true"></span></summary><div class="vp-drug-body">${content}</div></details>`;
 }).join('');
 const empty=document.getElementById('vp-empty-title').parentElement;empty.hidden=list.length>0;
 document.getElementById('vp-empty-title').textContent=library==='human'?'Brak preparatów ludzkich w bazie':'Brak pasujących preparatów';
 document.getElementById('vp-empty-desc').textContent=library==='human'?'Ta część bazy czeka na weryfikację leków.':'Zmień wyszukiwaną nazwę lub gatunek.';
 document.getElementById('vp-footnote-drugs').textContent=library==='supplement'?'Suplementy: wynik dotyczy porcji dobowej. Przeliczniki kapsułek na kg stosują pełną kapsułkę na każdy rozpoczęty przedział masy ciała.':library==='human'?'Dawkowanie dla psa i kota: schematy podane przez lekarza. ChPL preparatów ludzkich służy do weryfikacji składu i ograniczeń, nie potwierdza dawek weterynaryjnych.':species==='cat'&&list.some(d=>d.name==='Cladaxxa')?'Cladaxxa 400/100 mg jest zarejestrowana tylko dla psów i nie pojawia się w wynikach dla kota.':'Wynik opisuje dawkę na podanie lub na dobę zgodnie z oznaczeniem. Rozwiń preparat, aby sprawdzić szczegóły i źródło.';
}
document.getElementById('vp-search').addEventListener('input',updateSearch);
document.getElementById('vp-weight').addEventListener('input',updateSearch);
shell.querySelectorAll('[name=vp-life-stage]').forEach(el=>el.addEventListener('change',updateSearch));
shell.addEventListener('change',e=>{if(e.target.dataset.variant){const group=e.target.dataset.variant,species=shell.querySelector('[name=vp-species]:checked').value;variants[group+'-'+species]=e.target.value;updateSearch();shell.querySelector(`[data-variant="${group}"]`)?.focus({preventScroll:true});return;}if(!e.target.dataset.scheme)return;const id=e.target.dataset.scheme;const species=shell.querySelector('[name=vp-species]:checked').value;selections[id+'-'+species]=e.target.value;updateSearch();shell.querySelector(`[data-scheme="${id}"]`)?.focus({preventScroll:true});});
shell.querySelectorAll('[name=vp-species]').forEach(el=>el.addEventListener('change',updateSearch));
shell.addEventListener('click',e=>{const b=e.target.closest('[data-use-suggested]');if(!b)return;const species=shell.querySelector('[name=vp-species]:checked').value;delete variants[b.dataset.useSuggested+'-'+species];updateSearch();shell.querySelector(`[data-variant="${b.dataset.useSuggested}"]`)?.focus();});
updateSearch();
document.addEventListener('keydown',e=>{if(page==='drugs'&&e.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();document.getElementById('vp-search').focus();}});
})();
