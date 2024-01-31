import React from 'react';
import Form from '../Form';

type Props = {
  children: React.ReactNode;
  params: { user: string };
};

const UserLayout = ({ children, params: { user } }: Props) => {
  return (
    <>
      <Form value={user} />
      {children}
    </>
  );
};

export default UserLayout;
