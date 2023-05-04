/*



*/

var maximumWealth = function(accounts){
      let maxWealthSoFar = 0; //creating an empty variable to store wealth counted below
  
      for (let customer of accounts) { //using a loop that iterates over each element in the accounts array
        let currentCustomerWealth = 0; //setting the individual customer wealth to a variable and setting it to zero.
  
        for (let bank of customer) { //initiating another loop to iterate over each element in the customers own array.
          currentCustomerWealth += bank; //this line adds the bank account (customer's element) to the currentCustomerWealth variable
        }
  
        maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth); //updating the maxWealthSoFar variable to be the max value between the current maxWealthSoFar and the currentCustomerWealth using math.max to compare between the two.
      }
  
      return maxWealthSoFar; // returning the max wealth
    }
  