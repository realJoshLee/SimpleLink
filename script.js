// On share button click
$(document).on('click', '.share-btn', function(){

  // Copies the URl to the clipboard
  var dummy = document.createElement('input'),
    text = window.location.href;

  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);

  // Scrolls to the top of the page
  window.scrollTo(0, 0);

  // Shows the banner
  $(`.link-copied`).fadeIn(250);
  setTimeout(function(){ $(`.link-copied`).fadeOut() }, 2500);
});


// Gets all of the data from the json file
$.getJSON( "profile.json", function( data ) {
  var items = [];

  // Adds all of the buttons to the page
  $.each( data.links, function( key, val ) {
    $( ".buttons" ).append(`<a href="${val}"><p class="button ${key}"><span class="icon-${key}"></span>&nbsp;${key}</p></a>`);
  });

  // Changed some of the json file values into variables so make things cleaner
  var name = data.profile.name;
  var description = data.profile.description;
  var pfp = data.profile.pfp;
  var title = data.settings.title;

  // Changes the document title
  document.title = title;

  // Add the name, description, and the profile picture to the page.
  $('.name').html(name);
  $('.description').html(description);
  $( ".pfp" ).append(`<img src="${pfp}" class="pfp">`);

  // Runs the script to add all of the icons to their respective buttons.
  iconsApply();
});

// Script to add all of the icons to their respective button
function iconsApply(){
  if( $('.Instagram').length ){
    $(`.icon-Instagram`).append(`<i class="fab fa-instagram"></i>`);
  }

  if( $('.Twitter').length ){
    $(`.icon-Twitter`).append(`<i class="fab fa-twitter"></i>`);
  }

  if( $('.Website').length ){
    $(`.icon-Website`).append(`<i class="fas fa-globe"></i>`);
  }

  if( $('.TikTok').length ){
    $(`.icon-TikTok`).append(`<i class="fab fa-tiktok"></i>`);
  }

  if( $('.GitHub').length ){
    $(`.icon-GitHub`).append(`<i class="fab fa-github"></i>`);
  }

  if( $('.Spotify').length ){
    $(`.icon-Spotify`).append(`<i class="fab fa-spotify"></i>`);
  }

  if( $('.Email').length ){
    $(`.icon-Email`).append(`<i class="fas fa-paper-plane"></i>`);
  }

  if( $('.Snapchat').length ){
    $(`.icon-Snapchat`).append(`<i class="fab fa-snapchat-ghost"></i>`);
  }

  if( $('.Linkedin').length ){
    $(`.icon-Linkedin`).append(`<i class="fab fa-linkedin"></i>`);
  }

  if( $('.Facebook').length ){
    $(`.icon-Facebook`).append(`<i class="fab fa-facebook"></i>`);
  }

  if( $('.Messenger').length ){
    $(`.icon-Messenger`).append(`<i class="fab fa-facebook-messenger"></i>`);
  }

  if( $('.Discord').length ){
    $(`.icon-Discord`).append(`<i class="fab fa-discord"></i>`);
  }

  if( $('.Figma').length ){
    $(`.icon-Figma`).append(`<i class="fab fa-figma"></i>`);
  }

  if( $('.YouTube').length ){
    $(`.icon-YouTube`).append(`<i class="fab fa-youtube"></i>`);
  }

  if( $('.Medium').length ){
    $(`.icon-Medium`).append(`<i class="fab fa-medium"></i>`);
  }

  if( $('.Twitch').length ){
    $(`.icon-Twitch`).append(`<i class="fab fa-twitch"></i>`);
  }

  if( $('.Reddit').length ){
    $(`.icon-Reddit`).append(`<i class="fab fa-reddit"></i>`);
  }

  if( $('.Telegram').length ){
    $(`.icon-Telegram`).append(`<i class="fab fa-telegram"></i>`);
  }

  if( $('.Tumblr').length ){
    $(`.icon-Tumblr`).append(`<i class="fab fa-tumblr"></i>`);
  }

  if( $('.Soundcloud').length ){
    $(`.icon-Soundcloud`).append(`<i class="fab fa-soundcloud"></i>`);
  }

  if( $('.Steam').length ){
    $(`.icon-Steam`).append(`<i class="fab fa-steam"></i>`);
  }

  if( $('.Vimeo').length ){
    $(`.icon-Vimeo`).append(`<i class="fab fa-vimeo"></i>`);
  }
}