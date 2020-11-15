import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import Button from "../../components/button/Button";
import "./BookList.css";
import { BookSearch } from "../../Store/actions/book";
import { InputControl } from "../../components/Input";
const BookListSearch = () => {
  const dispatch = useDispatch();

  /* Submit Process */
  const onSubmit = (query) => dispatch(BookSearch(query));

  return (
    <div>
      <Formik onSubmit={onSubmit} initialValues={{
        search: ''
      }}>
        {({ setFieldValue }) => (
          <Form className="d-flex">
            <InputControl
              type="text"
              placeholder="Search By Name"
              name="search"
              onChange={(event) => setFieldValue("search", event.target.value)}
            />
            <Button type="submit" text="search" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookListSearch;