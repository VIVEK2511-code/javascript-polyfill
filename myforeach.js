
if(!Array.prototype.myforeach){
    Array.prototype.myforeach=function(cb){
        for(let i=0;i<this.length;i++){
            cb(this[i],i)
        }
    }
}

const arr=[1,2,3,4,5]
arr.myforeach((value,index)=> console.log(`index ${index} value ${value}`))
