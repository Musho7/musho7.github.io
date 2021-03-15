$(document).ready(function(){
	let patasxan=["Ֆրանսիա","Հայաստան","վրաստան","Իտալիա","Իսպանիա","Գերմանիա","Հունգարիա","Պորտուգալիա","խորվաթիա","Ռուսաստան","ՈԻկրաինա","Անգլիա","Ավստրիա","Նիդեռլանդներ","Լեհաստան","Չեխիա"]	
	let rand=parseInt(Math.random()*8)
	let count=0
	let count1=0
	let nkar=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]//նկառնեռի համառնեռը
	let nk=[]
	let pat=[]
	let i=0
	let k=true
	let  L=true
	function popoxel(patasxan)
	{	
		let rand=parseInt(Math.random()*8)
		while(i<3){
			rand=parseInt(Math.random()*8)
				if(!pat.includes(patasxan[rand])){
					pat.push(patasxan[rand])
					i++
				}
		}
			let s;
		let a=parseInt(Math.random()*4)
		s=pat[0]
		pat[0]=pat[a]
		pat[a]=s
	for(let i=0; i<pat.length;i++){
		
		$(`#btn${i}`).html(pat[i])
	}
		return pat
	}
	
		for(let i=0;i<nkar.length;i++){
			let s
			let nkar_rand=parseInt(Math.random()*(nkar.length))
			let nkar_rand1=parseInt(Math.random()*(nkar.length))
			s=nkar[nkar_rand]
			nkar[nkar_rand]=nkar[nkar_rand1]
			nkar[nkar_rand1]=s
		}
		pat[0]=patasxan[nkar[count]]
	popoxel(patasxan)
	img.src=`Evropa/${nkar[count]}.jpg`
	$("#ans").click(function(){
		rand=parseInt(Math.random()*8)
		
		if($(this).html()==patasxan[nkar[count]]){
			count++
			if(count==patasxan.length){
				alert("Շնորհավոր դուք հաղթեցիք")
				location.reload()

			}
			img.src=`Evropa/${nkar[count]}.jpg`
			$(".hashiv").html(count)
			i=0
			pat=[]
			
			pat[0]=patasxan[nkar[count]]
			
		}
		else{

			$(".hashiv").css({
				color:"red"
			})
			setTimeout(function(){
			alert("duq sxalvecik")
			location.reload()
			},60)
			
	
		}	
		popoxel(patasxan)
	})
})