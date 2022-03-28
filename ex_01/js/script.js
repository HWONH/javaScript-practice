setInterval(function(){
var $today=new Date();
var $cur_year=$today.getFullYear();
var $cur_month=$today.getMonth()+1;
var $cur_date=$today.getDate();
var $cur_day=$today.getDay();
var $arr_day=["일", "월", "화", "수", "목", "금", "토"];
var $cur_hour=$today.getHours();
var $cur_min=$today.getMinutes();
var $cur_sec=$today.getSeconds();
document.querySelector("#result_01").innerHTML=$cur_year+"년 "+$cur_month+"월 "+$cur_date+"일 "+$arr_day[$cur_day]+"요일, "+$cur_hour+":"+$cur_min+":"+$cur_sec;
}, 1000);

var $str="Welcome to my home";
document.querySelector("#result_02").innerHTML=$str+"page";

var $arr_01=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
for($num=0;$num<$arr_01.length;$num++){
    document.querySelector("#result_03").innerHTML+="<img src='img/"+$arr_01[$num]+"'>";
}
/* 
var $arr_01=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $a=""
for($num=0;$num<$arr_01.length;$num++){
    $a+="<img src='img/"+$arr_01[$num]+"'>";
}
document.querySelector("#result_03").innerHTML=$a;
 */

 var $ex_04=document.querySelector("#result_04");
 var $kakao_01=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
 var $kakao_02=["카카오 소풍", "카카오 나들이", "카카오 휴가"];
 for($num=0;$num<$kakao_01.length;$num++){
    $ex_04.innerHTML+="<div><img src='img/"+$kakao_01[$num]+"'><span>"+$kakao_02[$num]+"</span></div>";
 }

 var $ex_05=document.querySelector("#result_05");
 var $img_01=["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"];
 $num=0;
 function ch_img01(){
    $num++;
    if($num>8){
        $num=0;
    }
    $ex_05.innerHTML="<img src='img/"+$img_01[$num]+"'>";
 }

 $num=1;
 var $ex_06=document.querySelector("#result_06");
 function ch_img02(){
     $ex_06.innerHTML="<img src='img/sub_0"+$num+".jpg'>";
     $num++;
     if($num>3){
        $num=1;
     }
 }
/* ---------------------------------------------------- */
var $arr_02=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $pre_03=document.querySelector("#preview_03");
var $img_01=""; // 문자데이터로써 활용하겠다는 선언
for(i=0;i<$arr_02.length;i++){
    $img_01+="<img src='img/"+$arr_02[i]+"'>";
    console.log($img_01);
}
$pre_03.innerHTML=$img_01;

var $kakao_img=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
var $kakao_txt=["카카오 소풍", "카카오 나들이", "카카오 휴가"];
var $pre_04=document.querySelector("#preview_04");
var $img_02="";
for(i=0;i<$kakao_img.length;i++){
    $img_02+='<div class="box"><img src="img/'+$kakao_img[i]+'" alt=""><p>'+$kakao_txt[i]+'</p></div>';
    console.log($img_02);
}
$pre_04.innerHTML=$img_02;
