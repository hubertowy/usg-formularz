const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const ctx={};ctx.window=ctx;
for(const file of ['lab-interpretations.js','laboratory-reading.js','laboratory.js'])vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'..',file),'utf8'),ctx);
const {cards,compare}=ctx.VetLaboratory;
const c=o=>compare({value:'20',lower:'10',upper:'30',unit:'U/L',...o});
assert.equal(c({}).status,'within');assert.equal(c({value:'10'}).status,'within');assert.equal(c({value:'30'}).status,'within');assert.equal(c({value:'9,5'}).status,'low');assert.equal(c({value:'30.1'}).status,'high');
assert.equal(c({value:'0',lower:'0'}).status,'within');
for(const value of ['-1','NaN','Infinity','1e9','20 mg','1,2,3'])assert.equal(c({value}).status,'invalid',value);
assert.equal(c({value:''}).status,'empty');assert.equal(c({unit:' '}).status,'invalid');assert.equal(c({lower:'40'}).status,'invalid');assert.equal(c({lower:'30'}).status,'low');
assert.equal(c({lower:'',upper:''}).status,'empty');assert.equal(c({lower:'',upper:'30'}).status,'bound');assert.equal(c({lower:'10',upper:''}).status,'bound');assert.equal(c({lower:'',upper:'10'}).status,'high');assert.equal(c({lower:'30',upper:''}).status,'low');
assert.equal(cards.length,81);assert.equal(new Set(cards.map(c=>c.id)).size,81);
for(const card of cards){for(const field of ['what','high','low','factors','dog','cat','source'])assert.ok(card.referenceOnly||card[field],card.id+': '+field);assert.ok(card.source.startsWith('https://'));assert.ok(card.related.every(id=>cards.some(c=>c.id===id)));assert.ok(card.units.length);assert.ok(!('normal' in card));}
console.log('Laboratory: comparison boundaries, decimal comma, one-sided ranges, invalid input and all 81 cards verified.');
const {preset,labwet}=ctx.VetLaboratory;
assert.equal(Object.keys(labwet.ranges).length,69);
for(const [id,unit,dog,cat] of [['hct','L/L',['0,37','0,55'],['0,30','0,45']],['wbc','10⁹/L',['6,0','12,0'],['6,0','18,0']],['plt','10⁹/L',['200','580'],['200','600']],['retic','%',['','1,0'],['','0,6']],['alt','U/L',['5','60'],['10','107']],['alp','U/L',['5','155'],['7','107']],['creat','mg/dl',['0,8','1,7'],['1,0','2,0']]]){
 for(const [species,expected] of [['dog',dog],['cat',cat]]){const r=preset('labwet',id,species);assert.equal(r.unit,unit);assert.equal(r.lower,expected[0]);assert.equal(r.upper,expected[1]);assert.equal(r.value,'');}
}
assert.equal(preset('labwet','sdma','cat'),null);assert.equal(preset('labwet','usg','dog'),null);assert.equal(preset('manual','alt','dog'),null);
assert.equal(compare({...preset('labwet','retic','cat'),value:'0,6'}).status,'bound');assert.equal(compare({...preset('labwet','retic','cat'),value:'0,7'}).status,'high');
console.log('Lab-Wet: all 14 species-specific ranges, exact units, one-sided reticulocytes and missing references verified.');

const {searchCards,directionFor,qualitative,mechanisms}=ctx.VetLaboratory;
for(const [q,id] of [['ALAT','alt'],['GPT','alt'],['AP','alp'],['PCV','hct'],['gestosc moczu','usg'],['bakteriuria','ur-bacteria']])assert.ok(searchCards(q,'hemo').some(c=>c.id===id),q);
assert.equal(searchCards('', 'bio').length,48);assert.equal(searchCards('nieistniejacyparametr','hemo').length,0);
assert.equal(directionFor(c({})), 'within');assert.equal(directionFor(c({value:'40'})), 'high');assert.equal(directionFor(c({value:'2'})), 'low');assert.equal(directionFor(c({upper:''})), 'all');assert.equal(directionFor(c({value:'bad'})), 'all');
for(const id of ['ur-protein','ur-bacteria','ur-crystals','ur-casts'])assert.ok(qualitative[id].options.length>2);
assert.ok(qualitative['ur-crystals'].types.length);assert.ok(qualitative['ur-casts'].types.length);assert.equal(mechanisms.creat.high.length,3);
console.log('Knowledge views: global synonyms, direction selection, urine descriptive models and creatinine mechanisms verified.');

const source=JSON.parse(fs.readFileSync(require('node:path').join(__dirname,'labwet-source-tables.json'),'utf8')).tables;
const sections={0:['wbc','rbc','hgb','hct','mcv','mch','mchc','rdw','plt','mpv','esr'],1:['bands','neut','eos','baso','lymph','mono'],2:['anisocytosis','polychromasia','poikilocytosis','nrbc','retic'],3:['pt','aptt','fibrinogen'],10:['ast','alt','alp','glucose','creat','urea','total-protein','bilirubin','albumin','ggt','gldh','calcium','phosphorus','magnesium','cholesterol','ldh','ck','triglycerides','sodium','potassium','chloride','globulin','amylase','lipase','fructosamine','copper','zinc','iron','uric-acid'],11:['t3','t4','ft3','ft4','tsh'],12:['cortisol','phenobarbital','insulin','estradiol-male','estradiol-female','testosterone-male','testosterone-female','pth','b12','tli']};
const parseSource=t=>{
 t=t.trim();if(t==='—')return null;
 if(t.includes('normalnie nie występują'))return [0,0,false];
 if(t.startsWith('do '))return [null,Number(t.slice(3).replace(',','.')),false];
 if(t.startsWith('<'))return [null,Number(t.slice(1).replace(',','.')),true];
 const a=t.split('-').map(v=>Number(v.trim().replace(',','.')));assert.equal(a.length,2,t);assert.ok(a.every(Number.isFinite),t);return [...a,false];
};
const unitKey=t=>t.split('\n')[0].replace(/\s*\([^)]*\)/g,'').replace(/^x/,'').replace(/μ/g,'µ').toLowerCase().replace('sek','s');
let verified=0;
for(const [ti,ids] of Object.entries(sections)){
 assert.equal(source[ti].length-1,ids.length);
 ids.forEach((id,i)=>{
 const row=source[ti][i+1],card=cards.find(c=>c.id===id);assert.ok(card,id);
 const r=labwet.ranges[id];
 if(r.descriptive){assert.ok(row[2].text.includes('nie stwierdzono'));assert.equal(r.dogText,'nie stwierdzono');assert.equal(r.catText,'nie stwierdzono');verified++;return;}
 if(id!=='nrbc')assert.equal(unitKey(r.unit),unitKey(row[1].text),id+' unit');
 for(const [species,col] of [['dog',2],['cat',3]]){
 const lines=(row[col]||row[2]).text.split('\n');
 for(let j=0;j<(r.variants?2:1);j++){
 const expected=parseSource(lines[j]);const got=preset('labwet',id,species,j===1?'%':r.unit);
 if(expected===null){assert.equal(got,null,id+' '+species);continue;}
 assert.ok(got,id+' '+species);assert.equal(got.lower===''?null:Number(got.lower.replace(',','.')),expected[0],id+' '+species+' lower');assert.equal(got.upper===''?null:Number(got.upper.replace(',','.')),expected[1],id+' '+species+' upper');assert.equal(got.upperExclusive,expected[2],id+' strict upper');
 }
 }
 verified++;
 });
}
assert.equal(verified,69);
assert.equal(compare({...preset('labwet','baso','dog'),value:'0'}).status,'within');assert.equal(compare({...preset('labwet','baso','dog'),value:'0,1'}).status,'high');
assert.equal(compare({...preset('labwet','testosterone-female','cat'),value:'0,5'}).status,'high');assert.equal(compare({...preset('labwet','testosterone-female','cat'),value:'0,4'}).status,'bound');
assert.equal(preset('labwet','tli','cat'),null);
console.log('Official Lab-Wet DOM snapshot: all 69 rows, species columns, units, percent variants, descriptions and exclusive boundaries verified.');

const {knowledge}=ctx.VetLaboratory;
assert.equal(Object.keys(knowledge).length,81);
for(const card of cards){
 const k=knowledge[card.id];assert.ok(k,card.id+' knowledge');assert.equal(card.referenceOnly,false,card.id);
 for(const field of ['what','factors','context'])assert.ok(typeof k[field]==='string'&&k[field].length>75,card.id+' '+field);
 for(const direction of ['high','low'])assert.ok(k[direction].length&&k[direction].every(r=>r.length===2&&r[0]&&r[1].length>30),card.id+' '+direction);
 assert.ok(k.sources.length&&k.sources.every(u=>u.startsWith('https://')));assert.ok(k.related.length,card.id+' related');
 assert.ok(!card.what.includes('parametr z tabeli zakresów'),card.id+' placeholder');
}
assert.ok(knowledge.cortisol.context.includes('dynamiczne'));assert.ok(knowledge.insulin.context.includes('glukoza'));assert.ok(knowledge.tli.context.includes('innego laboratorium'));assert.ok(knowledge.lipase.factors.includes('cPL/fPL'));assert.ok(knowledge.urea.factors.includes('BUN'));assert.ok(knowledge.pth.context.includes('Wynik „w normie”'));
console.log('Interpretations: all 81 cards have substantive summaries, high/low mechanisms, limitations, related tests and sources; no reference-only cards remain.');

const reading=ctx.LaboratoryReading;
assert.deepEqual(Object.keys(reading).sort(),Object.keys(knowledge).sort());
for(const card of cards){
 const r=reading[card.id];
 assert.ok(r.physiology.length>=2,card.id+' physiological mechanism');
 assert.ok(r.physiology.every(p=>p.length>120),card.id+' substantive physiology');
 assert.ok(r.within.length>95,card.id+' within-range limitations');
 assert.ok(r.attention.length>75,card.id+' clinical attention');
 assert.ok(r.analysis.length>240,card.id+' integrated interpretation');
}
assert.ok(reading.insulin.within.includes('glukoza'));
assert.ok(reading.pth.within.includes('nieadekwatne'));
assert.ok(reading['ur-bacteria'].attention.includes('nie stanowi automatycznego wskazania'));
assert.ok(reading.plt.within.includes('trombocytopatii'));
assert.ok(reading.phenobarbital.physiology[0].includes('lekiem'));
console.log('Reading cards: all 81 parameters have physiology, within-range interpretation and parameter-specific attention; key clinical distinctions preserved.');

assert.equal(cards.filter(c=>c.id==='tli').length,1);
for(const alias of ['B9','foliany','kwas foliowy'])assert.equal(ctx.VetLaboratory.searchCards(alias,'bio','dog')[0].id,'folate');
assert.equal(ctx.VetLaboratory.searchCards('cPL','bio','dog')[0].id,'cpl');
assert.equal(ctx.VetLaboratory.searchCards('fPL','bio','cat')[0].id,'fpl');
assert.equal(ctx.VetLaboratory.searchCards('cPL','bio','cat').length,0);
assert.equal(ctx.VetLaboratory.searchCards('fPL','bio','dog').length,0);
for(const alias of ['cTLI','fTLI'])assert.equal(ctx.VetLaboratory.searchCards(alias,'bio')[0].id,'tli');
assert.ok(knowledge.folate.context.includes('nie jest wskazaniem do antybiotyku'));
assert.ok(knowledge.cpl.low.some(r=>r[1].includes('nie rozpoznaje')));
console.log('B9, cPL/fPL: aliases, species restrictions, TLI uniqueness and clinical distinctions verified.');
