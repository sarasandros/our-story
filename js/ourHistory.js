//wave用のJS
 var $ = jQuery;
  $('#wave').wavify({
  height: 260,
  bones: 3,
  amplitude: 40,
  color: '#a1a1a1',
  speed: .25
  });



//マーカーを引く用のJS
  var $ = jQuery;
  $(window).on('scroll',function(){
    $(".JS_ScrollAnimationItem").each(function(){
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight + 560){
        $(this).addClass('is-active');
      }
    });
   });

let intViewportHeight = window.innerHeight;
if(intViewportHeight < 500){
  let takenIdName = document.getElementById('wave_wrp');
  let logoStyle = document.getElementById('logo');
  let ourHistoryStyle = document.getElementById('our_history');
  takenIdName.style.height = '180vh';
  logoStyle.style.top = '100%';
  ourHistoryStyle.style.paddingTop = '180vh';
  var styleElem1 = document.head.appendChild(document.createElement("style"));
  var styleElem2 = document.head.appendChild(document.createElement("style"));
  var styleElem3 = document.head.appendChild(document.createElement("style"));
  var styleElem4 = document.head.appendChild(document.createElement("style"));
  var styleElem5 = document.head.appendChild(document.createElement("style"));
  var styleElem6 = document.head.appendChild(document.createElement("style"));
  styleElem1.innerHTML = "body #arrows span:nth-of-type(1):before {position:absolute; top:150%; left:50%; z-index:10;}";
  styleElem2.innerHTML = "body #arrows span:nth-of-type(1):after {position:absolute; top:calc(150% - 1px); left:50%;  z-index:10;}";
  styleElem3.innerHTML = "body #arrows span:nth-of-type(2):before {position:absolute; top:154%; left:50%; z-index:10;}";
  styleElem4.innerHTML = "body #arrows span:nth-of-type(2):after {position:absolute; top:calc(154% - 1px); left:50%;  z-index:10;}";
  styleElem5.innerHTML = "body #arrows span:nth-of-type(3):before {position:absolute; top:158%; left:50%; z-index:10;}";
  styleElem6.innerHTML = "body #arrows span:nth-of-type(3):after {position:absolute; top:calc(158% - 1px); left:50%;  z-index:10;}";
};
