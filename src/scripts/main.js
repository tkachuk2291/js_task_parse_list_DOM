'use strict';

let lst = document.querySelectorAll('li');

function getAttributeData(list) {
  return Array.from(list)
    .map(element => ({
      name: element.textContent.trim(),
      position: element.getAttribute("data-position"),
      salary: Number(element.getAttribute('data-salary').slice(1).replace(/,/g, '')),
      age: element.getAttribute("data-age")
    })).sort((element1, element2) => element2.salary - element1.salary);
}

const Newlist = getAttributeData(lst);
console.log(Newlist)
GetEmployees(Newlist)

function GetEmployees(list) {
  for (let [index, num] of Array.from(document.getElementsByTagName('li')).entries()) {
    console.log(index, num);
    num.innerHTML = list[index].name
  }
}
