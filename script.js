$(document).ready(function() {
  let $text = $('.AI-Text');
  let $logo = $('#logocon');
  let lines = $text.html().split('<br>');
  let newLines = lines.map(line => {
    const letters = line.split('');
    const newLetters = letters.map(letter => `<span>${letter}</span>`);
    return newLetters.join('');
  });
  $text.html(newLines.join('<br>'));
  
  let $analog = $('.analog-open');

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
  
  let $letters = $text.find('span');
  
  function flicker() {
    $letters.each(function() {
      let random = Math.random();
      let currentColor = $(this).css('color');
      let textShadow = (currentColor === 'rgb(240, 248, 255)') ? '0 0 20px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 900px #fff' : '0 0 20px #3d233f, 0 0 40px #3d233f, 0 0 50px #3d233f, 0 0 60px #3d233f, 0 0 70px #3d233f, 0 0 80px #3d233f, 0 0 900px #3d233f';
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
      let random = Math.random();
      let currentColor = $(this).css('color');
      let textShadow = (currentColor === 'rgb(240, 248, 255)') ? '0 0 20px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff, 0 0 80px #fff, 0 0 900px #fff' : '0 0 20px #3d233f, 0 0 40px #3d233f, 0 0 50px #3d233f, 0 0 60px #3d233f, 0 0 70px #3d233f, 0 0 80px #3d233f, 0 0 900px #3d233f';
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
