(function diceGame() {



    // Use document.querySelector('...') to find HTML elements
    // The argument into the function is a CSS selector!
    // Any HTML element has an `innerText` property that you can
    // access (or change) for the contents of that element

    function setDateTime (){
      var now = new Date;
      var dice = {};
      dice.startdate = ('' + now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate());
      dice.starttime = (now.getHours() + ';' + now.getMinutes () );
      return 'Game Started' + dice;
    }
    document.querySelector('.message').innerText = setDateTime();



    document.querySelector('button').addEventListener('click', function buttonClicked() {

      var dieone = Math.floor(Math.random()*6+1);

      var dietwo = Math.floor(Math.random()*6+1);

      document.querySelector('.dice aside:first-child').innerText = dieone;

      document.querySelector('.dice aside:last-child').innerText = dietwo;


      var message  = 'You rolled a ' + (dieone + dietwo) + '.';
      var winner = (dieone) + (dietwo) === 11 || (dieone) + (dietwo) === 7


      console.log(message);

      if ((dieone + dietwo) === 11 || (dieone + dietwo) === 7){
          document.querySelector('.result').innerText ="Winner";
        console.log('Winner');


      } else  {
        document.querySelector('.result').innerText ="Try Again";
        console.log('Try Again');
      }



    });


})();
