import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function AlertMsg() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <>
        <Alert variant='success'>
          Hey {localStorage.getItem('name')}, your booking is confirmed 🎉
        </Alert>
    </>
    );
  }
}