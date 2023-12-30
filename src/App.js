import logo from './logo.svg';
import './App.css';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notification from './Components/Notification/Notification';
import Login from './Components/Login/Login';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import ProfileCard from './Components/ProfileCard/ProfileCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Notification>
      <Routes>
        <Route path='/' element={<Landing_Page/>} />
        <Route path='/Sign_Up' element={<Sign_Up/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/instant-consultation' element={<InstantConsultation/>}/>
        <Route path='/finddoctor' element={<FindDoctorSearch/>} />
        <Route path='/search/doctors' element={<BookingConsultation/>} />
        <Route path='/reviews' element={<ReviewForm/>} />
        <Route path='/profiles' element={<ProfileCard/>} />
      </Routes>
      </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
