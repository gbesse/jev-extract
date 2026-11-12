import test from 'node:test';import assert from 'node:assert/strict';import {extract}from '../src/index.mjs';
async function fixture(rule,values){let i=0;const schema={fields:{flag:{kind:'flag',description:'Synthetic flag',aggregate:rule}}};return extract(schema,'aabb',{async judge(){return {flag:{value:values[i++],probability:.9}};}},{chunkChars:2});}
test('any retains true in final record',async()=>assert.equal((await fixture('any',[true,false])).record.flag,true));
test('all retains false in final record',async()=>assert.equal((await fixture('all',[true,false])).record.flag,false));
test('majority scalar is not discarded',async()=>assert.equal((await fixture('majority',[true,true])).record.flag,true));
test('selected object still unwraps value',async()=>assert.equal((await fixture('max_probability',[true,true])).record.flag,true));
