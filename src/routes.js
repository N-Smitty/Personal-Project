import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import AboutBreed from "./Components/About/AboutBreed";
import AboutStandards from "./Components/About/AboutStandards";
import AboutUs from "./Components/About/AboutUs";
import BreedingTools from "./Components/BreedingTools/Progesterone";
import PostResults from "./Components/BreedingTools/PostResults";
import Contact from "./Components/Contact/Contact";
import Gallery from "./Components/Litters/Gallery";
import Stud from "./Components/BreedingTools/Stud";
import Litters from "./Components/Litters/Pricing";
import Available from "./Components/Litters/Available";
import Auth from "./Components/Auth/Auth";
import View1 from "./Components/BreedingTools/view1";
import View2 from "./Components/BreedingTools/view2";
// import View3 from './Components/BreedingTools/view3';
// import View4 from './Components/BreedingTools/view4';
import AccountView from "./Components/Auth/AccountView";
import DogProfile from "./Components/Auth/DogProfile";
import DogList from "./Components/Auth/DogList";
import FormComp from "./Components/Auth/FormComp";
import EditProfile from "./Components/Auth/EditProfile";
import ModalComp from "./Components/BreedingTools/ModalComp";
import DropdownComp from "./Components/BreedingTools/DropdownComp";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/AboutBreed" component={AboutBreed} />
    <Route path="/AboutStandards" component={AboutStandards} />
    <Route path="/AboutUs" component={AboutUs} />
    <Route path="/Progesterone" component={BreedingTools} />
    <Route path="/PostResults" component={PostResults} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Pricing" component={Litters} />
    <Route path="/Available" component={Available} />
    <Route path="/Gallery" component={Gallery} />
    <Route path="/Stud" component={Stud} />
    <Route path="/Auth" component={Auth} />
    <Route path="/view1" component={View1} />
    <Route path="/view2" component={View2} />
    {/* <Route path='/view3' component={View3}/> */}
    {/* <Route path='/view4' component={View4}/> */}
    <Route path="/AccountView" component={AccountView} />
    <Route path="/DogProfile" component={DogProfile} />
    <Route path="/EditProfile" component={EditProfile} />
    <Route path="/DogList" component={DogList} />
    <Route path="/FormComp" component={FormComp} />
    <Route path="/DropdownComp" component={DropdownComp} />
  </Switch>
);
