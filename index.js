// variable
let a= document.getElementById('daily')
let b=document.getElementById('monthly')
let c=document.getElementById('weekly')
//eventlistener
a.addEventListener('click',function(){
    var c=document.getElementById('info-hour')
   var d=document.getElementById('info-prev')
   c.innerHTML="5hrs"
   d.innerHTML="daily 7hrs"
   var a=document.getElementById('info1-hour')
   var b=document.getElementById('info1-prev')
   a.innerHTML="1hrs"
   b.innerHTML="daily 2hrs"
   var e=document.getElementById('info2-hour')
   var f=document.getElementById('info2-prev')
   e.innerHTML="0hrs"
   f.innerHTML="daily 1hrs"
   var g=document.getElementById('info3-hour')
   var h=document.getElementById('info3-prev')
   g.innerHTML="1hrs"
   h.innerHTML=" daily 1hrs"
   var i=document.getElementById('info4-hour')
   var j=document.getElementById('info4-prev')
   i.innerHTML="1hrs"
   j.innerHTML="daily 3hrs"
   var k=document.getElementById('info5-hour')
   var l=document.getElementById('info5-prev')
   k.innerHTML="0hrs"
   l.innerHTML="daily 1hrs"  
})
b.addEventListener('click',function(){
    var c=document.getElementById('info-hour')
    var d=document.getElementById('info-prev')
    c.innerHTML="103hrs"
    d.innerHTML="monthly 128hrs"
    var a=document.getElementById('info1-hour')
    var b=document.getElementById('info1-prev')
    a.innerHTML="23hrs"
    b.innerHTML="monthly 29hrs"
    var e=document.getElementById('info2-hour')
    var f=document.getElementById('info2-prev')
    e.innerHTML="13hrs"
    f.innerHTML="monthly 19hrs"
    var g=document.getElementById('info3-hour')
    var h=document.getElementById('info3-prev')
    g.innerHTML="11hrs"
    h.innerHTML=" monthly 18hrs"
    var i=document.getElementById('info4-hour')
    var j=document.getElementById('info4-prev')
    i.innerHTML="21hrs"
    j.innerHTML="monthly 23hrs"
    var k=document.getElementById('info5-hour')
    var l=document.getElementById('info5-prev')
    k.innerHTML="7hrs"
    l.innerHTML="monthly 11hrs" 
})

c.addEventListener('click',function(){
    var c=document.getElementById('info-hour')
    var d=document.getElementById('info-prev')
    c.innerHTML="32hrs"
    d.innerHTML="previous 36hrs"
    var a=document.getElementById('info1-hour')
    var b=document.getElementById('info1-prev')
    a.innerHTML="10hrs"
    b.innerHTML="previous 8hrs"
    var e=document.getElementById('info2-hour')
    var f=document.getElementById('info2-prev')
    e.innerHTML="4hrs"
    f.innerHTML="previous 7hrs"
    var g=document.getElementById('info3-hour')
    var h=document.getElementById('info3-prev')
    g.innerHTML="4hrs"
    h.innerHTML=" previous 5hrs"
    var i=document.getElementById('info4-hour')
    var j=document.getElementById('info4-prev')
    i.innerHTML="5hrs"
    j.innerHTML="previous 10hrs"
    var k=document.getElementById('info5-hour')
    var l=document.getElementById('info5-prev')
    k.innerHTML="2hrs"
    l.innerHTML="previous 11hrs" 
})