// Purpose: Hand-written public declarations for typed extraction integrations.
export interface Schema{fields:Record<string,{kind:'enum'|'flag'|'level'|'candidate';description:string;values?:string[];candidate_pattern?:string;absent?:boolean;aggregate?:'first'|'any'|'all'|'max_probability'|'majority'}>}
export declare function candidates(text:string,pattern?:string):Array<{kind:string;value:string;start:number;end:number}>;
export declare function packingPlan(questions:unknown[],stateChars:number,options?:Record<string,number>):unknown[][];
export declare function aggregate(values:Array<{value:unknown;probability:number}>,rule:string):unknown;
export declare function estimate(schema:Schema,text:string,options?:Record<string,number>):Record<string,number>;
export declare class FakeJev{calls:unknown[];constructor(fixtures?:Record<string,unknown>)}
export declare function extract(schema:Schema,text:string,provider?:FakeJev,options?:Record<string,number>):Promise<Record<string,unknown>>;
