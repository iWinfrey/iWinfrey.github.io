    // function display() {
          qte = [];
          person = [];
          qte[0] =
            "You have enemies? Good. That means you stood up for something, sometime in your life ";
          person[0] = "Winston Churchill";
          qte[1] = "Stay hungry, stay foolish.";
          person[1] = "Steve Jobs";
          qte[2] = "The mind is everything. What you think you become.";
          person[2] = "Buddha";
          qte[3] = "Your fastest way is too slow for me.";
          person[3] = "Barre Brown (Father)";
          qte[4] = "The best way to guarantee a loss is to quit.";
          person[4] = "Morgan Freeman";
          qte[5] = "Whatever you are. Be a good one.";
          person[5] = "Abraham Lincoln";
          qte[6] = "If you can't make it good, at least make it look good...";
          person[6] = "Bill Gates";
          qte[7] =
            "Make the most of yourself... for that is all there is of you.";
          person[7] = "Ralph Waldo Emerson";
          qte[8] =
            "And now that you don't have to be perfect, you can be good.";
          person[8] = "John Steinbeck";
          qte[9] =
            "Don't be afraid of change. You may end up losing something good...but you will probably end up gaining something better!";
          person[9] = "Steve Jobs";
          qte[10] = "Anything is possible!";
          person[10] = "Les Brown";
          display = Math.floor(Math.random() * qte.length);

          document.write("<DL>\n");
          document.write("<DT>" + '"' + qte[display] + '"</DT>\n');
          document.write("<DD>" + "-" + person[display] + "</DT>\n");
          document.write("</DL>\n");

    // }