# Course-Registration

## [ Private Repo Link](https://github.com/programming-hero-web-course2/my-course-roster-abdulmobin417)

Click here for the Live Link: [https://b8a7-course-roster.netlify.app/](https://b8a7-course-roster.netlify.app/)

## Questions

### Course Registration 3 Project features

- Display Courses
- Select Course
- Manage Cart

### Discuss about how I managed the state in this assignment project.

#### I am using 4 state in this project. Those states description are given below :

- Loading fake data by using fetch in useEffect and then set the data into the setCourses function which is useState function. And access data from courses array of object variable which is also useState variable. Example:<br />
  const [courses, setCourses] = useState( [ ] );
  <br /><br />
- After clicking select button need to store data and show these data into the cart section. So I use here (App.jsx) an useState. After clicking button the course data go to the handleCart function (This function went from App.jsx component to courses then course component through props). Then set the data into setCarts function. Example: <br />
  const [carts, setCarts] = useState( [ ] );
  <br /><br />
- Another two states are for total credit hour and remaining credit hour calculation. Total credit can't be more than 20 hour and remaining credit can't be less than 0. So those two states go to the cart component from App.jsx component by props drilling. Example: <br />
  const [courseTime, setCourseTime] = useState( 0 );<br />
  const [remainingTime, setRemainingTime] = useState( 20 );
<br /><br />
- Lastly used an state for carts price calculation. And the price variable go to the cart component by props drilling and show the value of price. Example:<br />
const [price, setPrice] = useState( 0 );<br />

Overview of Components : <br />
App > Courses > Course + Cart
