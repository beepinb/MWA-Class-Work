export function Token(token:{course:string,canProgram:boolean}){
    return function(constructor:Function){
        constructor.prototype.course=token.course;
        constructor.prototype.canProgram=token.canProgram;
        if(token.canProgram){
            constructor.prototype.program=function(){
                console.log("I am programming...");
                console.log(constructor);
                console.log(token);
                
            };
        }
    }
} 