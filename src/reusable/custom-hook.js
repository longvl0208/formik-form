import React, { useState } from 'react';
import { signIn } from 'src/services/auth-service';

const useProvideAuth = (props) => {
  // const [user, setUser] = useState('longlv');
  const [user, setUser] = useState(null);

  const signin = (email, password, cb) => {
    signIn(email, password).then((rs) => {
      console.log('Rs', rs);
      setUser(rs.data);
      localStorage.setItem('user', JSON.stringify(rs.data));
      cb();
    }).catch((error) => {
      console.log(error);
    });
  };

  const signout = (cb) => signout(() => {
    setUser(null);
    cb();
  });

  return {
    user,
    signin,
    signout,
  };
};

export default useProvideAuth;
