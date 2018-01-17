$(function(){
    //Color
    var color 	 = $('#colorpicker').val();
        hexcolor = $('#hexcolor');

    hexcolor.html(color);

    $('#colorpicker').on('change', function() {
        hexcolor.html(this.value);
    });
    
    var val 	= $('#range').val();
		output 	= $('#output');
    
        output.html(val);

        $('#range').on('change', function(){
            output.html(this.value);
        });
    
});
