function fibonacci(num) {
	if(num==0) return 0;
	if(num==1) return 1;
	let first  = 0 ;
	let secno  = 1 ;
	let third; 
	while(num>1){
		third = first + secno;
		first = secno;
		secno = third;
		num--;
	}
	return secno;
}

module.exports = fibonacci;
