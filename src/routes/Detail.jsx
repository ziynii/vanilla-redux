import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ toDos }) => {
  const id = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(toDo);
  return (
    <>
      <h1>{toDo?.text}</h1>
		<h5>Created by {toDo?.id}</h5>
		</>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
