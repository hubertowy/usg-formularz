/* Polskie dokumenty RPL; zweryfikowano 15.10.2026. Zakresy DOBOWE, nie na podanie. */
window.SteroidDrugs=(()=>{
 const rpl=id=>`https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/${id}/characteristic`;
 const common={kind:'dailyTablets',library:'vet',substance:'prednizolon',aliases:'prednisolone kortykosteroid glikokortykosteroid',checked:'15.10.2026',ageNotice:'U młodych zwierząt ostrożnie — możliwe opóźnienie wzrostu.',indications:'Objawowo lub wspomagająco w stanach zapalnych i chorobach o podłożu immunologicznym.',cautions:'Nie łączyć z NLPZ: zwiększone ryzyko owrzodzeń przewodu pokarmowego. Przeciwwskazania obejmują m.in. niekontrolowane zakażenia, cukrzycę, hiperadrenokortycyzm, owrzodzenia i jaskrę. Pełne przeciwwskazania, ciąża, laktacja i interakcje: dokument źródłowy.',sourceLabel:'Polska informacja o produkcie — RPL'};
 const notes='Doustnie: psy rano, koty wieczorem. Podzielność: połówki i ćwiartki. Pokazano zakres początkowy; stosować najmniejszą skuteczną dawkę. Przy dłuższym leczeniu dawkę redukuje się stopniowo; kalkulator nie wyznacza schematu odstawiania.';
 return [
 ...[[5,40517],[20,40556]].map(([mg,id])=>({...common,id:'prednicortone-'+mg,name:'Prednicortone',mg,strength:mg+' mg · tabletki',species:['dog','cat'],defaultVariant:mg===5,doseRange:[.5,4],source:mg===5?'https://rejestry.ezdrowie.gov.pl/api/rpl/medicinal-products/40517/leaflet':rpl(id),notes})),
 ...[[5,42065],[25,42066]].map(([mg,id])=>({...common,id:'hedylon-'+mg,name:'Hedylon',mg,strength:mg+' mg · tabletki',species:mg===25?['dog']:['dog','cat'],defaultVariant:mg===5,doseRange:[.5,2],source:rpl(id),notes:mg===25?notes.replace('psy rano, koty wieczorem','psy rano')+' Moc 25 mg jest zarejestrowana wyłącznie dla psów.':notes}))
 ];
})();
