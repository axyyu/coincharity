/**
 * Created by Andrew Wang on 9/16/2017.
 */

var profile;
$(document).ready(function () {
    start();
});

function start(){
    var query = window.location.search.substring(1);
    var vars = query.split("=")[1];
    profile = vars.replace("%20"," ");
    startMining(profile);
    if(profile.length > 0) {
        $("#name").text(profile);
    }
    else{
        $("#name").text("Anonymous");
    }
}