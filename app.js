
/* const controller = new ScrollMagic.Controller({vertical: false});

 

const move = () => { // wait for document ready
		// build tween
		const tween = new TimelineMax ()
			.add([
                TweenMax.to(" .background", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
				TweenMax.to(" .ground", 1, {backgroundPosition: "-225% 0", ease: Linear.easeNone}),
			]);

		// build scene
		const scene = new ScrollMagic.Scene({triggerElement: ".background", duration: 2000, offset: 450})
						.setTween(tween)
						.setPin(".background")
						.addIndicators() // add indicators (requires plugin)
						.addTo(controller);
    };

move() */



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
			repeat: 30,									// repeat 3 times
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
    var scene = new ScrollMagic.Scene({triggerElement: ".background", duration: 22000})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// handle form change
	$("form.move input[name=duration]:radio").change(function () {
		scene.duration($(this).val());
    });

 /////////////////////////////////
    
const scrollscenes = () => { 
		// init
		var controller = new ScrollMagic.Controller({
			globalSceneOptions: {
                triggerHook: 'onLeave',
            },
            vertical:false
		});

		// get all slides
		var slides = document.querySelectorAll(".scenes");

		// create scene for every slide
		for (var i=0; i<slides.length; i++) {
			new ScrollMagic.Scene({
                    triggerElement: slides[i],
                    duration: "2500"
				})
				.setPin(slides[i])
				.addIndicators() // add indicators (requires plugin)
				.addTo(controller);
		}
    }
    
scrollscenes()
