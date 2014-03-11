// Table of Contents
    var sectionsHeight = $('.sections').height();
    $('.sectionsWrapper').css({ top: '-' + sectionsHeight + 'px', visibility: 'visible' });
    
    $('#toc').click(function(){
    	if($('.sectionsWrapper').hasClass('closed')){
    		$('.sectionsWrapper').removeClass('closed');
    		$('.sectionsWrapper').stop().animate({ top: '34px' }, 200);
    	}else{
    		$('.subsectionContent').hide(100, function(){
	    		$('.sectionsWrapper').addClass('closed');
	    		$('.sectionsWrapper').stop().animate({ top: '-' + sectionsHeight + 'px' }, 200);
	    	});
    	}
    	return false;
    });
    
    $('.subsection').click(function(){
    	$('.subsectionContent').hide(100);
    	$(this).parent().next('.subsectionContent').show(200);
    	
    	return false;
    });
    
    $('#tableOfContents').mouseleave(function(){
    	$('.subsectionContent').hide(100, function(){
    		$('.sectionsWrapper').addClass('closed');
    		$('.sectionsWrapper').stop().animate({ top: '-' + sectionsHeight + 'px' }, 200);
    	});
    });

    $(function(){
        $('h1').slideDown('8000');
    });
