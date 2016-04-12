window.onload=function(){
		//移动
	var box=document.getElementById("box");
	var speed=0;
	var dist=500;
	var mytime=null;
	var move=function(){
		clearInterval(mytime);
		mytime=setInterval(function(){
			if(box.offsetLeft<dist){
				speed++;
				box.style.left=speed*5+"px";
			}
			
		},1)
	};
	box.onclick=function(){
			move();
			
	};
	
	//消失
//	var box2=document.getElementById("box2");
//	box2.style.opacity=1;
//	console.log(box2.style.width);
//	var speed2=0.1;
//	var mytime2=null;
//	var fade=function(){
//		clearInterval(mytime2);
//		mytime2=setInterval(function(){
//			if(box2.style.opacity>0){
//				box2.style.opacity-=speed2;
//			};
//		},10);
//	};
//	box2.onclick=function(){
//		fade();
//			console.log(box2.style.width);
//	}
	
	function fadeDom(){};
	fadeDom.prototype={
		box:null,
		opacity:function(){
			this.box.style.opacity=1;
		},
		speed:0.1,
		mytime:null,
		fadeout:function(){
			var that=this;
			clearInterval(this.mytime);
			mytime=setInterval(function(){
				if(that.box.style.opacity>0){
					that.box.style.opacity-=that.speed;
				};
			},10);
		},
	};
	var f1=new fadeDom();
	f1.box=document.getElementById("box2");
	f1.opacity();
	f1.box.onclick=function(){
			f1.fadeout();
		
	};
	
	//轮播
	var box3=document.getElementById("box3");
	var oul=box3.getElementsByTagName("ul")[0];
	var liNum=oul.getElementsByTagName("li").length;
	var liW=oul.getElementsByTagName("li")[0].offsetWidth;
	var clickNum=0;
	var speed3=0;
	var mytime3=null;
	
	oul.appendChild(oul.getElementsByTagName("li")[0].cloneNode(true));
	function nextMove(){
		clickNum++;
		clearInterval(mytime3);
		mytime3=setInterval(function(){
			if(oul.offsetLeft>-clickNum*liW){
					speed3+=20;
					oul.style.left=-speed3+"px";
			};
		},10);
	};
	function prevMove(){
		clickNum--;
		clearInterval(mytime3);
		mytime3=setInterval(function(){
			if(oul.offsetLeft<-clickNum*liW){
				speed3-=20;
				oul.style.left=-speed3+"px";
			};
		},10);
	};
	

	function now(){
			console.log(oul.offsetLeft,oul.offsetWidth-liW);
	}
	document.getElementsByClassName("next")[0].onclick=function(){
//		if(clickNum<liNum){
//			nextMove();
//		}else{
//			oul.style.left=0;
//			clickNum=0
//			nextMove();
//		}
		if(oul.offsetWidth-liW!=liW*clickNum){
			nextMove();
			console.log(oul.offsetWidth-liW,liW*clickNum)
		}else{
			//oul.style.left=0+"px";
		}
		
		
	};
	
	document.getElementsByClassName("prev")[0].onclick=function(){

		if(oul.offsetLeft!=0){
			prevMove();
		}
	}
	
	
}
	
