
function fibonacci(num) {
	
	if(num==1) return 0;
	
	let first  = 0 ;
	let secno  = 1 ;
	let third; 
	while(num > 2){
		third = first + secno;
		first = secno;
		secno = third;
		num--;
	}
	return secno;
}

module.exports = fibonacci;
