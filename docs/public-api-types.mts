// Purpose: Compile-time exercise of the public declarations.
import{extract,estimate,FakeJev,type Schema}from'../src/index.mjs';const schema:Schema={fields:{flag:{kind:'flag',description:'Flag'}}};estimate(schema,'text');void extract(schema,'text',new FakeJev());
