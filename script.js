function number(num){
    let add = "";
        while(num > 0){
            
            let str = num%2;
            add = str.toString() + add;

            num =Math.floor(num/2);
          
        }
        return add;
    
    }

module.exports = threeSum;