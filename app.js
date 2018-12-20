/////ANIMATION MAN////////
    // define images
	 images1 = [
		"img/marche1-min.png",
		"img/marche2-min.png",
        "img/marche3-min.png",
        "img/marche4-min.png"
	];

	var obj1 = {curImg: 0};

	// create tween
	var tween1 = TweenMax.to(obj1, 0.5,
		{
			curImg: images1.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 20,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images1[obj1.curImg]); // set the image source
			}
		}
	);

	// init controller
    var controller1 = new ScrollMagic.Controller({vertical: false});
    
	// build scene
    var scene1 = new ScrollMagic.Scene({triggerElement: ".scene1", duration: 17000})
                    .setTween(tween1)
					.addTo(controller1);

	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene1.duration($(this).val());
    });

    ////////
    // define images
     images2 = [
		"img/music1-min.png",
		"img/music2-min.png",
        "img/music3-min.png",
        "img/music4-min.png"
	];

	var obj2 = {curImg: 0};

	// create tween
	var tween2 = TweenMax.to(obj2, 0.5,
		{
			curImg: images2.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 10,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images2[obj2.curImg]); // set the image source
			}
		}
	);

	// init controller
    var controller2 = new ScrollMagic.Controller({vertical: false});
    
	// build scene
    var scene2 = new ScrollMagic.Scene({triggerElement: ".scene8", duration: 8500})
                    .setTween(tween2)
					.addTo(controller2);

	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene2.duration($(this).val());
    });
//////
  // define images
  images3 = [
    "img/tel4-min.png",
    "img/tel4-min.png",
    "img/tel2-min.png",
    "img/tel1-min.png"
];

var obj3 = {curImg: 0};

// create tween
var tween3 = TweenMax.to(obj3, 0.5,
    {
        curImg: images3.length - 1,	// animate propery curImg to number of images
        roundProps: "curImg",				// only integers so it can be used as an array index
        repeat: 20,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $("#myimg").attr("src", images3[obj3.curImg]); // set the image source
        }
    }
);

// init controller
var controller3 = new ScrollMagic.Controller({vertical: false});

// build scene
var scene3 = new ScrollMagic.Scene({triggerElement: ".scene12", duration: 9500})
                .setTween(tween3)
                .addTo(controller3);

// handle form change
$("form.move input[name=duration]:radio").change(function () {
    scene3.duration($(this).val());
});
 /////////////////////////////////

 // get all slides
const slides = document.querySelectorAll(".scenes")


const scrollscenes = () =>
 { 
        // init

		var controller = new ScrollMagic.Controller(
        {

            globalSceneOptions: 
            {
                reverse:true,
                triggerHook: 'onLeave',
            },

            vertical:false,
        })
        

		// create scene for every slide
        for (var i=0; i<slides.length; i++) 
        {
			new ScrollMagic.Scene(
                {
                    triggerElement: slides[i],
                    duration:900
                    
                })
                .setPin(slides[i])
				 // add indicators (requires plugin)
                .addTo(controller)
                
        } 
        
 }   
scrollscenes()


const illustrationAnimation = () =>
{
    /* SCENES1 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.introtext',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.banner','fade-out')
.addTo(controller)

///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.introtext',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.introtext','fade-out')
.addTo(controller)
 
//////////////////////////
/* SCENES2 */
///IMG ANIMATION/////
    var controller = new ScrollMagic.Controller({vertical: false})

    var ourScene = new ScrollMagic.Scene({
        triggerElement : '.scene2',
        triggerHook:0,
        duration:'99%',
    })
    .setClassToggle('.illustration2','fade-in')
    .addTo(controller)
/////TEXT ANIMATION////
    var textcontroller = new ScrollMagic.Controller({vertical: false})
    var textScene = new ScrollMagic.Scene({
        triggerElement : '.scene2',
        triggerHook:0,
        duration:'99%',
    })
    .setClassToggle('.text2','zoom-in')
    .addTo(textcontroller) 
//////////////////////////

/* SCENES3 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene3',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration3','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene3',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text3','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES3B */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene3-B',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration3-B','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene3-B',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text3-B','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES4 */
///IMG ANIMATION/////
    var controller = new ScrollMagic.Controller({vertical: false})

    var ourScene = new ScrollMagic.Scene({
        triggerElement : '.scene4',
        triggerHook:0,
        duration:'99%',
    })
    .setClassToggle('.illustration4','fade-in')
    .addTo(controller)
/////TEXT ANIMATION////
    var textcontroller = new ScrollMagic.Controller({vertical: false})
    var textScene = new ScrollMagic.Scene({
        triggerElement : '.scene4',
        triggerHook:0,
        duration:'99%',
    })
    .setClassToggle('.text4','zoom-in')
    .addTo(textcontroller) 
//////////////////////////

/* SCENES5 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene5',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration5','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene5',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text5','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES6 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene6',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration6','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene6',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text6','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES7 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene7',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration7','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene7',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text7','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES8 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene8',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration8','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene8',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text8','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES9 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene9',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration9','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene9',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text9','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES10 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene10',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration10','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene10',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text10','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES11 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene11',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration11','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene11',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text11','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES12 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene12',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration12','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene12',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text12','zoom-in')
.addTo(textcontroller) 
//////////////////////////


/* SCENES14 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene14',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration14','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene14',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text14','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES15 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene15',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration15','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene15',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text15','zoom-in')
.addTo(textcontroller) 
//////////////////////////

/* SCENES16 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene16',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration16','fade-in')
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene16',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text16','zoom-in')
.addTo(textcontroller) 


}
illustrationAnimation() 



const li = document.querySelectorAll(".li")

window.addEventListener('scroll',_event => {
    scrollPos= window.pageXOffset
    console.log(scrollPos)
    for(i=0; i<16 ; i++){
        if(scrollPos>2270*i)
        {
            li[i].classList.add('complete')
        }
        else{
            li[i].classList.remove('complete')
        }
    }  
})










