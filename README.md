# React-Hook-basic
The project is to undestanding depply React-Hook and learning new thing SASS/SCSS

## How to use SASS/SCSS in project?
- Extention file: ".scss" instead of ".css" like normally using.

- Using great tool "SCSS formatter" to support format scss during coding.

- Remember SCSS/SASS can not use directly, you must install 
` npm install node-sass` 

this library helps to compile from scss/sass to css file.

## Setup react application
- Create a folder, then open terminal and create react-app 
`npx create-react-app nameProject`

- Clean up some unneseccary files, logos in default react app.

- Install some libraries to support your project such as "node-sass".

- Run and test to check before code the main part.

---------------------------------------------------------
## useState() small projects
### what is the first project and the features? 
- There is a color square, then I click the square, it changes another color (simple project)

- Every time rendering, reload page, the color square shows the color which is changed before NOT the initial color (DO NOT use `useEffect()` at this time, because I want to practice only `useState()` and `localStorge`, `callback initialState`).

For example: the initial color is `green`, then I click square and it changes to `red` color. After reloading page, the color of square is `red`.

### what is the second project and the features? 
#### To do List
- There is a To-Do-List project, after the first rendering, it shows a list works in day that is given array. Whenever users click each work, it will be dissappeared and return new list.

There are 2 ways that I wrote code for this project:
- The first time: App.js file roles both position: control database and rendering UI and the bad idea leads to complex for using components.
- The second time(refactoring code): App.js is database control and ToDoList.jsx roles rendering UI.

#### To do form
- Creating a form, that users can add works and submit them. Then, all new data will be add the current array and rendering new list.
---------------------------------------------------------
## useEffect() small projects
#### Fetch data from URL: [API](http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1)
- Fetch data is a side-effect, then we pratice to use useEffect().

- Parent components send data through props to children components, then children show data.

#### Fetch data based on selection of users
- As first rendering, it shows titles of data in page 1 and there are 2 buttons: `Previous` and `Next`, users can select to next page or previous page and it shows data following the selected page.

- Parent components also send data through props to children components, then children show data as the first rendering. After selection of users, children components send back callback function with `newPage` params, this informs to parent that which page is needed fetch data and parent send new data to children.


