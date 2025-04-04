if(!Array.prototype.mymap){
    Array.prototype.mymap=function(cb){
        const result=[]
        for(let i=0;i<this.length;i++){
            const value=cb(this[i])
            result.push(value)

        }
        return result
    }
    
}
const arr=[1,2,3,4,5,6]
   const ans=arr.mymap((e)=>e*5)
   console.log(ans)