import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/layout/Navbar";
import home from "./pages/home";
import login from "./pages/login";
import register from "./pages/register";
import resetPassword from "./Components/account/resetPassword";
import updatePassword from "./Components/account/updatePassword";
import AuthState from "./context/auth/authState";
import BootcampState from './context/bootcamp/bootcampState'
import CourseState from './context/course/courseState'
import ReviewState from './context/review/reviewState'
import Bootcamps from './Components/Bootcamp/Bootcamps'
import createBootcamp from './Components/Bootcamp/createBootcamp'
import singleBootcamp from './Components/Bootcamp/singleBootcamp'
import manageBootcamp from './Components/Bootcamp/manageBootcamp'
import manageCourses from './Components/Courses/manageCourses'
import manageReviews from './Components/Reviews/manageReviews'
import PrivateRoute from "./routing/privateRoute"
import addCourse from './Components/Courses/addCourse'
import editCourse from './Components/Courses/editCourse'
import manageAccount from './Components/account/manageAccount'
import addReview from './Components/Reviews/addReview'
import editReview from './Components/Reviews/editReview'
import BootcampReviews from './Components/Reviews/BootcampReviews'
import './App.css';
import './bootstrap.css'
const App = () => {
  return (
    <AuthState>
      <BootcampState>
        <CourseState>
          <ReviewState>
          <Fragment>
            <Router>
              <Navbar />
              <Switch>
                <PrivateRoute exact path="/create-Bootcamp" component={createBootcamp} />
                <PrivateRoute exact path="/add-course" component={addCourse} />
                <PrivateRoute exact path="/edit-course/:courseId" component={editCourse} />
                <PrivateRoute exact path="/edit-review/:reviewId" component={editReview} />
                <PrivateRoute exact path="/manage-courses" component={manageCourses} />
                <PrivateRoute exact path="/manage-Reviews" component={manageReviews} />
                <PrivateRoute exact path="/manage-Bootcamp" component={manageBootcamp} />
                <Route exact path="/add-Review/:bootcampId" component={addReview} />
                <Route exact path="/bootcamp/:bootcampId" component={singleBootcamp} />
                <Route exact path="/bootcamp/:bootcampId/reviews" component={BootcampReviews} />
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/reset-password" component={resetPassword} />
                <PrivateRoute exact path="/update-Password" component={updatePassword} />
                <PrivateRoute exact path="/manage-Account" component={manageAccount} />
                <Route exact path="/register" component={register} />
                <Route exact path="/Bootcamps" component={Bootcamps} />
              </Switch>
            </Router>
          </Fragment>
          </ReviewState>
        </CourseState>
      </BootcampState>
    </AuthState>
  );
}

export default App;
