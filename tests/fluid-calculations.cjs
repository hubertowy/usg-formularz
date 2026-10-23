const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict');
global.window=global;
vm.runInThisContext(fs.readFileSync(path.join(__dirname,'../fluid.js'),'utf8'));
const c=options=>VetFluids.calculate({weight:'10',species:'dog',grade:'exact',percent:'8',...options});
assert.deepEqual(c().deficit,[800,800]);assert.equal(c().mlPerHour,50);assert.deepEqual(c().hours,[16,16]);
assert.equal(c({cardiac:true}).mlPerHour,30);
const cat=c({weight:'4',species:'cat'});assert.deepEqual(cat.deficit,[320,320]);assert.equal(cat.mlPerHour,12);assert.equal(c({weight:'4',species:'cat',cardiac:true}).mlPerHour,12);
assert.deepEqual(c({grade:'6-8'}).deficit,[600,800]);assert.deepEqual(c({grade:'6-8'}).hours,[12,16]);
assert.equal(c({grade:'under5'}).grade.upperOpen,true);assert.deepEqual(c({grade:'under5'}).deficit,[0,500]);
assert.equal(c({grade:'over12'}).grade.lowerOpen,true);assert.deepEqual(c({grade:'over12'}).deficit,[1200,null]);assert.deepEqual(c({grade:'over12'}).hours,[24,null]);
assert.equal(c({grade:'10-12'}).severe,true);assert.equal(c({percent:'10'}).severe,true);assert.equal(c({percent:'8'}).severe,false);
assert.equal(c({weight:'11,2',percent:'7,5'}).deficit[0],840);
assert.deepEqual(c({percent:'0'}).deficit,[0,0]);
for(const weight of ['0','-1','NaN','Infinity','1e3','1.2.3'])assert.equal(c({weight}).status,'invalid');
for(const percent of ['-1','100','NaN','Infinity','1e2'])assert.equal(c({percent}).status,'invalid');
assert.equal(c({weight:''}).status,'empty');assert.equal(c({grade:''}).status,'empty');assert.equal(c({percent:''}).status,'empty');assert.equal(c({species:'rabbit'}).status,'invalid');
for(const weight of ['1','4','10','50'])for(const grade of VetFluids.grades){const r=c({weight,grade:grade.id});assert.equal(r.status,'valid');assert.ok(r.deficit.filter(n=>n!==null).every(Number.isFinite));assert.ok(r.hours.filter(n=>n!==null).every(Number.isFinite));}
console.log('Fluid calculator: litre/mL conversion, ranges, open bounds, species/cardiac rate, duration and invalid inputs verified.');
