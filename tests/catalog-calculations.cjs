const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');const path=require('node:path');const root=path.resolve(__dirname,'..');global.window=global;
for(const file of ['extra-drugs.js','supplements.js','renal-supplements.js','dermatology.js','human-drugs.js','thyroid-drugs.js','steroid-drugs.js','added-drugs.js','clinical-drugs.js','ilovet.js','expanded-drugs.js','drugs.js'])vm.runInThisContext(fs.readFileSync(path.join(root,file),'utf8'),{filename:file});
const entry=key=>Ilovet.entries.find(d=>d.id==='ilovet-'+key);
const calc=(key,kg,s='dog')=>VetDrugs.calculate(entry(key),s,String(kg));
assert.equal(Ilovet.entries.length,53);assert.equal(new Set(Ilovet.entries.map(e=>e.id)).size,53);assert.equal(new Set(Ilovet.entries.map(e=>e.name)).size,53);
assert.equal(Ilovet.entries.filter(e=>e.topical).length,4);
assert.equal(calc('nefrokrill',7).amount,1);assert.equal(calc('nefrokrill',11).amount,2);assert.equal(calc('nefrokrill',50).amount,3);assert.equal(calc('nefrokrill',7,'cat').amount,1);
assert.equal(calc('artikrill-dol-cane-e-gatto',20).amount,2.4);assert.equal(calc('artikrill-dol-cane-e-gatto',4,'cat').amount,1.2);
assert.equal(calc('carobin-pet-forte-cane-e-gatto-2',25).amount,1.5);
assert.equal(calc('ribes-pet-kapsulki',10).status,'ilovetCheck');assert.equal(calc('omega-pet-cane-e-gatto-plyn',20).status,'ilovetCheck');assert.equal(calc('urikrill-cane-e-gatto',30).status,'ilovetCheck');
assert.equal(calc('reufolb12-cane-e-gatto',4,'cat').frequency,'co drugi dzień');assert.equal(calc('ribes-pet-symbio-cane-e-gatto',60).frequency,'dwa razy dziennie');
assert.equal(VetDrugs.calculate(entry('oftalid-masc'),'cat','').status,'ilovetCare');assert.equal(calc('artikrill-cane',5,'cat').status,'species');assert.equal(calc('nefrokrill',0).status,'invalid');
for(const e of Ilovet.entries){assert.ok(e.species.length);assert.ok(e.source.startsWith('https://ilovet.pl/'));for(const s of e.species)for(const w of [0.5,2,5,10,10.5,11,20,25,26,30,50,60,100]){const r=VetDrugs.calculate(e,s,String(w));assert.ok(['ilovetDose','ilovetCare','ilovetCheck'].includes(r.status),e.id+' '+r.status);if(r.status==='ilovetDose'){assert.ok(Number.isFinite(r.amount)&&r.amount>0);assert.ok(r.frequency);}}}
assert.ok(VetDrugs.search('illovet','supplement','dog').length>40);
console.log('Ilovet: 53 unique formulations; species, boundary conflicts, units, frequency and capsule limits verified.');
const a=require('node:assert/strict');
const get=id=>VetDrugs.entries.find(d=>d.id===id);const c=(id,w,s='dog',plan)=>VetDrugs.calculate(get(id),s,String(w),plan,'adult');
a.equal(ExpandedDrugs.entries.length,35);
a.equal(new Set(VetDrugs.entries.map(d=>d.id)).size,VetDrugs.entries.length);
a.deepEqual(c('rheumocam-oral',15,'dog','first').ml,[2]);a.deepEqual(c('rheumocam-oral',15,'dog','next').ml,[1]);
a.deepEqual(c('rheumocam-inj',4,'cat','postop').ml,[.24]);a.equal(c('rheumocam-inj',1.9,'cat','postop').status,'blocked');
a.deepEqual(c('eluracat',5,'cat','daily').ml,[.5]);a.deepEqual(c('catosal',20,'dog','im').ml,[2,3]);
a.equal(c('catosal',5,'cat','im').status,'species');a.deepEqual(c('enrogal',20,'dog','sc').ml,[2]);
a.deepEqual(c('fenbendazol-animedica',4,'cat','course').ml,[2]);a.deepEqual(c('drontal-junior',.6,'dog','single').ml,[.6]);a.equal(c('drontal-junior',.5,'dog','single').status,'blocked');
a.deepEqual(c('mirataz',4,'cat').amount,[.1]);a.equal(c('mirataz',1.9,'cat').status,'blocked');
a.deepEqual(c('clevor',20).amount,[3]);a.equal(c('clevor',5.05).status,'outside');
a.deepEqual(c('tralieve-20',10).amount,[1,2]);a.deepEqual(c('tralieve-80',10).amount,[.25,.5]);
a.equal(c('clavusan-small',1.25).amount[0],.25);a.equal(c('clavusan-small',1.251).amount[0],.5);a.equal(c('clavusan-medium',25).amount[0],1);a.equal(c('clavusan-large',13).status,'outside');a.equal(c('clavusan-large',10,'cat').status,'species');
for(const [id,w,expected] of [['credelio-dog',5.5,'112 mg'],['credelio-dog',5.501,'225 mg'],['nexgard',10,'28 mg'],['nexgard',10.1,'68 mg'],['simparica',20,'40 mg'],['simparica',20.01,'80 mg'],['simparica-trio',2.5,'3 + 0,06 + 12,5 mg'],['bravecto-oral',4.5,'112,5 mg'],['bravecto-spot-cat',2.8,'112,5 mg']])a.equal(c(id,w,id.includes('cat')?'cat':'dog').strength,expected,id);
a.equal(c('advantix',4,'cat').status,'species');a.equal(c('advantix',41).status,'outside');a.ok(c('advantix',10).source.includes('/20769/'));
a.deepEqual(c('milbenin',1).amount,[1]);a.equal(c('milbenin',.9).status,'blocked');a.equal(c('milbenin',5.1).strength,'12,5 + 125 mg');a.deepEqual(c('milprazon-dog',.5).amount,[.5]);
a.deepEqual(c('milprazon-cat',3,'cat').amount,[.5]);a.deepEqual(c('quanifen',2.5,'cat').amount,[.25]);a.deepEqual(c('quanifen',2.501,'cat').amount,[.5]);a.equal(c('quanifen',5.5).status,'outside');
a.deepEqual(c('aniprazol',2.5,'cat').amount,[.25]);a.deepEqual(c('aniprazol',3,'cat').amount,[.5]);a.equal(c('aniprazol',3,'cat').rounded,true);a.deepEqual(c('drontal-cat',4,'cat').amount,[1]);a.deepEqual(c('dehinel-cat',4.1,'cat').amount,[1.5]);
a.deepEqual(c('drontal-dog',5).amount,[.5]);a.deepEqual(c('drontal-dog',5.1).amount,[1]);a.deepEqual(c('drontal-dog-xl',35).amount,[1]);
// The model returns a single safe status on every species and boundary, never NaN.
for(const d of ExpandedDrugs.entries)for(const s of ['dog','cat'])for(const w of [.1,.5,1,2,5,10,13.9,20,25,40,60,100,1000]){
 const plan=d.regimens?.[s]?.[0]?.id; const r=c(d.id,w,s,plan);a.ok(['species','blocked','outside','scheme','expandedDose','select'].includes(r.status),d.id+' '+r.status);
 if(r.status==='expandedDose')a.ok(r.amount.every(v=>Number.isFinite(v)&&v>0),d.id);
 if(r.status==='scheme')a.ok(r.ml.every(v=>Number.isFinite(v)&&v>0),d.id);
}
console.log('Medicines: 35 entries verified, including species restrictions, formulation separation, strengths, boundary gaps, fixed topical dose and treatment stages.');

// Requested tablet rounding preserves the exact target separately from the dispensed amount.
a.deepEqual(c('aniprazol',13).amount,[1.5]);a.deepEqual(c('aniprazol',13).targetMg,[65]);a.deepEqual(c('aniprazol',13).actualMg,[75]);
a.deepEqual(c('dehinel-plus',13).amount,[1.5]);a.deepEqual(c('dehinel-xl',17.5).amount,[.5]);
a.equal(c('simparica-trio',13).antiparasitic,true);a.deepEqual(c('simparica-trio',13).weightBand,{lo:10,hi:20,loOpen:true});
a.ok(c('simparica',13).protection.includes('5 tygodni'));
const rheumo10=c('rheumocam-tablets',10);a.equal(rheumo10.strength,'1 mg');a.equal(rheumo10.stages[0].tablets,2);a.equal(rheumo10.stages[1].tablets,1);
a.equal(c('rheumocam-tablets',13).stages[0].tablets,3);a.equal(c('rheumocam-tablets',13).stages[1].tablets,1.5);
a.equal(c('rheumocam-tablets',25).strength,'2,5 mg');a.equal(c('rheumocam-tablets',25).stages[0].tablets,2);
a.equal(c('rheumocam-tablets',3.9).status,'blocked');a.equal(c('rheumocam-tablets',7.05).status,'outside');a.equal(c('rheumocam-tablets',10,'cat').status,'species');
console.log('Rheumocam tablets, parasite weight bands and quarter/half rounding verified.');
// Automatic presentation includes every strength with a usable dose, without extrapolating table gaps.
const matches=(name,w,s='dog')=>VetDrugs.matchingVariants(VetDrugs.entries.filter(d=>d.name===name),s,String(w)).map(d=>d.id);
a.deepEqual(matches('Clavusan · tabletki',13),['clavusan-medium']);
a.deepEqual(matches('Clavusan · tabletki',10),['clavusan-medium','clavusan-large']);
a.deepEqual(matches('Tralieve · tabletki',13),['tralieve-20','tralieve-80']);
a.deepEqual(matches('Clavusan · tabletki',10,'cat'),['clavusan-medium']);
a.deepEqual(matches('Clavusan · tabletki',0),[]);
a.equal(c('rheumocam-tablets',13).stages[0].calculatedTablets,2.6);
a.equal(c('rheumocam-tablets',13).stages[0].tablets,3);
a.equal(c('aniprazol',13).showWeightBand,false);a.equal(c('quanifen',13).showWeightBand,false);
a.equal(c('milbenin',13).showWeightBand,false);a.equal(c('simparica',13).showWeightBand,true);
console.log('Automatic strength options, single-strength parasite summaries and theoretical tablet conversion verified.');

// Physical tablet proposals always respect the formulation subdivision.
a.equal(c('rheumocam-tablets',11.2).stages[0].tablets,2.5);
a.equal(c('rheumocam-tablets',11.2).stages[0].rounded,true);
a.ok(Math.abs(c('rheumocam-tablets',11.2).stages[0].mg-2.24)<1e-9);
a.deepEqual(c('levogland-200',11.2).proposals.map(p=>p.tablets),[1.25,.75]);
a.deepEqual(c('levogland-200',11.2).proposals.map(p=>p.ug),[250,150]);
a.equal(c('forthyron-200',13).proposal.tablets,.75);

// Dechra renal products have fixed daily portions per cat, not weight-based drug doses.
for(const id of ['dechra-porus-one','dechra-catney-one']){
 for(const w of ['', '2', '5', '10']){const r=VetDrugs.calculate(get(id),'cat',w);a.equal(r.status,'fixedSupplement');a.equal(r.amount,1);a.equal(r.unit,'saszetka');}
 a.equal(VetDrugs.calculate(get(id),'dog','5').status,'species');
 a.equal(get(id).library,'supplement');
}
a.equal(VetDrugs.search('Dechra','supplement','cat').length,2);

// Thiamacare: fixed starting dose per cat, not per kg; two administrations per day.
const thiamacare=get('thiamacare-10');
a.equal(thiamacare.concentration,10);
for(const weight of ['', '2', '5', '10']) {
 const dose=VetDrugs.calculate(thiamacare,'cat',weight,'initial');
 a.equal(dose.status,'scheme');a.equal(dose.fixed,true);
 a.deepEqual(dose.ml,[.25]);a.deepEqual(dose.amount,[2.5]);
 a.equal(dose.ml[0]*2,.5);a.equal(dose.amount[0]*2,5);
}
a.equal(VetDrugs.calculate(thiamacare,'dog','5','initial').status,'species');
a.equal(VetDrugs.search('Thiamacare','vet','cat').length,1);
a.equal(VetDrugs.search('Thiamacare','vet','dog').length,0);
a.equal(VetDrugs.presentation(thiamacare,'cat').length,1);
console.log('Thiamacare: feline fixed initial dose, concentration, daily totals and search verified.');
