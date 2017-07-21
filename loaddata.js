//sample data that will be used for generation
let cities = [ 'Aberdeen', 'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown', 'Amarillo', 'Anaheim', 'Anchorage', 'Ann Arbor', 'Antioch', 'Apple Valley', 'Appleton', 'Arlington', 'Arvada', 'Asheville', 'Athens', 'Atlanta', 'Atlantic City', 'Augusta', 'Aurora', 'Austin', 'Bakersfield', 'Baltimore', 'Barnstable', 'Baton Rouge', 'Beaumont', 'Bel Air', 'Bellevue', 'Berkeley', 'Bethlehem', 'Billings', 'Birmingham', 'Bloomington', 'Boise', 'Boise City', 'Bonita Springs', 'Boston', 'Boulder', 'Bradenton', 'Bremerton', 'Bridgeport', 'Brighton', 'Brownsville', 'Bryan', 'Buffalo', 'Burbank', 'Burlington', 'Cambridge', 'Canton', 'Cape Coral', 'Carrollton', 'Cary', 'Cathedral City', 'Cedar Rapids', 'Champaign', 'Chandler', 'Charleston', 'Charlotte', 'Chattanooga', 'Chesapeake', 'Chicago',
'Chula Vista', 'Cincinnati', 'Clarke County', 'Clarksville', 'Clearwater', 'Cleveland', 'College Station', 'Colorado Springs', 'Columbia', 'Columbus', 'Concord', 'Coral Springs', 'Corona', 'Corpus Christi'];

let positions = [ 'Accountant', 'Chief Executive Officer (CEO)', 'Junior Technical Author' , 'Software Engineer' , 'Integration Specialist', 'Pre-Sales Support', 'Regional Director', 'Sales Assistant', 'Systems Administrator', 'Senior Marketing Designer', 'Support Engineer', 'Junior Javascript Developer', 'Regional Director', 'Senior Javascript Developer', 'Development Lead', 'Director', 'Secretary', 'Development Lead'];

//generate random name
function makeName() {
  let text = '';
  let possible1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let possible2 = 'abcdefghijklmnopqrstuvwxyz';

  text += possible1.charAt(Math.floor(Math.random() * possible1.length));

  for (var i = 0; i < 5; i++) {
    text += possible2.charAt(Math.floor(Math.random() * possible2.length));
  }
  return text;
};
//generate random age
function makeAge() {
  let text = '';
  let possible = '123456789';

  for (let i = 0; i < 2; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return parseInt(text);
};
//generate random salary
function makeSalary() {
  let text = '';
  text += Math.floor(Math.random() * 1000000);
  return '$' + text.substring(0, 3) + ',' + text.substring(3, 7);
};
//generate random position
function makePosition() {
  let text = '';
  let possible = positions;
  text = possible[Math.floor(Math.random() * possible.length)];
  return text;
};
//generate city
function makeCity() {
  let text = '';
  let possible = cities;

  text = possible[Math.floor(Math.random() * possible.length)];
  return text;
};
//helper function to help generate time
function helper(start, end) {
  let date = new Date(+ start + Math.random() * (end - start));
  return date;
};
//generate random date
function makeDate() {
  let date1 = new Date(1992, 09, 01);
  let date2 = new Date(2020, 09, 20);
  let array = helper(date1, date2);
  let res = array.toISOString().slice(0, 10).replace(/-/g, "/");
  return res;
}
//data generating machine, currently it has a limit of 200 data;
function mockData() {
  localStorage.clear();
  let mockArr = [];
  for (let i = 0; i < 200; i++) {
    let mockObj = {
      'name': makeName(),
      'position': makePosition(),
      'Office': makeCity(),
      'Age': makeAge(),
      'Start date': makeDate(),
      'Salary': makeSalary()
    }
    mockArr.push(mockObj);
  }
  localStorage.setItem('mockData', JSON.stringify(mockArr));
};
mockData();
//generates a table and its input is an array of object
function generateTableBody(data) {
  document.getElementById("myTable").innerHTML = "";
  let tbody = document.querySelector("tbody");

  for (let i = 0; i < data.length; i++) {
    let information = data[i];

    let row = document.createElement("tr");
    if (i % 2 === 0) {
      row.classList.add('even');
    } else {
      row.classList.add('odd');
    }
    let name = document.createElement('td');
    name.classList.add('sorting_1')
    let position = document.createElement('td');

    position.classList.add('position');
    let Office = document.createElement('td');
    Office.classList.add('tdStyle');
    let Age = document.createElement('td');
    Age.classList.add('tdStyle');
    let startDate = document.createElement('td');
    startDate.classList.add('tdStyle');
    let salary = document.createElement('td');
    salary.classList.add('tdStyle');

    name.innerText = information['name'];
    position.innerText = information['position'];
    Office.innerText = information['Office'];
    Age.innerText = information['Age'];
    startDate.innerText = information['Start date'];
    salary.innerText = information['Salary'];

    row.appendChild(name);
    row.appendChild(position);
    row.appendChild(Office);
    row.appendChild(Age);
    row.appendChild(startDate);
    row.appendChild(salary);
    tbody.appendChild(row);
  }
  return tbody;
}

//get element from the select html element
let numberOfRow = document.getElementById("numberOfRow");
//get element from the input html elment
let filterSearch = document.getElementsByName("search")[0];
//load data from localStorage
let data = JSON.parse(localStorage.getItem('mockData'));
//set up the initial data when the page get loaded
let initialLoad = data.slice(0, 10);
//generate a table when the page get loaded
generateTableBody(initialLoad);


//set up initial selected value;
let selectedValue = '10';

//initial page value is 10;
let pageNumbers = 10;

//addEventListener to the select value, 10, 25, 50, 100
numberOfRow.addEventListener("change", function(e) {
  //reset search function value
  filterSearch.value = '';
  //getting input value from search box
  selectedValue = numberOfRow.options[numberOfRow.selectedIndex].value;
  let chunk = parseInt(selectedValue);
  pageNumbers = 200 / chunk;

  let pageSec = document.getElementById('pageNumber');
  //whenever I reselect my selection, the table would refresh
  pageSec.innerHTML = ''
  //populating the page number
  generatePage();
  //generate the page labels text before the page number
  loadPageContent();

  //conditional showing different text for a span depending what page i am currently on
  if (selectedValue === '10') {
    let page = data.slice(0, 10);
    notice.innerText = `Showing ${ 0} to ${ 10}`;
    generateTableBody(page);
  } else if (selectedValue === '25') {
    notice.innerText = `Showing ${ 0} to ${ 25}`;
    let page = data.slice(0, 25);
    generateTableBody(page);
  } else if (selectedValue === '50') {
    notice.innerText = `Showing ${ 0} to ${ 50}`;
    let page = data.slice(0, 50);
    generateTableBody(page);
  } else if (selectedValue === '100') {
    notice.innerText = `Showing ${ 0} to ${ 100}`;
    let page = data.slice(0, 100);
    generateTableBody(page);
  }
});

//function that generateing the <a> table which populate the page numbers
function generatePage() {
  let pageSec = document.getElementById('pageNumber');
  notice.innerText = `Showing ${ 0} to ${ 10}`;
  for (let i = 1; i <= pageNumbers; i++) {
    let aTag = document.createElement('a');
    aTag.classList.add('paginate_button');
    aTag.innerText = i;
    pageSec.appendChild(aTag);
  }
}

//select the body
let body = document.getElementsByTagName('body')[0];
//select all the classname of paginate_button
let store = document.getElementsByClassName('paginate_button');
//select the notice id
let notice = document.getElementById("notice");
//generate the page number when the app first get loaded
generatePage();

//only get the first page
let pageNumber1 = document.getElementsByClassName('paginate_button')[0];

//a function that generate the text for a span before the pages population
function loadPageContent() {
  for (let i = 0; i < store.length; i++) {
    let cur = store[i];

    cur.addEventListener('click', function(e) {
      for (let j = 0; j < store.length; j++) {
        store[j].style.backgroundColor = 'white';
      }
      cur.style.backgroundColor = 'grey';

      if (selectedValue === '10') {
        notice.innerText = `Showing ${ (i + 0) * 10} to ${ 10 * (i + 1)}`;
        let page = data.slice((i + 0) * 10, 10 * (i + 1));
        generateTableBody(page);
      } else if (selectedValue === '25') {
        notice.innerText = `Showing ${ (i + 0) * 25} to ${ 25 * (i + 1)}`;
        let page = data.slice((0 + i) * 25, 25 * (i + 1));
        generateTableBody(page);
      } else if (selectedValue === '50') {
        notice.innerText = `Showing ${ (i + 0) * 50} to ${ 50 * (i + 1)}`;
        let page = data.slice((0 + i) * 50, 50 * (i + 1));
        generateTableBody(page);
      } else if (selectedValue === '100') {
        notice.innerText = `Showing ${ (i + 0) * 100} to ${ 100 * (i + 1)}`;
        let page = data.slice((0 + i) * 100, 100 * (i + 1));
        generateTableBody(page);
      }
    });
  }
}
//invoking the function
loadPageContent();

//whenever i found a target that match what I am searching for, I will reload it with the table with only the items that I wanted
filterSearch.addEventListener('input', function(e) {
  let searchValue = this.value.toString()
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let current = data[i];
    for (key in current) {
      if (current[key].toString().indexOf(this.value) != -1) {
        result.push(current);
        break;
      }
    }
  }
  generateTableBody(result.slice(0, selectedValue));
})

//sort name;
function nameClickSort() {
  let name = document.getElementsByClassName("nameSortAsc")[0];

  let toggle = false;;
  //adding a event to the name
  name.addEventListener('click', function() {
    //toggling the asc or desc
    toggle = !toggle;

    if (toggle === true) {
      data = data.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase

        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }

    if (toggle === false) {
      data = data.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }

    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';

    if (selectedValue === '10') {
      notice.innerText = `Showing ${ 0} to ${ 10}`;
    } else if (selectedValue === '25') {
      notice.innerText = `Showing ${ 0} to ${ 25}`;
    } else if (selectedValue === '50') {
      notice.innerText = `Showing ${ 0} to ${ 50}`;
    } else if (selectedValue === '100') {
      notice.innerText = `Showing ${ 0} to ${ 100}`;
    }
    //finally generate the table
    generateTableBody(data.slice(0, selectedValue));
  });
}

function positionClickSort() {
  let position = document.getElementsByClassName("positionSortAsc")[0];
  let toggle = false;;
  //adding evenlistener to the event
  position.addEventListener('click', function() {
    //toggling the asc or desc
    toggle = !toggle;
    if (toggle === true) {
      data = data.sort(function(a, b) {
        var positionA = a.position.toUpperCase(); // ignore upper and lowercase
        var positionB = b.position.toUpperCase(); // ignore upper and lowercase

        if (positionA > positionB) {
          return -1;
        }
        if (positionA < positionB) {
          return 1;
        }
        return 0;
      });
    }

    if (toggle === false) {
      data = data.sort(function(a, b) {
        var positionA = a.position.toUpperCase(); // ignore upper and lowercase
        var positionB = b.position.toUpperCase(); // ignore upper and lowercase

        if (positionA < positionB) {
          return -1;
        }
        if (positionA > positionB) {
          return 1;
        }
        return 0;
      });
    }

    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';

    if (selectedValue === '10') {
      notice.innerText = `Showing ${ 0} to ${ 10}`;
    } else if (selectedValue === '25') {
      notice.innerText = `Showing ${ 0} to ${ 25}`;
    } else if (selectedValue === '50') {
      notice.innerText = `Showing ${ 0} to ${ 50}`;
    } else if (selectedValue === '100') {
      notice.innerText = `Showing ${ 0} to ${ 100}`;
    }
    //finally load the table
    generateTableBody(data.slice(0, selectedValue));
  });
}

function OfficeClickSort() {
  let Office = document.getElementsByClassName("OfficeSortAsc")[0];
  let toggle = true;;
  //creating evenlistener for office element
  Office.addEventListener('click', function() {
    toggle = !toggle;

    if (toggle === true) {
      data = data.sort(function(a, b) {
        var positionA = a.Office.toUpperCase(); // ignore upper and lowercase
        var positionB = b.Office.toUpperCase(); // ignore upper and lowercase

        if (positionA > positionB) {
          return -1;
        }
        if (positionA < positionB) {
          return 1;
        }
        return 0;
      });
    }

    if (toggle === false) {
      data = data.sort(function(a, b) {
        var OfficeA = a.Office.toUpperCase(); // ignore upper and lowercase
        var OfficeB = b.Office.toUpperCase(); // ignore upper and lowercase

        if (OfficeA < OfficeB) {
          return -1;
        }
        if (OfficeA > OfficeB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }

    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';

    if (selectedValue === '10') {
      notice.innerText = `Showing ${ 0} to ${ 10}`;
    } else if (selectedValue === '25') {
      notice.innerText = `Showing ${ 0} to ${ 25}`;
    } else if (selectedValue === '50') {
      notice.innerText = `Showing ${ 0} to ${ 50}`;
    } else if (selectedValue === '100') {
      notice.innerText = `Showing ${ 0} to ${ 100}`;
    }
    //finally load the data into the table
    generateTableBody(data.slice(0, selectedValue));
  });
}

function AgeClickSort() {
  let Age = document.getElementsByClassName("AgeSortAsc")[0];
  let toggle = true;;
  //creating event listener for the Age
  Age.addEventListener('click', function() {
    //toggling if it asc or desc
    toggle = !toggle;
    if (toggle === true) {
      data = data.sort(function(a, b) {
        return a.Age - b.Age;
      });
    }
    if (toggle === false) {
      data = data.sort(function(a, b) {
        return b.Age - a.Age;
      });
    }
    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';

    if (selectedValue === '10') {
      notice.innerText = `Showing ${ 0} to ${ 10}`;
    } else if (selectedValue === '25') {
      notice.innerText = `Showing ${ 0} to ${ 25}`;
    } else if (selectedValue === '50') {
      notice.innerText = `Showing ${ 0} to ${ 50}`;
    } else if (selectedValue === '100') {
      notice.innerText = `Showing ${ 0} to ${ 100}`;
    }

    generateTableBody(data.slice(0, selectedValue));
  });
}

function DateClickSort() {
  let date = document.getElementsByClassName("DateSortAsc")[0];
  let toggle = true;;
  //creating eventListener
  date.addEventListener('click', function() {
    //toggling if it asc or desc
    toggle = !toggle;

    if (toggle === true) {
      data = data.sort(function(a, b) {
        return Date.parse(a['Start date']) - Date.parse(b['Start date']);
      });
    }
    if (toggle === false) {
      data = data.sort(function(a, b) {
        return Date.parse(b['Start date']) - Date.parse(a['Start date']);
      });
    }

    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';

    if (selectedValue === '10') {
      notice.innerText = `Showing ${ 0} to ${ 10}`;
    } else if (selectedValue === '25') {
      notice.innerText = `Showing ${ 0} to ${ 25}`;
    } else if (selectedValue === '50') {
      notice.innerText = `Showing ${ 0} to ${ 50}`;
    } else if (selectedValue === '100') {
      notice.innerText = `Showing ${ 0} to ${ 100}`;
    }
    //finally load the data into table
    generateTableBody(data.slice(0, selectedValue));
  });
}

function SalaryClickSort() {
  let date = document.getElementsByClassName("SalarySortAsc")[0];
  let toggle = true;;
  //adding event listener to salary element
  date.addEventListener('click', function() {
    //deciding if it asc or desc
    toggle = !toggle;
    let salaryData = data;

    if (toggle === true) {
      salaryData = salaryData.map(person => {
        person.Salary = parseInt(person.Salary.substring(1, person.Salary.length).replace(/,/g, ''));
        return person;
      });

      salaryData = salaryData.sort(function(a, b) {
        return a.Salary - b.Salary;
      }).map(ele => {
        ele.Salary = '$' + ele.Salary.toString();
        return ele;
      });
    }

    if (toggle === false) {
      salaryData = salaryData.map(person => {
        person.Salary = parseInt(person.Salary.substring(1, person.Salary.length).replace(/,/g, ''));
        return person;
      });

      salaryData = salaryData.sort(function(a, b) {
        return b.Salary - a.Salary;
      }).map(ele => {
        ele.Salary = '$' + ele.Salary.toString();
        return ele;
      });
    }

    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';

    if (selectedValue === '10') {
      notice.innerText = `Showing ${ 0} to ${ 10}`;
    } else if (selectedValue === '25') {
      notice.innerText = `Showing ${ 0} to ${ 25}`;
    } else if (selectedValue === '50') {
      notice.innerText = `Showing ${ 0} to ${ 50}`;
    } else if (selectedValue === '100') {
      notice.innerText = `Showing ${ 0} to ${ 100}`;
    }
    //finally laod the data ino the table
    generateTableBody(salaryData.slice(0, selectedValue));
  });
}


//generate mock data;
// mockData();
//run sorting algorithms for name, positions, office location, age, date, and salary
nameClickSort();
positionClickSort();
OfficeClickSort()
AgeClickSort();
DateClickSort();
SalaryClickSort();
