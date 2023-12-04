class myclass{
    constructor(){
        console.log("initiate");
    }
    add(arg1,arg2){
        var result;
        result = arg1 + arg2;
        return result;
    
    }
    callAnotherfn(arg1,arg2){    
        var result=this.add(arg1,arg2);
        return result;
    }
    calltheCallback(callback){
        callback();
    };
}
module.exports = myclass;