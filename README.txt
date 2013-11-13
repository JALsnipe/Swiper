COMS W4170: User Interface Design
Steven Feiner 

Josh Lieberman
jal2238
jal2238@columbia.edu
Assignment 3: A Gestural Video Player

Swiper - A Gesture-Controlled Video Player

This program uses the $1 Unistroke Recognizer:
http://depts.washington.edu/aimgroup/proj/dollar/

NOTES:
Just messing around with the HTML 5 video API currently.
Create a separate canvas for gestures or make gestures work on top of video?
Custom gestures?
Add OGG and FLV video?
Design decisions?
Actually implement gestures/gesture action handler.

Gesture action handler is actually really easy:
in mouseUpEvent(x, y)
var result = _r.Recognize(_points);
result.Name is going to be the name of our custom gesture hardcoded into
dollar.js if there is a match.

prototype:
if(result.Name == [custom gesture])
{
	doFunction(); // written for the buttons in my original html file
}

ex:
if(result.Name == "check")
{
  playPause();
}

fucking brilliant.

Design decisions:
Probably a good idea to make the canvas on top of the video pane.
Why?  Avoid confusion.  Multiple windows could cause confusion for the user.
Need frontend w/ Bootstrap?  Make it look nice.
Justify EVERYTHING.
new gestures?

Current gestures:
http://depts.washington.edu/aimgroup/proj/dollar/unistrokes.gif

"check" = play/pause
"delete" = mute/unmute
"carrot" = volume up
"v" = volume down


JS crap:

---Good Function---
    var str = "new Unistroke(" + name + ", new Array("
    var p = _r.Unistrokes[16].Points;
    for ( var i = 0; i < p.length; i++) {
      var temp;
      if (i < p.length - 1) {
        temp = "new Point(" + parseInt(p[i].X) + ", " + parseInt(p[i].Y) + "), ";
      } else {
        temp = "new Point(" + parseInt(p[i].X) + ", " + parseInt(p[i].Y) + "))";
      }
      str = str + temp;
    }
    str = str + ");";
---Good Function---

    var str = "new Unistroke(" + "custom-1" + ", new Array("
    var p = _r.Unistrokes[16].Points;
    for ( var i = 0; i < p.length; i++) {
      var temp = "new Point(" + parseInt(p[i].X) + ", " + parseInt(p[i].Y) + "), ";
      str = str + temp;
    }
    str = str + ");";

----
    var str = "new Unistroke(" + "custom-1" + ", new Array("
    var p = _r.Unistrokes[16].Points;
    for ( var i = 0; i < p.length; i++) {
      var temp;
      if (i < p.length - 1) {
        temp = "new Point(" + parseInt(p[i].X) + ", " + parseInt(p[i].Y) + "), ";
      } else {
        temp = "new Point(" + parseInt(p[i].X) + ", " + parseInt(p[i].Y) + ")";
      }
      str = str + temp;
    }
    str = str + ");";
----

_r.Unistrokes

Unistroke
Name: "up arrow"
Points: Array[64]
Vector: Array[128]
[0 … 99]
[100 … 127]
length: 128
__proto__: Array[0]
__proto__: Unistroke
constructor: function Unistroke(name, points) // constructor
__proto__: Object
]


for(i; i < _r.Unistrokes[16].Points.length; i++) { console.log(_r.Unistrokes[16].Points[i]); }
Point {X: -160.7747591009875, Y: -2.2737367544323206e-13}
Point {X: -154.0177360508731, Y: 0.5444627730882985}
Point {X: -147.31800373520613, Y: -4.003240230050324}
Point {X: -140.6053375854404, Y: -8.364924886094741}
Point {X: -133.86717956423513, Y: -11.870960830768354}
Point {X: -127.11566045942527, Y: -14.667486454213986}
Point {X: -120.33733417871747, Y: -15.56308205919413}
Point {X: -113.55900789800967, Y: -16.458677664174502}
Point {X: -106.78068161730184, Y: -17.354273269154874}
Point {X: -100.00082719373526, Y: -16.77323243513183}
Point {X: -93.22095751630869, Y: -16.17745187610808}
Point {X: -86.44108783888213, Y: -15.581671317083874}
Point {X: -79.66454240242787, Y: -14.511997190589227}
Point {X: -72.89056528872497, Y: -13.076190872963934}
Point {X: -66.11658817502209, Y: -11.640384555338642}
Point {X: -59.34399070189012, Y: -10.072062624734372}
Point {X: -52.571491896384984, Y: -8.494263587324895}
Point {X: -45.79989041925174, Y: -6.859797510416001}
Point {X: -39.049876051462206, Y: -3.8620873679517445}
Point {X: -32.2998616836727, Y: -0.8643772254877149}
Point {X: -25.549847315883227, Y: 2.1333329169763147}
Point {X: -18.799832948093723, Y: 5.131043059440799}
Point {X: -12.049818580304247, Y: 8.128753201904829}
Point {X: -5.2998042125147435, Y: 11.126463344369085}
Point {X: 1.4502101552747888, Y: 14.124173486833115}
Point {X: 8.200224523064264, Y: 17.121883629297145}
Point {X: 14.960634903419674, Y: 19.351645690295527}
Point {X: 21.73883654243292, Y: 20.26717665870342}
Point {X: 28.516347507008135, Y: 21.27907607248858}
Point {X: 35.292795020004604, Y: 22.439356792651324}
Point {X: 42.06937923820999, Y: 23.581688623471337}
Point {X: 48.84670071619266, Y: 24.627220966804998}
Point {X: 55.623849553617305, Y: 25.547636020198752}
Point {X: 62.39773441566993, Y: 24.10255968661977}
Point {X: 69.1631743602679, Y: 22.19662564337432}
Point {X: 75.89313014790531, Y: 18.354243151209403}
Point {X: 82.67053616788306, Y: 17.402584188585706}
Point {X: 89.2252408990125, Y: 11.471629652691945}
Point {X: 88.04420823712334, Y: 2.9346856408194526}
Point {X: 81.29419386933395, Y: -0.06302450164457696}
Point {X: 74.65017237590561, Y: -6.278435302332809}
Point {X: 68.19728504542218, Y: -15.738056978932036}
Point {X: 61.80609325236847, Y: -26.21390897913261}
Point {X: 55.41490145931468, Y: -36.68976097933319}
Point {X: 49.06315136823747, Y: -47.65380809882754}
Point {X: 43.05739201080448, Y: -61.9187772048972}
Point {X: 37.54248017828661, Y: -80.05418138762661}
Point {X: 32.233685284022016, Y: -99.51966745377968}
Point {X: 29.831959034940866, Y: -112.8206177033826}
Point {X: 35.94359224898801, Y: -99.89285903356586}
Point {X: 41.2934861105943, Y: -80.77802918808902}
Point {X: 46.47957218724366, Y: -60.588695701699635}
Point {X: 51.84534561307393, Y: -41.436665597968386}
Point {X: 57.88442756705996, Y: -27.458563414852506}
Point {X: 63.190605927201176, Y: -8.029478732036978}
Point {X: 68.74355825322502, Y: 2.637559971491555}
Point {X: 65.11245855017162, Y: 24.060106638627303}
Point {X: 59.75957338065902, Y: 42.90768714653973}
Point {X: 54.38741110140688, Y: 61.44004895807734}
Point {X: 49.342298219198796, Y: 82.24038355112316}
Point {X: 43.77729105795896, Y: 99.84727082471363}
Point {X: 38.96120223047495, Y: 121.8060275181274}
Point {X: 32.559697613846026, Y: 127.34598410970966}
Point {X: 27.00984608792899, Y: 137.1793822966174}