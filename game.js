(function diceGame() {

}
    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element.

    document.querySelector('button').addEventListener('click', function buttonClicked() {

      var dieone = Math.floor(Math.random()*6+1);
      console.log(dieone);

      var dietwo = Math.floor(Math.random()*6+1);
      console.log(dietwo);


      var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
      console.log(dieone);

      var dieNumTwo = document.querySelector('.dice aside:last-child').innerText;
      console.log(dietwo);

      var diceTotal = dieone + dietwo;

      status.innertext = 'You rolled ' + diceTotal + '.';

    });


})();