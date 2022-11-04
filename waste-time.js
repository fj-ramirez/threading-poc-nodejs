// Source: https://gist.github.com/sqren/5083d73f184acae0c5b7

export function wasteTime(baseNumber = 8){
	let result = 0;	
	for (var i = Math.pow(baseNumber, 7); i >= 0; i--) {		
		result += Math.atan(i) * Math.tan(i);
	};
}
