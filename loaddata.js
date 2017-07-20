function mockData() {
  localStorage.clear();
  localStorage.setItem('mockData', JSON.stringify([
    {
      'name': 'Airi Satou',
      'position': 'Accountant',
      'Office': 'Tokyo',
      'Age': 33,
      'Start date': '2008/11/28',
      'Salary': '$162,700'
    }, {
      'name': 'Angelica Ramos',
      'position': 'Chief Executive Officer (CEO)',
      'Office': 'London',
      'Age': 47,
      'Start date': '	2009/10/09',
      'Salary': '$1,200,000'
    }, {
      'name': 'Ashton Cox',
      'position': 'Junior Technical Author',
      'Office': 'San Francisco',
      'Age': 66,
      'Start date': '2009/01/12',
      'Salary': '$86,000'
    }, {
      'name': 'Bradley Greer',
      'position': 'Software Engineer',
      'Office': 'London',
      'Age': 41,
      'Start date': '2012/10/13',
      'Salary': '$132,000'
    }, {
      'name': 'Brielle Williamson',
      'position': 'Integration Specialist',
      'Office': 'New York',
      'Age': 61,
      'Start date': '2012/12/02',
      'Salary': '$372,000'
    }, {
      'name': 'Bruno Nash',
      'position': 'Software Engineer',
      'Office': 'London',
      'Age': 38,
      'Start date': '2011/05/03',
      'Salary': '$163,500'
    }, {
      'name': 'Caesar Vance',
      'position': 'Pre-Sales Support',
      'Office': 'New York',
      'Age': 21,
      'Start date': '2011/12/12',
      'Salary': '$106,450'
    }, {
      'name': 'Cara Stevens',
      'position': 'Sales Assistant',
      'Office': 'New York',
      'Age': 46,
      'Start date': '2011/12/06',
      'Salary': '$145,600'
    }, {
      'name': 'Cedric Kelly',
      'position': 'Senior Javascript Developer',
      'Office': 'Edinburgh',
      'Age': 22,
      'Start date': '2012/03/29',
      'Salary': '$433,060'
    }, {
      'name': 'Charde Marshall',
      'position': 'Regional Director',
      'Office': 'San Francisco',
      'Age': 36,
      'Start date': '2008/10/16',
      'Salary': '$470,600'
    }, {
      'name': 'Colleen Hurst',
      'position': 'Javascript Developer',
      'Office': 'San Francisco',
      'Age': 39,
      'Start date': '	2009/09/15',
      'Salary': '$205,500'
    }, {
      'name': 'Dai Rios',
      'position': 'Personnel Lead',
      'Office': 'Edinburgh',
      'Age': 35,
      'Start date': '2012/09/26',
      'Salary': '$217,500'
    }, {
      'name': 'Donna Snider',
      'position': 'Customer Support',
      'Office': '	New York',
      'Age': 27,
      'Start date': '2011/01/25',
      'Salary': '$112,000'
    }, {
      'name': 'Doris Wilder',
      'position': 'Sales Assistant',
      'Office': 'Sidney',
      'Age': 23,
      'Start date': '2010/09/20',
      'Salary': '$85,600'
    }, {
      'name': 'Finn Camacho',
      'position': 'Support Engineer',
      'Office': 'San Francisco',
      'Age': 47,
      'Start date': '2009/07/07',
      'Salary': '$87,500'
    }, {
      'name': 'Fiona Green',
      'position': 'Chief Operating Officer (COO)',
      'Office': 'San Francisco',
      'Age': 48,
      'Start date': '2010/03/11',
      'Salary': '$850,000'
    }, {
      'name': 'Garrett Winters',
      'position': 'Accountant',
      'Office': 'Tokyo',
      'Age': 63,
      'Start date': '2011/07/25',
      'Salary': '$170,750'
    }, {
      'name': 'Gavin Cortez',
      'position': 'Team Leader',
      'Office': 'San Francisco',
      'Age': 22,
      'Start date': '2008/10/26',
      'Salary': '$235,500'
    }, {
      'name': 'Gavin Joyce',
      'position': 'Developer',
      'Office': 'Edinburgh',
      'Age': 42,
      'Start date': '2010/12/22',
      'Salary': '$92,575'
    }, {
      'name': 'Gloria Little',
      'position': 'Systems Administrator',
      'Office': 'New York',
      'Age': 59,
      'Start date': '2009/04/10',
      'Salary': '$237,500'
    }, {
      'name': 'Haley Kennedy',
      'position': 'Senior Marketing Designer',
      'Office': 'London',
      'Age': 43,
      'Start date': '2012/12/18',
      'Salary': '$313,500'
    }, {
      'name': 'Hermione Butler',
      'position': 'Regional Director',
      'Office': '	London',
      'Age': 47,
      'Start date': '2011/03/21',
      'Salary': '$356,250'
    }, {
      'name': 'Herrod Chandler',
      'position': 'Sales Assistant',
      'Office': 'San Francisco',
      'Age': 59,
      'Start date': '2012/08/06',
      'Salary': '$137,500'
    }, {
      'name': 'Hope Fuentes',
      'position': 'Secretary',
      'Office': 'San Francisco',
      'Age': 41,
      'Start date': '2010/02/12',
      'Salary': '$109,850'
    }, {
      'name': 'Howard Hatfield',
      'position': 'Office Manager',
      'Office': 'San Francisco',
      'Age': 51,
      'Start date': '2008/12/16',
      'Salary': '$164,500'
    }, {
      'name': 'Jackson Bradshaw',
      'position': 'Director',
      'Office': 'New York',
      'Age': 65,
      'Start date': '2008/09/26',
      'Salary': '$645,750'
    }, {
      'name': 'Jena Gaines',
      'position': 'Office Manager',
      'Office': 'London',
      'Age': 30,
      'Start date': '2008/12/19',
      'Salary': '$90,560'
    }, {
      'name': 'Jenette Caldwell',
      'position': 'Development Lead',
      'Office': 'New York',
      'Age': 30,
      'Start date': '2011/09/03',
      'Salary': '$345,000'
    }, {
      'name': 'Jennifer Acosta',
      'position': '	Junior Javascript Developer',
      'Office': 'Edinburgh',
      'Age': 43,
      'Start date': '2013/02/01',
      'Salary': '$75,650'
    }
  ]));
}

function generateTableBody(){
    let tbody = document.querySelector("tbody");
    console.log('tbody===', tbody);
    let data = JSON.parse(localStorage.getItem('mockData'));

    for(let i = 0; i < data.length; i++) {
      let information = data[i];

      let row = document.createElement("tr");
      if(i % 2 === 0) {
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
      // console.log('tbody===', tbody);
    }
  // console.log('tbody====', tbody)
  return tbody;
}
    // return (
    //   <tr>
    //     <td>item.name</td>
    //     <td>item.position</td>
    //     <td>item.Office</td>
    //     <td>item.Age</td>
    //     <td>item['Start date']</td>
    //     <td>item.Salary</td>
    //   </tr>
    // );


mockData();
generateTableBody();
