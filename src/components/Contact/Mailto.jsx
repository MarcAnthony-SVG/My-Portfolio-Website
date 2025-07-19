import React from 'react';

const Email = () => {
  const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = new URLSearchParams();
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);

  return (
    <a href={`mailto:${email}?${params.toString()}`}>
      {children}
    </a>
  );
};

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
