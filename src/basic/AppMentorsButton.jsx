import React, { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶으세요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶으세요?`);
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은 무엇인가요?`);
    const title = prompt(`멘토의 타이틀은 무엇인가요?`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶나요?`);
    dispatch({ type: 'deleted', name });
  }, []);

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

      <Button onClick={handleUpdate} text="멘토 이름 바꾸기" />
      <Button onClick={handleAdd} text="멘토 추가하기" />
      <Button onClick={handleDelete} text="멘토 삭제하기" />
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, '리렌더링');
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '6px',
        margin: '.4rem',
        cursor: 'pointer',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😎');
  }
  return 10;
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
