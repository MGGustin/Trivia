    


      // Step 1:
      // Use the following link inside the Audio function below:
      // https://p.scdn.co/mp3-preview/ed5a443bc86176135ebca8a114f66f4d814d4c90

      //  Step 2: do the following between the --- comments
      //  after 5 seconds, execute the fiveSeconds function
      //  after 10 seconds, execute the tenSeconds function
      //  after 15 seconds, execute the timeUp function
      // ---------------------
        //CODE STEP TWO HERE
      // ---------------------
      setTimeout(fiveSeconds, 1000 * 5);
      setTimeout(tenSeconds, 1000 * 10);

      // Step 3:
      // Fill in the blanks to these functions.
      function fiveSeconds() {
        // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
        // console log 10 seconds left
        alert("five second in")
        console.log(fiveSeconds)
      }


      function tenSeconds() {

        // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
        // console log 5 seconds left

      }


      function timeUp() {

        // in the element with an id of time-left add an h2 saying Time's Up!
        // console log done

        // The following lin
        audio.play();

      }