function threeSum(arr, target) {
// write your code here

	arr.sort((a , b)=>a-b);

	let n = arr.length;
	let closestSum = Infinity;

	for(let i=0; i<n-2; i++){
		let left = i+1;
		let right = n-1;
		while(left<right){
			let sum = arr[i]+arr[left]+arr[right];

			if(Math.abs(target-sum) < Math.abs(target-closestSum)){
				closestSum = sum;
			}

			if(sum < target){
				left++;
			}
			else{
				right--;
			}
		}
	}
		return closestSum;
  
}

module.exports = threeSum;
//  let s = "";
// function number(n){
// 	while(n>0){
// 		s += n%2;
// 		n = parseInt(n/2);
// 	}
// // 	return s;
// }
//   number(n);
  
//   let ans = ""
// 	for(let i=s.length-1; i>=0; i--){
// 	  ans += s[i];
// 	}
// console.log(ans);
// module.exports = threeSum;