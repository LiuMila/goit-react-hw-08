import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Дочірні компоненти є обов'язковими і можуть бути будь-якими React елементами
};