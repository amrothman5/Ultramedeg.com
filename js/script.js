var day =0;
function showtime( ){
    var date= new Date( );
var houres =  date.getHours( );
var minutes=  date.getMinutes( );
var seconds= date.getSeconds( );
var timezone ="AM";
      if(houres===0 ){
    houres=12;
    timezone ="AM";
}

if(houres >12 ){
   houres-=12;
   timezone="PM";
}

if( houres=== 12&&minutes===0 && seconds===0 && timezone==="AM")
{
    day +=1;
}
houres = (houres<10)? "0"+houres : houres ;
minutes = (minutes<10)? "0"+minutes : minutes ;
seconds = (seconds<10)? "0"+seconds : seconds ;

var time = houres+":"+minutes+":"
+seconds +" "+timezone;
document.getElementById("timezone").innerHTML = timezone ;
document.getElementById("sec").innerHTML = seconds ;
document.getElementById("min").innerHTML = minutes ;
document.getElementById("hou").innerHTML = houres ;
document.getElementById("day").innerHTML = day ;

setTimeout(showtime,1000);
}
   
showtime( ) ;