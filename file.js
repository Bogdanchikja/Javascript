let ename = "Bodja"
console.log(ename)
// some new command 
let age = 19
console.log(age)

let person = `${ename} ${age}`
console.log(person)

let person_age = 23 
let work_period = 6
let total_time = person_age - work_period
console.log("total time =", total_time, typeof("total time =", total_time))
console.log("total time =" + total_time, typeof("total time =" + total_time))
// here we learned, that we can identify type of code 
let morning = false 
console.log ("morning =", morning, typeof(morning)) 
let evening = true
console.log("evening =", evening, typeof(evening))
// boolean, here is about true and false (true is 1, and false is 0) 
let eggs = 10
let tomatoes = 20
let compare = eggs > tomatoes
console.log("compare =", compare, typeof(compare))
// here we watched how work "compare" 
if (compare) {
    console.log("COMPARE IS", compare)
} else if(eggs == 10){
    console.log("Eggs =", eggs)
} else{
    console.log("now compare is a", false)
}