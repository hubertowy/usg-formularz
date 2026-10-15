/* Conversion from as-fed percentages to dry matter percentages. */
window.VetDiet=(()=>{
 function parse(raw){const s=String(raw).trim();if(!s)return {status:'empty'};if(!/^\d+(?:[.,]\d+)?$/.test(s))return {status:'invalid'};const value=Number(s.replace(',','.'));return Number.isFinite(value)?{status:'valid',value}:{status:'invalid'};}
 function calculate(moistureRaw,fatRaw){
  const m=parse(moistureRaw),f=parse(fatRaw);
  if(m.status==='invalid'||m.status==='valid'&&(m.value<0||m.value>=100))return {status:'invalid',field:'moisture',message:'Wilgotność musi wynosić od 0% do mniej niż 100%.'};
  if(f.status==='invalid'||f.status==='valid'&&(f.value<0||f.value>100))return {status:'invalid',field:'fat',message:'Zawartość tłuszczu musi wynosić od 0% do 100%.'};
  if(m.status==='empty'||f.status==='empty')return {status:'empty'};
  const dry=100-m.value;
  if(f.value-dry>1e-10)return {status:'invalid',field:'fat',message:'Suma wilgotności i tłuszczu nie może przekraczać 100%. Sprawdź wartości z etykiety.'};
  return {status:'valid',moisture:m.value,fat:f.value,dry,percent:Math.min(100,f.value/dry*100)};
 }
 return {calculate};
})();
(()=>{
 const moisture=document.getElementById('vd-moisture'),fat=document.getElementById('vd-fat');
 const output=document.getElementById('vd-result'),dry=document.getElementById('vd-dry'),calc=document.getElementById('vd-calculation'),error=document.getElementById('vd-error');
 const fmt=n=>new Intl.NumberFormat('pl-PL',{maximumFractionDigits:2}).format(n);
 function update(){
  const r=VetDiet.calculate(moisture.value,fat.value);
  [moisture,fat].forEach(el=>el.removeAttribute('aria-invalid'));
  error.hidden=r.status!=='invalid';error.textContent=r.status==='invalid'?r.message:'';
  if(r.status==='invalid')document.getElementById(r.field==='moisture'?'vd-moisture':'vd-fat').setAttribute('aria-invalid','true');
  output.textContent=r.status==='valid'?fmt(r.percent)+'%':'—';
  dry.textContent=r.status==='valid'?fmt(r.dry)+'%':'—';
  calc.textContent=r.status==='valid'?`${fmt(r.fat)} ÷ ${fmt(r.dry)} × 100 = ${fmt(r.percent)}%`:r.status==='invalid'?'Popraw dane, aby obliczyć wynik.':'Uzupełnij oba pola, aby obliczyć wynik.';
 }
 [moisture,fat].forEach(el=>el.addEventListener('input',update));
 document.getElementById('vd-clear').addEventListener('click',()=>{moisture.value='';fat.value='';update();moisture.focus();});
 update();
})();
