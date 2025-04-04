if(!Array.prototype.myreduce){
    Array.prototype.myreduce=function(cb,initialval){
        if(!initialval){
     let acc=this[0]
        for(let i=1;i<this.length;i++){
            acc=cb(acc,this[i])

        }
        return acc
    }
    else{
        acc=initialval
        for(let i=0;i<this.length;i++){
            acc=cb(acc,this[i])

        }
        return acc
    }

    }
}

const arr=[1,2,3,4,5]
 const ans=arr.myreduce((acc,currval)=>acc+currval,12)
 

 console.log(ans)