/* Dawki początkowe lewotyroksyny SODOWEJ w µg; źródła: polski rejestr RPL, 14.10.2026. */
window.ThyroidDrugs=(()=>{
 const rpl=id=>`https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/${id}/characteristic`;
 const common={kind:'initialTablets',library:'vet',unit:'µg',substance:'lewotyroksyna sodowa',aliases:'tarczyca levothyroxine levothyroxinum',checked:'14.10.2026',notes:'Wyłącznie standardowa dawka początkowa. Podawać codziennie o stałych porach, w stałej relacji do karmienia. Tabletki podzielne na równe połówki i ćwiartki. Dalsze leczenie wymaga indywidualnej oceny; kalkulator nie wylicza korekt.',cautions:'Nie stosować przy niewyrównanej niewydolności nadnerczy i nadwrażliwości. Choroby serca, cukrzyca, niewydolność nerek lub wątroby mogą wymagać ostrożnego rozpoczęcia leczenia; standardowy przelicznik nie uwzględnia tych modyfikacji. Ciąża i laktacja wymagają oceny korzyści i ryzyka. Pełne ograniczenia i interakcje: dokument źródłowy.'};
 return [
 ...[200,400,600,800].map(ug=>({...common,id:'forthyron-'+ug,name:'Forthyron',ug,strength:ug+' µg · tabletki',species:['dog'],defaultVariant:ug===200,source:ug===600?rpl(28913):'https://rejestrymedyczne.ezdrowie.gov.pl/api/rpl/medicinal-products/28913/leaflet',sourceLabel:ug===600?'Otwórz pełną ChPLW':'Oficjalna ulotka — wszystkie moce',indications:'Leczenie niedoczynności tarczycy u psów.'})),
 ...[[200,45899,2.5],[400,45901,5],[800,45902,10]].map(([ug,id,limit])=>({...common,id:'levogland-'+ug,name:'Levogland',ug,strength:ug+' µg · tabletki',species:ug===800?['dog']:['dog','cat'],defaultVariant:ug===200,source:rpl(id),tabletCautionBelow:limit,indications:'Leczenie pierwotnej i wtórnej niedoczynności tarczycy.'}))
 ];
})();
