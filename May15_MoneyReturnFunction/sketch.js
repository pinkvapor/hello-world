// thanks to the guy in the video! explaining how p5.js can use a function that you can create to give you back a number for you! yay!
function setup() {
  
  var hours = moneytohours(13);// here we are determining the name of the function as well as the parameters associated to it
  console.log(hours)// in this case it was how much you make an hour
  
  var hoursrich= moneytohours(17)// here is how much money youd make with overtime at 17 an hour
  console.log(hoursrich);//super rich money over here $.$
  
}

function moneytohours(money) {// now here I state the function name and the parameters in the paranthesis and well as my curly bracket stating my lines of code are starting
  var hours = money * 10// here I'm showing how much money is being made along the hours times 10. Basically how much money you are making after 10 hours
  return hours;// give me my money!!!!!
  // and if you press play you will get the total you owe me on the bottom. thank you!! heres your receipt.
}