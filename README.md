# Course-Registration

## [ Private Repo Link](https://github.com/programming-hero-web-course2/my-course-roster-abdulmobin417)

Click here for the Live Link: [https://b8a7-course-roster.netlify.app/](https://b8a7-course-roster.netlify.app/)

## Questions

### Course Registration 3 Project features

- Display Courses
- Select Course
- Manage Cart

### Discuss how I managed the state in this assignment project.

#### I am using 4 states in this project. Those state's descriptions are given below :

- Loading fake data by using fetch in useEffect and then setting the data into the setCourses function which is useState function. And access data from the course array of object variables which is also useState variable. Example:<br />
  const [courses, setCourses] = useState( [ ] );
  <br /><br />
- After clicking the select button, store data and show these data in the cart section. So I use here (App.jsx) an useState. After clicking the button, the course data goes to the handleCart function (This function went from App.jsx component to courses then the course component through props). Then set the data into the setCarts function. Example: <br />
  const [carts, setCarts] = useState( [ ] );
  <br /><br />
- The other two states are for total credit hour and remaining credit hour calculation. Total credit can't be more than 20 hours and remaining credit can't be less than 0. So those two states go to the cart component from App.jsx component by props drilling. Example: <br />
  const [courseTime, setCourseTime] = useState( 0 );<br />
  const [remainingTime, setRemainingTime] = useState( 20 );
<br /><br />
- Lastly, use a state for cart price calculation. The price variable goes to the cart component by props drilling and shows the price value. Example:<br />
const [price, setPrice] = useState( 0 );<br />

Overview of Components: <br />
App > Courses > Course + Cart
