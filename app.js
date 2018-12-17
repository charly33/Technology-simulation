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
    var scene = new ScrollMagic.Scene({triggerElement: ".background", duration: 38800})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
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
            console.log(i)
			new ScrollMagic.Scene(
                {
                    triggerElement: slides[i],
                    duration:1000
                    
                })
                .setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
                .addTo(controller)
        }  
        
 }
    
scrollscenes()
const illistrationAnimation = () =>
{
    var controller = new ScrollMagic.Controller({vertical: false})

    var ourScene = new ScrollMagic.Scene({
        triggerElement : '.scene2',
        triggerHook:0,
        duration:'99%',
    })
    .setClassToggle('.illustration','fade-in')
    .addIndicators({
        name: 'fade-in',
        colorTrigger: 'black',
    })
    .addTo(controller)
}
illistrationAnimation() 

const textAnimation = () =>{
    var textcontroller = new ScrollMagic.Controller({vertical: false})
    var textScene = new ScrollMagic.Scene({
        triggerElement : '.scene2',
        triggerHook:0,
        duration:'99%',
    })
    .setClassToggle('.text','zoom-in')
    .addIndicators({
        name: 'zoom-in',
        colorTrigger: 'pink',
    })
    .addTo(textcontroller)  
}
textAnimation()




