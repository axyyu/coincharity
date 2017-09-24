/**
 * Created by Andrew Wang on 9/16/2017.
 */

$(document).ready(function () {

});
function scrolldown(){
	console.log("HELLO")
	$('html, body').animate({ scrollTop: $("#information").offset().top}, 'slow');
    return false;
}