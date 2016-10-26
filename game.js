(function diceGame() {


    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

      var dieone = Math.floor(Math.random()*6+1);

      var dietwo = Math.floor(Math.random()*6+1);

      document.querySelector('.dice aside:first-child').innerText = dieone;

      document.querySelector('.dice aside:last-child').innerText = dietwo;


      var message = status.innertext = 'You rolled a ' + (dieone + dietwo) + '.';

      console.log(message);

      if (message === 11 || message === 7) status.innertext = 'Winner';
    });


})();
