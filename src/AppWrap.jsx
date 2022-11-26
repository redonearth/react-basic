import React from 'react';
import Navbar from './components/Navbar';

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          name="Redonearth"
          size={200}
        />
      </Navbar>

      <Navbar>
        <p>안녕하세요</p>
      </Navbar>
    </div>
  );
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}'`}
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
