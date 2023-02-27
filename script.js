$(document).ready(function() {
  var $text = $('.AI-Text');
  var $logo = $('#logocon');
  var lines = $text.html().split('<br>');
  var newLines = [];
  
  for (var i = 0; i < lines.length; i++) {
    var letters = lines[i].split('');
    var newLetters = [];
    for (var j = 0; j < letters.length; j++) {
    newLetters.push('<span>' + letters[j] + '</span>');
   }
    newLines.push(newLetters.join(''));
  }
  
  var $analog = $('.analog-open');

  function toggleClass() {
    $analog.toggleClass('analog-open analog-close');
  }

  $analog.on('mouseenter', function() {
    toggleClass();
  });

  $analog.on('mouseleave', function() {
    toggleClass();
  });

  $text.html(newLines.join('<br>'));
  
  var $letters = $text.find('span');
  
  function flicker() {
    $letters.each(function() {
      var random = Math.random();
      var currentColor = $(this).css('color');
      var textShadow = (currentColor === 'rgb(240, 248, 255)') ? '0 0 20px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 900px #fff' : '0 0 20px #3d233f, 0 0 40px #3d233f, 0 0 50px #3d233f, 0 0 60px #3d233f, 0 0 70px #3d233f, 0 0 80px #3d233f, 0 0 900px #3d233f';
      if (random > .0098 ) {
        $(this).css({
          'color': 'aliceblue',
          'text-shadow': textShadow
        });
      } else {
        $(this).css({
          'color': '#3d233f',
          'text-shadow': textShadow
      });
    }
    })
  
   $logo.each(function() {
      var random = Math.random();
      var currentColor = $(this).css('color');
      var textShadow = (currentColor === 'rgb(240, 248, 255)') ? '0 0 20px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 900px #fff' : '0 0 20px #3d233f, 0 0 40px #3d233f, 0 0 50px #3d233f, 0 0 60px #3d233f, 0 0 70px #3d233f, 0 0 80px #3d233f, 0 0 900px #3d233f';
      if (random > .009) {
        $(this).css({
          'color': 'aliceblue',
          'text-shadow': textShadow
        });
      } else {
        $(this).css({
          'color': '#3d233f',
          'text-shadow': textShadow
        });
      }
  });
  setTimeout(flicker, Math.floor(Math.random() * 100));
  }
  flicker();
  });