import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: '레도널스',
    title: '개발자',
    mentors: [
      {
        id: 1,
        name: '니꼬',
        title: '시니어 개발자',
      },
      {
        id: 2,
        name: '엘리',
        title: '시니어 개발자',
      },
    ],
  });

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map((mentor) => (
          <li key={mentor.id}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶으세요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶으세요?`);
          setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
              if (mentor.name === prev) {
                return { ...mentor, name: current };
              }
              return mentor;
            }),
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
    </div>
  );
}
