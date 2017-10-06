/**
 * Created by 15185 on 2017/6/1.
 */


//center frame
    //search
$(document).ready(function(){

});

    //roller
$(document).ready(function(e){
    var focus;
    var count = 4;
    focus = "#point1";
    $("#point1").mouseenter(function(e){
        setTimeout(function () {


            $(".pic-style").attr("src","images/roller/p1.jpg");
            //    $("#point1").attr("background-color","rgba(255, 10, 7, 0.7)");
            //    $("#point1").attr("color","white");
            $(focus).removeClass("point-active");
            $(focus).addClass("point-dumb");
            $("#point1").addClass("point-active");

            focus = "#point1";
            count = 3;
            },500);
    });

    $("#point2").mouseenter(function(e){
        setTimeout(function(){
            $(".pic-style").attr("src","images/roller/p2.jpg");

            $(focus).removeClass("point-active");
            $(focus).addClass("point-dumb");
            $("#point2").addClass("point-active");

            focus = "#point2";
            count = 2;
            },500);
    });
    $("#point3").mouseenter(function(e){
        setTimeout(function(){
            $(".pic-style").attr("src","images/roller/p3.jpg");

            $(focus).removeClass("point-active");
            $(focus).addClass("point-dumb");
            $("#point3").addClass("point-active");

            focus = "#point3";
            count = 1;
            },500);
    });
    $("#point4").mouseenter(function(e){
        setTimeout(function(){
            $(".pic-style").attr("src","images/roller/p4.jpg");

            $(focus).removeClass("point-active");
            $(focus).addClass("point-dumb");
            $("#point4").addClass("point-active");

            focus = "#point4";
            count = 0;
            },500);
    });
    $("#point5").mouseenter(function(e){
        setTimeout(function(){
            $(".pic-style").attr("src","images/roller/p5.jpg");

            $(focus).removeClass("point-active");
            $(focus).addClass("point-dumb");
            $("#point5").addClass("point-active");

            focus = "#point5";
            count = 4;
            },500);
    });


    var clock = setInterval(function(){

     /**   count--;
        if(count==-1){
            count=4;
        }               */
        $(".cell div:eq("+count+")").mouseenter();
    },5000);
});

    //exhibition-fir
/*
function id_rect(){
    var irect_can = document.getElementById("id-rect");
    var irect_con = irect_can.getContext("2d");
    irect_con.fillStyle="green";
    irect_con.beginPath();
    irect_con.moveTo(15,75);
    irect_con.lineTo(75,135);
    irect_con.lineTo(135,75);
    irect_con.lineTo(75,15);
    irect_con.closePath();
    irect_con.fill();
}
function id_rect_sec(){
    var irect_can = document.getElementById("id-rect-sec");
    var irect_con = irect_can.getContext("2d");
    irect_con.fillStyle="green";
    irect_con.beginPath();
    irect_con.moveTo(15,75);
    irect_con.lineTo(75,135);
    irect_con.lineTo(135,75);
    irect_con.lineTo(75,15);
    irect_con.closePath();
    irect_con.fill();
}
*/
$(document).ready(function(){
    $("#item1").hover(function(e){
        $("#books1").css("display","inline-block");
        $("#books1").siblings().css("display","none");

        console.log("********************************");
    });
    $("#item2").hover(function(e){
        $("#books2").css("display","inline-block");
        $("#books2").siblings().css("display","none");

    });
    $("#item3").hover(function(e){
        $("#books3").css("display","inline-block");
        $("#books3").siblings().css("display","none");

    });
    $("#item4").hover(function(e){
        $("#books4").css("display","inline-block");
        $("#books4").siblings().css("display","none");

    });
    $("#item5").hover(function(e){
        $("#books5").css("display","inline-block");
        $("#books5").siblings().css("display","none");

    });
    $("#item6").hover(function(e){
        $("#books6").css("display","inline-block");
        $("#books6").siblings().css("display","none");

    });
    $("#item7").hover(function(e){
        $("#books7").css("display","inline-block");
        $("#books7").siblings().css("display","none");

    });
    $("#item8").hover(function(e){
        $("#books8").css("display","inline-block");
        $("#books8").siblings().css("display","none");
    });
    $("#item9").hover(function(e){
        $("#books9").css("display","inline-block");
        $("#books9").siblings().css("display","none");

    });
    $("#item10").hover(function(e){
        $("#books10").css("display","inline-block");
        $("#books10").siblings().css("display","none");

    });





});






    //rotate
$(document).ready(function(){
    var index,flag;
    flag = 0;
    var t;

    $(".rotate-tabtitle li").hover(function(){

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
        $(".rotate-tabtitle li:eq("+t+")").mouseenter();


    },5000);
});

//right frame
    //tips
function hexagon(){
    var tips_can = document.getElementById("tips-can");
    var tips_con = tips_can.getContext("2d");
    function buildhexagon(x,y,n,r,text,margin_l){
        var i,ang;
        ang=Math.PI*2/n;
        tips_con.save();

        // tips_con.fillStyle="black";
        tips_con.fillStyle="rgba(0, 0, 0, 0.65)";
        // tips_con.strokeStyle="red";

        tips_con.lineWidth=3;
        tips_con.translate(x,y);
        tips_con.moveTo(0,-r);
        tips_con.beginPath();
        for(i=0;i<n;i++){
            tips_con.rotate(ang);
            tips_con.lineTo(0,-r);
        }
        tips_con.closePath();
        tips_con.fill();
        // tips_con.stroke();


        tips_con.font="italic 800 15px arial";
        tips_con.fillStyle="white";
        tips_con.fillText(text,margin_l,5);

        tips_con.restore();
    }
    buildhexagon(40,40,6,35,"Cart",-16);
    buildhexagon(110,40,6,35,"Order",-20);
    buildhexagon(75,100,6,35,"Collect",-25);


    function getclickposition (ev){
        var x,y;
        x = ev.clientX;
        y = ev.clientY;
        console.log(x,y);

        return {x:x,y:y};

       /* if(ev.layerX||ev.layerX==0){
            x=ev.layerX;
            y=ev.layerY;
        }
        else if(ev.offsetX||ev.offsetX==0){
            x=ev.offsetX;
            y=ev.offsetY;
        }
        */

    }

    /* var dis_totop,y_fir,y_sec

    $(window).scroll(function(){
        var dis_totop = document.getElementsByClassName("tips").scrollTop;
        console.log(dis_totop);
        console.log("000000000");
    });
    dis_totop=0;
    y_fir = dis_totop+40;
    y_sec = dis_totop+100;
    */
    arr = [
        {x:1145,y:100,n:6,r:35,text:"Cart",margin_l:-16},
        {x:1215,y:100,n:6,r:35,text:"Order",margin_l:-20},
        {x:1180,y:160,n:6,r:35,text:"Collect",margin_l:-25}
    ];
    function redraw(){
        var which=[];
        arr.forEach(function(v,i){
            buildhexagon(v.x,v.y,v.n,v.r,v.text,v.margin_l);
            if(tips_con.isPointInPath(position.x,position.y)&&position){
                which.push(i);
            }
        });
        return which;
    }
    tips_can.addEventListener('click',function(e){
        position =  getclickposition(e);
        var choice=[];
        choice=redraw();
        switch (arr[choice[0]].x){
            case 1145:{
                console.log("6666666666666666666666666666666666666");//40
                window.location.href="BS_pages/details/buycar.html";
                window.event.returnValue=false;
                break;
            }
            case 1215:{                                                 //110
                window.location.href="BS_pages/details/orderlist.html";
                window.event.returnValue=false;
                break;
            }
            case 1180:{                                                 //70
                window.location.href="BS_pages/details/collection.html";
                window.event.returnValue=false;
                break;
            }
            default:{
                console.log(arr[choice[0]].x);
                alert("error");
                break;
            }
        }
    },false);
}


/*
function buildcircle(obj,x,y,r,num){
    obj.beginPath();

    obj.arc(x,y,r,0,Math.PI*2,false);
    obj.font="solid 2px Arial";

    obj.fillStyle="white";
    obj.fillText("1",30,0);
    obj.fillStyle="red";
    obj.fill();

    obj.closePath();


    obj.textAlign="center";
    obj.textBaseline="middle";

}
function cell(){
    var point1_can = document.getElementById("cell-point1");
    var point1_con = point1_can.getContext("2d");
    var point2_can = document.getElementById("cell-point2");
    var point2_con = point2_can.getContext("2d");
    var point3_can = document.getElementById("cell-point3");
    var point3_con = point3_can.getContext("2d");
    var point4_can = document.getElementById("cell-point4");
    var point4_con = point4_can.getContext("2d");
    var point5_can = document.getElementById("cell-point5");
    var point5_con = point5_can.getContext("2d");

    buildcircle(point1_con,60,60,60,"1");
    buildcircle(point2_con,60,60,60,"2");
    buildcircle(point3_con,60,60,60,"3");
    buildcircle(point4_con,60,60,60,"4");
    buildcircle(point5_con,60,60,60,"5");
}
*/

        //countdown
var min = 1;
var target_time = new Date().getTime() + (min*60000);
var hours,minutes,seconds;
var stop;
Countdown();
stop = self.setInterval(function(){
    Countdown();
},1000);
function Countdown(){
    var current_time = new Date().getTime();
    var seconds_left = Math.round((target_time - current_time)/1000);
    console.log("---------"+seconds_left);
    if(seconds_left>=0) {

        if ((seconds_left < ((min * 60) / 2)) && (seconds_left >= ((min * 60) / 4))) {
            $("#timebox").removeClass("color-full").addClass("color-half");
        }
        if ((seconds_left < ((min * 60) / 4)) && (seconds_left >= 0)) {
            $("#timebox").removeClass("color-half").addClass("color-empty");
        }
   //     days = ext(parseInt(seconds_left / 86400));
        seconds_left = seconds_left % 86400;
        hours = ext(parseInt(seconds_left / 3600));
        seconds_left = seconds_left % 3600;
        minutes = ext(parseInt(seconds_left / 60));
        seconds = ext(parseInt(seconds_left % 60));
        $("#timebox").html("<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>");
    }
    else{
      //  window.clearInterval(stop);
        $("#timebox").html("<span>00:</span><span>00:</span><span>00</span>");
        $("#timebox").removeClass("color-empty").addClass("color-full");
        $("#timebox").html("<span>00:</span><span>01:</span><span>00</span>");



        target_time = new Date().getTime() + (min*60000);

        $(".circle table tbody tr").eq(0).removeClass("show-now");
        $(".circle table tbody tr").eq(0).insertAfter($(".circle table tbody tr").eq(9));
        $(".circle table tbody tr").eq(0).addClass("show-now");

        for(var i=0;i<10;i++){
            if(i==0){
                $(".circle table tbody tr td:nth-child(2)").eq(i).text("Now");
            }
            else {
                $(".circle table tbody tr td:nth-child(2)").eq(i).text(i + "min");
            }
        }


      /*  if(num==10){
            $(".show-item div").first().next($(".show-item div").eq(2));
       //     $("#tag-start").insertAfter($(".show-item div").first());
       //     ($(".show-item div").first().parent()).insertBefore($("#tag-start").parent());
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
            num=0;
        }*/
   /*     if(num==10){
            $(".show-item div").first().css("display","none");
            $("#tag-start").css("display","inline-block");
            $(".show-item div").first().insertAfter($("#tag-start").parent().last());
            num=0;
        }
        else {   */

   /*
            $(".show-item div").first().css("display", "none");

            $(".show-item div").first().next().css("display", "inline-block");
            //$(".show-item div").eq(1).css("display","inline-block");

            $(".show-item div").first().insertAfter($(".show-item div").first().next().parent().last());
     */
        $(".show-item").children().first().css("display", "none");                                 //  不能用$(".show-item div")
                                                                                                    //  用 $(".show-item").children()

        $(".show-item").children().first().next().css("display", "inline-block");                 //$(".show-item div").eq(1).css("display","inline-block");


        $(".show-item").children().first().insertAfter($(".show-item").children().last());

    //    }

    }

};
/*
var id = 0;
setTimeout(
    function()
    {
        //alert( 'Time Out' );

        $(".circle table tbody tr").eq(0).insertAfter($(".circle table tbody tr").eq(9));

        console.log("6666666666666666666666666666666666666666666666666");
        target_time = new Date().getTime() + (min*60000);


        id++;

    }
, min*60*1000+500);
*/
function ext(n){
    return (n<10?'0':'')+n;
};


        //list
$(document).ready(function(){
    $(".list-book-item").mouseenter(function(e){
        $(this).addClass("list-book-hover").siblings().removeClass("list-book-hover");
       // $(this).html("<div class='l-item'> <a href=''> <img class='l-item-img' src='images/list/p1.jpg'> </a> <a class='l-item-t'>Fifty Shades of Grey</a> <span class='l-item-i'>Comments</span> <div class='l-item-pri'> <span class='l-item-pn'>￥27.60</span> <span class='l-item-po'>￥55.20</span> </div> </div>");
        $(this).children(".part1").css("display","inherit");
        $(this).children(".part2").css("display","none");

        $(this).siblings().children(".part1").css("display","none");
        $(this).siblings().children(".part2").css("display","inherit");
    });
});

$(document).ready(function(){
    $(".list-book-title-right").click(function(e){
        $("#list-book-p1").css("display","none");
        $("#list-book-p2").css("display","inline-block");
    });
    $(".list-book-title-left").click(function(e){
        $("#list-book-p1").css("display","inline-block");
       $("#list-book-p2").css("display","none");
    });

});


/* login form   */
/*
$(document).ready(function(e) {
    //lean modal on the link with id

     top -> how much space to leave from top
     overlay -> visibility of background
     closeButton -> what to do when user clicks close

    $("#modal").leanModal({top:150,overlay:0.8,closeButton:".hidemodal"});
    $("#loginbtn").dblclick(function(e) {


    });
});
*/
