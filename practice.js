//var days = ["monday", "tuesday", "wednesday","thursday", "friday"];
//var dayInWeek = 4
//console.log(days[dayInWeek]);
//console.log(days[dayInWeek-1]);

//var getVisitorsReport= function(visitorsArray, dayInWeek){
  //  var days = ["monday", "tuesday", "wednesday","thursday", "friday"];
    //var index = dayInWeek-1;
    //var visitorsReport;
    //visitorsReport= "There was ";
    //visitorsReport +=visitorsArray[index];
    //visitorsReport +=" vistors ";
    //visitorsReport += "on " + days[index];
  //  return visitorsReport;
//};
//var vistors =[354,132,210,221,481];
//var report= getVisitorsReport(vistors, 2);
//console.log(report);
var items= [];
var item= "The pyramids";
var removed;

items.push(item);
items.push("The grand canyon");
items.push("Bondi beach");
console.log(items);

removed=items.pop();

console.log(removed + " was removed");
console.log(items.join(" and "));
