'use strict';

const lst = document.querySelectorAll('li');

function sortList(list) {
  return Array.from(list).map((element) => ({
    name: element.textContent.trim(),
    position: element.getAttribute('data-position'),
    salary: Number(
      element.getAttribute('data-salary').slice(1).replace(/,/g, ''),
    ),
    age: element.getAttribute('data-age'),
  }));
}

const Newlist = sortList(lst);

getEmployees(Newlist);

function getEmployees(list) {
  const NewList = list.sort(
    (element1, element2) => element2.salary - element1.salary,
  );

  for (const [index, num] of Array.from(
    document.getElementsByTagName('li'),
  ).entries()) {
    num.innerHTML = NewList[index].name;
  }
}
