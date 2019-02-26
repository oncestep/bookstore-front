// JavaScript Document

    //rotate
$(document).ready(function(){
    var index,flag;
    flag = 0;
    var t;

    $(".rotate-tabtitle li").click(function(){

            flag = 1;
            index= $(this).index();
            $(this).attr("class","rotate-tabitem-hover").siblings("li").attr("class","rotate-tabitem");
            $(".rotate-tabitem-hover a").attr("class","tabitem-style-hover");
            $(this).siblings("li").children().attr("class","tabitem-style");
            console.log(index);
            $(".rotate-tabcontent").eq(index).show().siblings(".rotate-tabcontent").hide();
        /*    switch (index)
            {
                case 0:{
                    $(".rotate-tabcontent").eq(index).show(200);
                    $(".rotate-tabcontent").eq(1).hide();
                    $(".rotate-tabcontent").eq(2).hide();
                    console.log("one");
                    break;
                }
                case 1:{
                    $(".rotate-tabcontent").eq(index).show(200);
                    $(".rotate-tabcontent").eq(0).hide();
                    $(".rotate-tabcontent").eq(2).hide();
                    console.log("two");
                    break;
                }
                default:{
                    $(".rotate-tabcontent").eq(2).show(200);
                    $(".rotate-tabcontent").eq(0).hide();
                    $(".rotate-tabcontent").eq(1).hide();

                    console.log("three");
                    break;
                }
            }
*/
    });
    var timer;
    timer = setInterval(function(){
        if(flag == 0){
            t=0;
        }
        else{
            t=index;
        }
        t++;
        if(t==$(".rotate-tabtitle li").length)
            t=0;
        console.log(t);
        $(".rotate-tabtitle li:eq("+t+")").click();


    },5000);
});

function butto(){
			var res;
			res=confirm("DO you wish to delect it?");
			if(res==true){
				alert("It really a bad news--continue delecte");
				$('#show1').css("display","none");
				}
				else{
					alert("Good!You will not delete it");}
				
			}
		function butto1(){
			var res1;
			res1=confirm("DO you wish to delect it?");
			if(res1==true){
				alert("It really a bad news--continue delecte");
				$('#show2').css("display","none");
				}
				else{
					alert("Good!You will not delete it");}
				
			}
			
			function butto2(){
			var res2;
			res2=confirm("DO you wish to delect it?");
			if(res2==true){
				alert("It really a bad news--continue delecte");
				$('#show3').css("display","none");
				}
				else{
					alert("Good!You will not delete it");}
				
			}
		
			/*	$(function(){
		$('#btn').click(function(){
			alert("click");
			$('#show1').css("display","none");
			})
		
			});*/
			
			
			
			
			/*$ (function(){
		$('#btn1').click(function(){
			alert("click");
			$('#show2').css("display","none");
			})
			});
			$(function(){
		$('#btn2').click(function(){
			alert("click");
			})
			});*/
		
var mySecond=document.getElementById("can2");
var myCtxt=mySecond.getContext("2d");
myCtxt.font="60px Arial";
var grad=myCtxt.createLinearGradient(0,0,200,200);
grad.addColorStop(0,"yellow");
grad.addColorStop(0.5,"blue");
grad.addColorStop(1,"pink");
myCtxt.fillStyle=grad;
myCtxt.fillText("BS_BookStore.com",10,60,120);
