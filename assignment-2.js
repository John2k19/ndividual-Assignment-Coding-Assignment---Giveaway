/**
 * Assignment 2
 *
 * This assignment covers your proficiency with Javascript's data structures.
 * It engages your ability to manipulate and evaluate data stored in arrays and objects.
 */

/**
 * Item 1.
 * Relationship Status. 10 points.
 *
 * Let us pretend that you are building a new app.
 * Your app supports social media functionality, which means that users can have
 *  relationships with other users.
 *
 * There are two guidelines for describing relationships on this social media app:
 *  1. Any user can follow any other user.
 *  2. If two users follow each other, they are considered friends.
 *
 * This function describes the relationship that two users have with each other.
 *
 * Please see "assignment-2-sample-data.js" for sample data. The social graph
 *  will adhere to the same pattern.
 *
 * @param {string} fromMember - the subject member
 * @param {string} toMember - the object member
 * @param {object} socialGraph - the relationship data
 * @returns {string} -
 *  "follower" if fromMember follows toMember,
 *  "followed by" if fromMember is followed by toMember,
 *  "friends" if fromMember and toMember follow each other,
 *  "no relationship" if neither fromMember nor toMember follow each other.
 */
 function relationshipStatus(fromMember, toMember, socialGraph) {
   var answer = ""
   answer = "no relationship"
   switch (true) {
   case (social_graph[fromMember].following.includes(toMember) && social_graph[toMember].following.includes(fromMember)):
     answer = "friends";
   break
   case (social_graph[fromMember].following.includes(toMember)):
     answer = "follower"
   break
   case (social_graph[toMember].following.includes(fromMember)):
     answer = "followed by"
   break
   }
   return answer
 }

 console.log (relationshipStatus("@chums","@joaquin",social_graph))


/**
 * Item 2.
 * Tic Tac Toe. 10 points.
 *
 * Tic Tac Toe is a common paper-and-pencil game.
 * Players must attempt to successfully draw a straight line of their symbol across a grid.
 * The player that does this first is considered the winner.
 *
 * This function evaluates a tic tac toe board and returns the winner.
 *
 * Please see "assignment-2-sample-data.js" for sample data. The board will adhere
 *  to the same pattern. The board may by 3x3, 4x4, 5x5, or 6x6. The board will never
 *  have more than one winner. The board will only ever have 2 unique symbols at the same time.
 *
 * @param {array} board - the representation of the tic tac toe board as a square array of arrays
 * @returns {string} - the symbol of the winner or "NO WINNER" if there is no winner
 */
 function ticTacToe(board) {
   var size = board.length;
   var trueSize = size
   var c = 0
   var r = 0
   var soFar = 0
 //horizontal
 //checks each row
 while (r <= trueSize-1) {
   //checks each column in the row
   c = 0
   while (c < trueSize-1) {
      if (board[r][c] == board[r][c+1]) {
      soFar += 1
 //     console.log(soFar)
    } else {
      soFar = 0
 //     console.log('no match')
     }
     c += 1
   }
   //end of while loop
 //  console.log('r is '+ r)
   c = 0
     if (soFar == trueSize-1) {
       console.log('winner found')
       return(board[r][0])
     }
 //    else {console.log('no')}
   r += 1
   }

   //vertical
   c = 0
   r = 0
   while (c <= trueSize-1){
     //checks each row in the column
     while (r < trueSize-1) {
        if (board[r][c] == board[r+1][c]) {
        soFar += 1
 //       console.log(soFar)
      } else {
        soFar = 0
 //       console.log('no match')
       }
       r += 1
     }
     //end of while loop
 //    console.log('c is '+ c)
     r = 0
       if (soFar == trueSize-1) {
         console.log('winner found')
         return(board[0][c])
       }
       else {
 //        console.log('no')
         soFar = 0
       }
       c +=1
     }
     //diagonal
     r = 0
     c = 0
       //checks left up corner to right down corner

       while (r < trueSize-1 &&  c < trueSize -1) {
          if (board[r][c] == board[r+1][c+1]) {
          soFar += 1
 //         console.log(soFar)
        } else {
          soFar = 0
 //         console.log('no match')
         }
         r += 1
         c += 1
       }
       //end of while loop
         if (soFar == trueSize-1) {
           console.log('winner found')
           return(board[0][0])
         }
         else {
 //          console.log('not here')
           soFar = 0
         }
         c +=1
       //checks right up corner to left down corner
       r = 0
       c = trueSize-1
       while (r < trueSize-1 &&  c >= 0) {
          if (board[r][c] == board[r+1][c-1]) {
          soFar += 1
   //       console.log(soFar)
        } else {
          soFar = 0
   //       console.log('no match')
         }
         r += 1
         c -= 1
       }
       //end of while loop
         if (soFar == trueSize-1) {
           console.log('winner found')
           return(board[0][trueSize-1])
         }
         else {
 //          console.log('not here')
           soFar = 0
         }
         if (soFar != trueSize-1) {
           return('no winner')
         }
 }
 console.log(ticTacToe(board9))

/**
 * Item 3.
 * ETA. 10 points.
 *
 * A shuttle van service is tasked to travel along a predefined circlar route.
 * This route is divided into several legs between stops.
 * The route is one-way only, and it is fully connected to itself.
 *
 * This function returns how long it will take the shuttle to arrive at a stop
 *  after leaving another stop.
 *
 * Please see "assignment-2-sample-data.js" for sample data. The route map will
 *  adhere to the same pattern. The route map may contain more legs and more stops,
 *  but it will always be one-way and fully enclosed.
 *
 * @param {string} firstStop - the stop that the shuttle will leave
 * @param {string} secondStop - the stop that the shuttle will arrive at
 * @param {object} routeMap - the data describing the routes
 * @returns {number} - the time it will take the shuttle to travel from firstStop to secondStop
 */
function eta(firstStop, secondStop, routeMap) {
  var time = routeMap[firstStop].travelTimeMins;
  var nextplace = routeMap[firstStop].nextStop;
  while (nextplace != secondStop) {
    time += routeMap[nextplace].travelTimeMins;
    nextplace = routeMap[nextplace].nextStop;
  }
  return time
}

console.log(eta("admu","upd",legs));
