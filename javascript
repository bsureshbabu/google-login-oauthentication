
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".g-signin2").css("display", "none");
    $(".data").css("display", "block");

   
    $("#pic").attr("src", profile.getImageUrl());
    $("#email").text(profile.getEmail());
    $("#name").text(profile.getName());
    $("#id").text(profile.getId());
    $("#fname").text(profile.getFamilyName());
    $("#gname").text(profile.getGivenName());
    
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    $("#id_token").text(id_token.getAuthResponse());


}

//function signOut() {
//    var auth2 = gapi.auth2.getAuthInstance();
//    auth2.signOut().then(function () {
//        console.log('User signed out.');
//    });
//}



function signout() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signout().then(function () {
        alert("you success fully signed out")
        $(".g-signin2").css("display", "block");
        $(".data").css("display", "none");
    });
}
