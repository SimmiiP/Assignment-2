import { useEffect, useState } from "react";
import {getPeople} from '../api/tmdb-api'

const usePeople = id => {
  const [person, setPerson] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      setMovie(person);
    });
  }, [id]);
  return [person, setPerson];
};

export default usePerson;