$(document).ready(function(){
	let patasxan=["Ֆրանսիա","Հայաստան","վրաստան","Իտալիա","Իսպանիա","Գերմանիա","Հունգարիա","Պորտուգալիա","խորվաթիա","Ռուսաստան","ՈՒկրաինա","Անգլիա","Ավստրիա","Նիդեռլանդներ","Լեհաստան","Չեխիա","Ռումինիա","Սերբիա","Շվեյցարիա","Նորվեգիա"]	
	let rand=parseInt(Math.random()*8)
	let count=0
	let count1=0
	let nkar=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]//նկառնեռի համառնեռը
	let nk=[]
	let pat=[]
	let i=0
	let k=true
	let  L=true
	function popoxel(patasxan)
	{	
		let rand=parseInt(Math.random()*patasxan.length)
		while(i<3){
			rand=parseInt(Math.random()*patasxan.length)
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
	img.src=`${nkar[count]}.jpg`
	$(".patasxan button").click(function(){
		rand=parseInt(Math.random()*8)
		
		if($(this).html()==patasxan[nkar[count]]){
			count++
			img.src=`${nkar[count]}.jpg`
			if(count==patasxan.length){
			img.src="black.jpg"
			$(".rbtn").css({
			display:"block"
			})
			$(".patasxan button").css({
				display:"none"
			})
			$(".hashiv").css({
				display: "none",
			})
			$(".harc").css({
				"margin-top":"76px"
			})
			$(".end").css({
				display: "block",
			})
			$('.end').css({
				"font-size": "30px"
			})
			$(".end").html(count+`/${patasxan.length} Շնորհավոր դուք հաղթեցիկ`)
			if(count>5){
				$(".end").css({
				color:"green"
			})
			}
			}
			$(".hashiv").html(count)
			i=0
			pat=[]
			
			pat[0]=patasxan[nkar[count]]
			
		}
		else{

			$(".hashiv").css({
				color:"red"
			})
			$(".rbtn").css({
				display:"block"
			})
			$(".patasxan button").css({
				display:"none"
			})
			$(".hashiv").css({
				display: "none",
			})
			$(".harc").css({
				"margin-top":"76px"
			})
			img.src="black.jpg"
			$(".end").css({
				display: "block",
			})
			$(".end").html(count+`/${patasxan.length}`)
			if(count>5){
				$(".end").css({
				color:"green"
			})
			}
		}	
		popoxel(patasxan)
	})
	$(".rbtn").click(function(){
		location.reload()
	})
})