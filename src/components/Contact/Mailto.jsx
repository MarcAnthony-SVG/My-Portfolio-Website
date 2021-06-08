import Mailto from 'react-mailto';
import React from 'react';

const Email = () => {
  return (
    <Mailto
      email="marcanthonyrodriguez95@gmail.com"
      obfuscate={true}
      headers={{ subject: 'NICE WEBSITE!, Lets talk more.' }}
    >
      Meet the designer!
    </Mailto>
  );
};
export default Email;
