import {Route, Routes, useLocation} from 'react-router-dom';
import {Login} from './Login/Login';
import {Dashboard} from './Dashboard/Dashboard';
import {EditPlan} from './Plans/EditPlan/EditPlan';
import {AnimatePresence} from 'framer-motion';


export const AnimatedRoutes = props => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/plans/:planId" element={<EditPlan/>}/>
      </Routes>
    </AnimatePresence>
  );
};
