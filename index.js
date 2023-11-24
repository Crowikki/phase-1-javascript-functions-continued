// code your solution here

function saturdayFun(activity) {
    // using type of so every string will console.log the activity
    if (typeof activity === "string") {
    return `This Saturday, I want to ${activity}!`
}else {
    return "This Saturday, I want to roller-skate!";
}

}

function mondayWork(activity) {
    if (typeof activity === "string") {
        return `This Monday, I will ${activity}.`
    }else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(highlight = "*") {
   return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`
    
   }

}
    

   