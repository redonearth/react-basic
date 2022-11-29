import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '레도널스',
    title: '개발자',
    mentor: {
      name: '엘리',
      title: '시니어 개발자',
    },
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`당신의 멘토의 이름은?`);
          setPerson((person) => ({
            ...person,
            mentor: {
              ...person.mentor,
              name,
            },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`당신의 멘토의 직책은?`);
          setPerson((person) => ({
            ...person,
            mentor: {
              ...person.mentor,
              title,
            },
          }));
        }}
      >
        멘토 직책 바꾸기
      </button>
    </div>
  );
}