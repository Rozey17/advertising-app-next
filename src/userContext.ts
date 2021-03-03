import React from 'react';

export interface User {
  sub: string;
  username: string | undefined;
  email: string;
  phone_number: string;
}

const UserContext = React.createContext<User | undefined>(undefined);

export { UserContext };
