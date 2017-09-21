$(function(){
	let play = document.querySelector('.play')
	let bef =document.querySelector('.before')
	let nex = document.querySelector('.nex')
	let jindu = document.querySelector('.jindu')
	let jin = document.querySelector('.jin')
	let audio = document.querySelector('audio')
	let text= document.querySelector('.text')
	let song = document.querySelector('.songname')
	let singer = document.querySelector('.singer')
	let img = document.querySelector('img')
	let start = document.querySelector('.start')
	let end = document.querySelector('.end')
	let sound = document.querySelector('.sounds')
	let voice = document.querySelector('.sound')
	let vo = document.querySelector('.vo')
	let bar = document.querySelector('.yuan')
	let next = document.querySelector('.next')
	let before = document.querySelector('.before');
	let i = 0
	let ul = document.querySelector('.contant')
	let texts = document.querySelector('textarea')
	let max = 120
	let tips = document.querySelector('.tips>span')
	let submits = document.querySelector('button')
	let Text= document.querySelector('.contant>li')
	$('textarea').keyup(function(){
		let val = $('textarea').val()
		$('.tips>span').text(`${max-val.length}`)
	})
	$('button').click (function(){
			let val = $('textarea').val()
			$('textarea').val('')
			$('.contant>li').html(`<div>${val}</div> `) 	
			$('.contant').prependTo('.contant>li')	
		})
	
	$('.play').click(function(){
		if(audio.paused){
			audio.play()
			$('.play').html('&#xe640;')
		}else{
			audio.pause()
			$('.play').html('&#xe642;')
			
		}
	})
	function render(data){
		$('.songname').html(data.songs)
		$('.singer').html(data.name)
		$('audio').src= data.src
		$('img').src = data.photo
		$('.start').html('00:00')
		$('.end').html(data.alltime)
		$('.text').html('')
		for (let i = 0; i < data.lyrics.length; i++) {
			$('.text').innerHTML+=`<li>${data.lyrics[i].lyric}</li>`
		}
	}
	
	audio.timeupdate(function(){
		let bili = audio.currentTime/audio.duration;
		$('.jin').css(width: `${bili*100}%`);
		let  st = time(audio.currentTime)
		$('.start').innerText = st

		database[i].lyrics.each((element,index)=>{
			if(element.time == st){
				text.html()
				let a  = index
				if(index<6){
					index = 0
				}
				if(index>=6){
					index -=6
				}
				for(let j =index;j<database[i].lyrics.length;j++){
					text.innerHTML+=`<li class = text${j}>${database[i].lyrics[j].lyric}</li>`

				}
				$(`.text${a}`).css({color:'#8DEEEE'})

			}
		})
	})

	render(database[i])
	$('.before').click(function(){
		i--
		if(i==-1){
			i =  database.length-1
			render(database[i])
			audio.play()
			play.html('&#xe640;')
		}else{
			render(database[i])
			audio.play()
			play.html('&#xe640;')
		}
	})
	$('.next').click(function(){
		i++
		if(i==database.length){
			i = 0
			render(database[i])
			audio.play()
			play.html('&#xe640;')
		}else{
			render(database[i])
			audio.play()
			play.html('&#xe640;')
		}
	})
	function time(date){
		let min = Math.floor(date/60)>=10?Math.floor(date/60):`0${Math.floor(date/60)}`
		let sec = Math.floor(date%60)>=10?Math.floor(date%60):`0${Math.floor(date%60)}`
		return `${min}:${sec}`
	}
	$('.sound').click(function(){
		$(this).show()
	})
	$('.sound').mouseleave(function(){
		$(this).hide()
	})

$('.yuan').mousedown(function(e){
		let cy = -e.clientY
		let cx = $('.yuan').offset()
		$('.yuan').mousemove(function(e){
			let oy = -e.clientY
			let tops = cy-oy+cx
			if(tops<=0){
				tops = 0
			}
			if(tops>=voice.offsetHeight-12){
				tops = voice.offsetHeight-12
			
			}
		$('.yuan').css({top:`${tops}px`})
		$('.vo').css({height:`${tops}px`})
		audio.volume = 1-tops/voice.offsetHeight
		})
		$('.yuan').mouseup(function(){
		$('.yuan').mousemove()
		$('.yuan').mouseup()
		
	  })
	})
	


})