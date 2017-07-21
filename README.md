## Take Home

To utilize my repo, please do the following:

To run this app locally, run `open index.html` inside your terminal to start up the app

## How I generate random the seed of the datasec

I created 6 generators for name, position, city, age, date, and salary. Finally, I use a function called mockData() to generate an Object with random information inside. In my case, I use `200` as the size of my table. You can change the size if you prefer.

```javascript
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
```
