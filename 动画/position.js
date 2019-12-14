let part1=document.getElementById("part1");
console.log(part1)
part1.addEventListener('click',function(){
		part1.setAttribute("style","width: 25%;height: 25%;border-radius: 50%; ");
		let ps = document.getElementsByTagName("h1")
		ps[0].setAttribute("style","color:burlywood;transform: rotate(90deg);" )
		
		
})
// document.getElementById("part1").onclick=function(){
// 	console.log('----------')
// }
