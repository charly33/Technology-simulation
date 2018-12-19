
    // define images
	 images = [
		"img/4.png",
		"img/3.png",
        "img/2.png",
        "img/1.png"
	];

	var obj = {curImg: 0};

	// create tween
	var tween = TweenMax.to(obj, 0.5,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
			repeat: 90,									// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeNone,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);

	// init controller
    var controller = new ScrollMagic.Controller({vertical: false});
    
	// build scene
    var scene = new ScrollMagic.Scene({triggerElement: ".background", duration: 48200})
                    .setTween(tween)
					 // add indicators (requires plugin)
					.addTo(controller);

	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene.duration($(this).val());
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
                    duration:1000
                    
                })
                .setPin(slides[i])
				 // add indicators (requires plugin)
                .addTo(controller)
        }  
        
 }
    
scrollscenes()

const illustrationAnimation = () =>
{
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

/* SCENES13 */
///IMG ANIMATION/////
var controller = new ScrollMagic.Controller({vertical: false})

var ourScene = new ScrollMagic.Scene({
    triggerElement : '.scene13',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.illustration13','fade-in')
.addIndicators({
    name: 'fade-in',
    colorTrigger: 'black',
})
.addTo(controller)
/////TEXT ANIMATION////
var textcontroller = new ScrollMagic.Controller({vertical: false})
var textScene = new ScrollMagic.Scene({
    triggerElement : '.scene13',
    triggerHook:0,
    duration:'99%',
})
.setClassToggle('.text13','zoom-in')
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
.addIndicators({
    name: 'fade-in',
    colorTrigger: 'black',
})
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

})

const timelines = () => 
{
    

    
}








