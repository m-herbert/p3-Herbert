/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = new Vue({
      el: '#vue_app',
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data: {
            // This holds your movies.json data.
            movies: [],

            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
            title: "IMDB + Mrs. Herbert's Top 8 Movies",
            owner: "Megan Herbert",
            github: ''
      },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthText: function(dateArray){
              var nameOfMonth;
              var releaseDate;

              switch (dateArray[1]){
                case 1: monthName='January';
                break;
                case 2: monthName = 'February';
                   break;
                 case 3: monthName = 'March';
                   break;
                 case 4: monthName = 'April';
                   break;
                 case 5: monthName = 'May';
                   break;
                 case 6: monthName = 'June';
                   break;
                 case 7: monthName = 'July';
                   break;
                 case 8: monthName = 'August';
                   break;
                 case 9: monthName = 'September';
                   break;
                 case 10: monthName = 'October';
                   break;
                 case 11: monthName = 'November';
                   break;
                 case 12: monthName = 'December';
                   break;
                 default: monthName = 'N/A';
              }
              releaseDate= monthName +'' + dateArray[2]+','+ dateArray[0];
              return releaseDate;
            },

              //like(index) - increases the like count by 1
              like: function(index){
                this.movies[index].likes += 1;
              },

              //dislike(index) - increases the dislike count by 1
              dislike: function(index){
                this.movies[index].dislikes -= 1;
              },

              //posterClick(index) - loops through poster array and increment through the posters for each movie
              posterClick: function(index){
                var currentPosterIndex = this.movies[index].posterindex;
                var currentPoster = this.movies[index].posters.length - 1;

                if(currentPosterIndex < currentPoster){
                  this.movies[index].posterindex += 1;
                }
                else{
                  this.movies[index].posterindex = 0;
                }
              },

              //timeText(minutes) - converts integer minutes to string of hours and minutes
              timeText: function(minutes){
                var hours = Math.floor(minutes/60);
                var mins = minutes%60;
                return (hours + "h " + mins + "m");
              }
        }

})
