export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }

    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [{ name, title }, ...person.mentors],
      };
    }

    case 'deleted': {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }

    default: {
      throw Error(`알 수 없는 액션 타입: ${action.type}`);
    }
  }
}
