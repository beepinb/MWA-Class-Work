import { Token } from "./MyDecorator.js";
import { Student } from "./Student.js";

@Token({course:"Test1",canProgram:true})
export class Test1 extends Student{
    
} 