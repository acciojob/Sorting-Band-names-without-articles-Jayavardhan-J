//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let arr=[];
let map={};
for(let i=0;i<touristSpots.length;i++){
	let words = touristSpots[i].split(" ");
	let finalStr="";
	for(let j=0;j<words.length;j++){
		let curr=words[j].toLowerCase();
		if(curr!='the' && curr!='a' && curr!='an')finalStr=word[j]+" ";
		
	}
	let withoutArticle = finalStr.trim();
	map[withoutArticle]=touristSpots[i];
	arr.push(withoutArticle);
}
arr.sort();
let ans=[];
for(let i in arr){
	ans[i]=map[arr[i]];
}
console.log(ans);