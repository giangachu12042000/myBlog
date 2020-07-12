import React from "react";
import dynamic from 'next/dynamic';

const ReactSummernote = dynamic({
  loader: () => import('../editor'),
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const makeField = () => (props) => { 
  console.log(props,'==>?')
  return (
    <ReactSummernote {...props} />
  );
};


export default makeField();
