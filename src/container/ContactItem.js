import React from 'react'
import { Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from '../redux/reducer/delete';


const ContactItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(item.id));
  };
  return (
    <div>
      <Row>
        <Col className="first-col" lg={2}>
          <img
            width={80}
            src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"></img>
        </Col>
        <Col className="second-col" lg={10}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
          <button className="del-button" onClick={handleDelete}>삭제</button>
        </Col>
      </Row>
    </div >
  )
}

export default ContactItem
