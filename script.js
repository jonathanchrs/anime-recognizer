$('#btn_submit').click(function(){
    var animePicture = $('#anime_picture').val();
    $.ajax({
        url: 'https://api.trace.moe/search?url=' + animePicture,
        method: 'POST',
        success: function(resp){
            const animeName = resp.result[0]['filename'];
            const animePicture = resp.result[0]['image'];
    
            $('.anime_name').text(animeName);
            $('img').attr('src', animePicture);
        }
    });
})