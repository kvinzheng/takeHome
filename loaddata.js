let cities = [ 'Aberdeen', 'Abilene', 'Akron', 'Albany', 'Albuquerque', 'Alexandria', 'Allentown', 'Amarillo', 'Anaheim', 'Anchorage', 'Ann Arbor', 'Antioch', 'Apple Valley', 'Appleton', 'Arlington', 'Arvada', 'Asheville', 'Athens', 'Atlanta', 'Atlantic City', 'Augusta', 'Aurora', 'Austin', 'Bakersfield', 'Baltimore', 'Barnstable', 'Baton Rouge', 'Beaumont', 'Bel Air', 'Bellevue', 'Berkeley', 'Bethlehem', 'Billings', 'Birmingham', 'Bloomington', 'Boise', 'Boise City', 'Bonita Springs', 'Boston', 'Boulder', 'Bradenton', 'Bremerton', 'Bridgeport', 'Brighton', 'Brownsville', 'Bryan', 'Buffalo', 'Burbank', 'Burlington', 'Cambridge', 'Canton', 'Cape Coral', 'Carrollton', 'Cary', 'Cathedral City', 'Cedar Rapids', 'Champaign', 'Chandler', 'Charleston', 'Charlotte', 'Chattanooga', 'Chesapeake', 'Chicago',
'Chula Vista', 'Cincinnati', 'Clarke County', 'Clarksville', 'Clearwater', 'Cleveland', 'College Station', 'Colorado Springs', 'Columbia', 'Columbus', 'Concord', 'Coral Springs', 'Corona', 'Corpus Christi'];

let positions = [ 'Accountant', 'Chief Executive Officer (CEO)', 'Junior Technical Author' , 'Software Engineer' , 'Integration Specialist', 'Pre-Sales Support', 'Regional Director', 'Sales Assistant', 'Systems Administrator', 'Senior Marketing Designer', 'Support Engineer', 'Junior Javascript Developer', 'Regional Director', 'Senior Javascript Developer', 'Development Lead', 'Director', 'Secretary', 'Development Lead'];

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

function makeAge() {
  let text = '';
  let possible = '123456789';

  for (let i = 0; i < 2; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return parseInt(text);
};

function makeSalary() {
  let text = '';
  text += Math.floor(Math.random() * 1000000);
  return '$' + text.substring(0, 3) + ',' + text.substring(3, 7);
};

function makePosition() {
  let text = '';
  let possible = positions;
  text = possible[Math.floor(Math.random() * possible.length)];
  return text;
};

function makeCity() {
  let text = '';
  let possible = cities;

  text = possible[Math.floor(Math.random() * possible.length)];
  return text;
};

function helper(start, end) {
  let date = new Date(+ start + Math.random() * (end - start));
  return date;
};

function makeDate() {
  let date1 = new Date(1992, 09, 01);
  let date2 = new Date(2020, 09, 20);
  let array = helper(date1, date2);
  let res = array.toISOString().slice(0, 10).replace(/-/g, "/");
  return res;
}

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

// mockData();
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

let numberOfRow = document.getElementById("numberOfRow");
let filterSearch = document.getElementsByName("search")[0];

let data = JSON.parse(localStorage.getItem('mockData'));
let initialLoad = data.slice(0, 10);
generateTableBody(initialLoad);

let selectedValue = '10';

let pageSection = document.getElementById("pageNumber");

let pageNumbers = 10;
let chunk;

numberOfRow.addEventListener("change", function(e) {
  selectedValue = numberOfRow.options[numberOfRow.selectedIndex].value;
  chunk = parseInt(selectedValue);
  pageNumbers = 200/chunk;

  let pageSec = document.getElementById('pageNumber');
  pageSec.innerHTML = ''
  generatePage();
  loadPageContent();
  console.log('pageNumbers', pageNumbers);

  let filterResult;

  if (selectedValue === '10') {
    let page = data.slice(0, 10);
    generateTableBody(page);
  } else if (selectedValue === '25') {
    let page = data.slice(0, 25);
    generateTableBody(page);
  } else if (selectedValue === '50') {
    let page = data.slice(0, 50);
    generateTableBody(page);
  } else if (selectedValue === '100') {
    let page = data.slice(0 , 100);
    generateTableBody(page);
  }

});

function generatePage() {
  let pageSec = document.getElementById('pageNumber');
  for (let i = 1; i <= pageNumbers; i++) {
    let aTag = document.createElement('a');
    aTag.classList.add('paginate_button');
    aTag.innerText = i;
    pageSec.appendChild(aTag);
  }
}

// generatePage();

let pageNumber1 = document.getElementsByClassName('paginate_button')[0];

let body = document.getElementsByTagName('body')[0];

let store = document.getElementsByClassName('paginate_button');

function loadPageContent() {
  for (let i = 0; i < store.length; i++) {
    let cur = store[i]


    cur.addEventListener('click', function(e) {

      for (let j = 0; j < store.length; j++) {
        store[i].style.backgroundColor = 'white';
      }

      pageNumber1.style.backgroundColor = 'grey';

      if (selectedValue === '10') {
        let page = data.slice((i + 0) * 10, 10 * (i + 1));
        generateTableBody(page);
      } else if (selectedValue === '25') {
        let page = data.slice((0 + i) * 25, 25 * (i + 1));
        generateTableBody(page);
      } else if (selectedValue === '50') {
        let page = data.slice((0 + i) * 25, 25 * (i + 1));
        generateTableBody(page);
      } else if (selectedValue === '100') {
        let page = data.slice((0 + i) * 25, 25 * (i + 1));
        generateTableBody(page);
      }
    });
  }
}


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

  generateTableBody(result);
})

function nameClickSort() {
  let name = document.getElementsByClassName("nameSortAsc")[0];
  let toggle = false;;
  name.addEventListener('click', function() {
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
        // names must be equal
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
        // names must be equal
        return 0;
      });
    }
    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';
    generateTableBody(data.slice(0, selectedValue));
  });
}

function positionClickSort() {
  let position = document.getElementsByClassName("positionSortAsc")[0];
  let toggle = false;;
  position.addEventListener('click', function() {
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
        // positions must be equal
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
        // names must be equal
        return 0;
      });
    }
    for (let i = 0; i < store.length; i++) {
      store[i].style.backgroundColor = 'white';
    }
    pageNumber1.style.backgroundColor = 'grey';
    generateTableBody(data.slice(0, selectedValue));
  });
}

function OfficeClickSort() {
  let Office = document.getElementsByClassName("OfficeSortAsc")[0];
  let toggle = true;;
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
        // positions must be equal
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
    generateTableBody(data.slice(0, selectedValue));
  });
}

function AgeClickSort() {
  let Age = document.getElementsByClassName("AgeSortAsc")[0];
  let toggle = true;;
  Age.addEventListener('click', function() {
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
    generateTableBody(data.slice(0, selectedValue));
  });
}

function DateClickSort() {
  let date = document.getElementsByClassName("DateSortAsc")[0];
  let toggle = true;;
  date.addEventListener('click', function() {
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
    generateTableBody(data.slice(0, selectedValue));
  });
}

function SalaryClickSort() {
  let date = document.getElementsByClassName("SalarySortAsc")[0];
  let toggle = true;;
  date.addEventListener('click', function() {
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
    generateTableBody(salaryData.slice(0, selectedValue));
  });
}
mockData();
// generateTableBody(data);
nameClickSort();
positionClickSort();
OfficeClickSort()
AgeClickSort();
DateClickSort();
SalaryClickSort();
