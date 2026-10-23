/* Deficit units: kg × fractional dehydration = litres, converted to mL.
   Infusion rates are the user's requested calculator settings, not universal recommendations. */
window.VetFluids=(()=>{
 const grades=[
  {id:'under5',label:'Poniżej 5%',lo:0,hi:5,upperOpen:true,description:'Objawy mogą być niewykrywalne w badaniu klinicznym.'},
  {id:'5-6',label:'5–6%',lo:5,hi:6,description:'Lepkie błony śluzowe, lekko zmniejszone napięcie skóry.'},
  {id:'6-8',label:'6–8%',lo:6,hi:8,description:'Lepkie błony śluzowe, łagodne zmniejszenie napięcia skóry.'},
  {id:'8-10',label:'8–10%',lo:8,hi:10,description:'Znaczne zmniejszenie napięcia skóry, zapadnięcie gałek ocznych.'},
  {id:'10-12',label:'10–12%',lo:10,hi:12,description:'Bardzo duża utrata elastyczności skóry, możliwe cechy hipowolemii.'},
  {id:'over12',label:'Powyżej 12%',lo:12,hi:null,lowerOpen:true,description:'Bardzo ciężkie odwodnienie; możliwe zaburzenia krążenia.'}
 ];
 function number(raw){const s=String(raw??'').trim();if(!s)return {status:'empty'};if(!/^\d+(?:[.,]\d+)?$/.test(s))return {status:'invalid'};const value=Number(s.replace(',','.'));return Number.isFinite(value)?{status:'valid',value}:{status:'invalid'};}
 function calculate({weight,species,cardiac=false,grade,percent}){
  const w=number(weight);
  if(w.status==='empty')return {status:'empty'};
  if(w.status!=='valid'||w.value<=0)return {status:'invalid',message:'Wpisz prawidłową dodatnią masę ciała.'};
  if(!['dog','cat'].includes(species))return {status:'invalid',message:'Wybierz psa lub kota.'};
  let g;
  if(grade==='exact'){
   const p=number(percent);
   if(p.status==='empty')return {status:'empty'};
   if(p.status!=='valid'||p.value<0||p.value>=100)return {status:'invalid',message:'Wpisz procent odwodnienia od 0 do mniej niż 100.'};
   g={id:'exact',lo:p.value,hi:p.value,label:String(p.value)+'%'};
  }else g=grades.find(v=>v.id===grade);
  if(!g)return {status:'empty'};
  const rate=species==='cat'||cardiac?3:5,mlPerHour=w.value*rate;
  const deficit=[w.value*g.lo*10,g.hi===null?null:w.value*g.hi*10];
  const hours=deficit.map(v=>v===null?null:v/mlPerHour);
  if(![mlPerHour,...deficit.filter(v=>v!==null),...hours.filter(v=>v!==null)].every(Number.isFinite))return {status:'invalid',message:'Wartości są zbyt duże do obliczenia.'};
  return {status:'valid',kg:w.value,grade:g,rate,mlPerHour,deficit,hours,severe:g.lo>=10};
 }
 return {grades,calculate};
})();
(()=>{
 if(typeof document==='undefined')return;
 const form=document.getElementById('vf-form'),grade=document.getElementById('vf-dehydration');
 grade.innerHTML='<option value="">Wybierz stopień odwodnienia…</option>'+VetFluids.grades.map(g=>`<option value="${g.id}">${g.label} — ${g.description}</option>`).join('')+'<option value="exact">Dokładny procent…</option>';
 document.getElementById('vf-grade-guide').innerHTML=VetFluids.grades.map(g=>`<div><strong>${g.label}</strong><span>${g.description}</span></div>`).join('');
 const fmt=n=>new Intl.NumberFormat('pl-PL',{maximumFractionDigits:2}).format(n);
 const interval=(values,g,unit)=>g.upperOpen?'poniżej '+fmt(values[1])+' '+unit:g.lowerOpen?'powyżej '+fmt(values[0])+' '+unit:values[0]===values[1]?fmt(values[0])+' '+unit:fmt(values[0])+'–'+fmt(values[1])+' '+unit;
 function update(){
  const species=form.querySelector('[name=vf-species]:checked').value,cardiac=document.getElementById('vf-cardiac').checked;
  const custom=document.getElementById('vf-exact-wrap');custom.hidden=grade.value!=='exact';
  const r=VetFluids.calculate({weight:document.getElementById('vf-weight').value,species,cardiac,grade:grade.value,percent:document.getElementById('vf-percent').value});
  const error=document.getElementById('vf-error');error.hidden=r.status!=='invalid';error.textContent=r.message||'';
  document.getElementById('vf-rate-basis').textContent=(species==='cat'||cardiac?'3':'5')+' ml/kg/h';
  document.getElementById('vf-volume').textContent=r.status==='valid'?interval(r.deficit,r.grade,'ml'):'—';
  document.getElementById('vf-speed').textContent=r.status==='valid'?fmt(r.mlPerHour)+' ml/h':'—';
  document.getElementById('vf-time').textContent=r.status==='valid'?interval(r.hours,r.grade,'h'):'—';
  document.getElementById('vf-formula').textContent=r.status==='valid'?r.grade.id==='exact'?`${fmt(r.kg)} kg × ${fmt(r.grade.lo)} × 10 = ${fmt(r.deficit[0])} ml`:`${fmt(r.kg)} kg × ${r.grade.label} → ${interval(r.deficit,r.grade,'ml')}`:'Uzupełnij masę ciała i stopień odwodnienia.';
  document.getElementById('vf-severe').hidden=!(r.status==='valid'&&r.severe);
  document.getElementById('vf-cardiac-note').hidden=!cardiac;
 }
 form.addEventListener('input',update);form.addEventListener('change',update);form.addEventListener('submit',e=>e.preventDefault());
 update();
})();
