import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ element, redirectTo }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectTo} />;
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,  // Компонент для рендерингу
  redirectTo: PropTypes.string.isRequired // Шлях для редиректу
};