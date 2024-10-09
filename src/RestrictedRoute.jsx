import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";


export default function RestrictedRoute({ element, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
}
RestrictedRoute.propTypes = {
  element: PropTypes.element.isRequired,  
  redirectTo: PropTypes.string.isRequired 
};