import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  // const contacts = useSelector(selectContacts);
  // const filters = useSelector(selectFilters);

  // const allUsersWithFiltred =
  //   contacts &&
  //   contacts.filter((value) =>
  //     value.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
  //   );

  const allUsersWithFiltred = useSelector(selectFilteredContacts);

  return (
    <ul className={css.ul}>
      {allUsersWithFiltred.map((item) => (
        <li className={css.li} key={item.id}>
          <Contact id={item.id} name={item.name} number={item.number} />
        </li>
      ))}
    </ul>
  );
}

// import css from "./ContactList.module.css";
// import Contact from "../Contact/Contact";
// import { useSelector } from "react-redux";
// export default function ContactList() {
//   const contacts = useSelector((state) => state.contacts.items);
//   const filters = useSelector((state) => state.filters.name);

//   const allUsersWithFiltred =
//     contacts &&
//     contacts.filter((value) =>
//       value.name.toLocaleLowerCase().includes(filters.toLocaleLowerCase())
//     );

//   return (
//     <ul className={css.ul}>
//       {allUsersWithFiltred.map((item) => (
//         <li className={css.li} key={item.id}>
//           <Contact id={item.id} name={item.name} number={item.number} />
//         </li>
//       ))}
//     </ul>
//   );
// }