
function joinTest(num){

	let arr = [];
	for(let i = 0; i < num; i++)
		arr.push(i + '');

	let start = Date.now();
	let str = '';

	for(let i = 0; i < num; i++){
		str += arr[i];
	}

	let end = Date.now();
	let time1 = end - start;

	start = Date.now();
	let arr = [];
	for(let i = 0; i < num; i++){
		arr.push(arr[i]);
	}
	let str1 = arr.join();
	end = Date.now();
	let time2 = end - start;

	console.log('test count : %j, \ncost 1 : %j, \ncost 2 : %j', num, time1, time2);
}

joinTest(100);
joinTest(50000);
joinTest(100000);
joinTest(200000);
//joinTest(500000);