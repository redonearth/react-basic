import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);
  const handleUpdate = () => {
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
  };
  const handleAdd = () => {
    const name = prompt(`멘토의 이름은 무엇인가요?`);
    const title = prompt(`멘토의 타이틀은 무엇인가요?`);
    setPerson((person) => ({
      ...person,
      mentors: [{ name, title }, ...person.mentors],
    }));
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶나요?`);
    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    }));
  };

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

      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
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
};
