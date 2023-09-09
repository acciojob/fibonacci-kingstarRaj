
function fibonacci(num) {
	if(num==0) return 0;
	if(num==1) return 1;
	let first  = 0 ;
	let secno  = 1 ;
	let third; 
	for(let i=2; i<=num; i++ ){
		third = first + secno;
		first = secno;
		secno = third;
		10
	}
	return secno;
}

module.exports = fibonacci;
