import React from 'react';
import { useParams } from 'react-router-dom';

export default function SubCategory() {
  let { subCategory } = useParams();

  return <div>{subCategory} page</div>;
}
