jQuery(document).ready(function($){

	$(document).on('click', '.dot-irecommendthis',function() {
		var link = $(this);
		var id = $(this).attr('id'),
		suffix = link.find('.dot-irecommendthis-suffix').text();

		if(link.hasClass('active')){
    		$.post(dot_irecommendthis.ajaxurl, { action:'dot-irecommendthis', recommend_id:id, suffix:suffix, type:'delete'}, function(data){
    			link.html(data).removeClass('active').attr('title','Recommend');
    		}).done(function() {
                console.log( "Deleted Recommendation" );
              })
              .fail(function() {
                console.log( "Failed to remove Recommendation" );
              });
		}else{
    		$.post(dot_irecommendthis.ajaxurl, { action:'dot-irecommendthis', recommend_id:id, suffix:suffix }, function(data){
    			link.html(data).addClass('active').attr('title','You already recommended this');
    		}).done(function() {
                console.log( "Recommended" );
              })
              .fail(function() {
                console.log( "Failed to Recommend" );
              });
		}
		return false;
	});

});