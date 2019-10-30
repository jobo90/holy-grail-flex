import React from 'react';

export interface ErrorPageProps {}

const ErrorPage: React.SFC<ErrorPageProps> = () => {
  return <div>The URL entered is invalid</div>;
};

export default ErrorPage;
