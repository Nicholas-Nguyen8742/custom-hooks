import { useEffect, useState } from 'react';
import { Location } from 'react-router';
import { History, Update } from 'history';

type LocationUpdate = Location | Update;

interface useHistoryStackProps {
  location: LocationUpdate;
  history: History;
}

export default function useHistoryStack({ location, history }: useHistoryStackProps) {
  const [locationStack, setLocationStack] = useState<LocationUpdate[]>([]);
  
  useEffect(() => {
    setLocationStack([location]);

    const unlisten = history.listen((location) => {
      setLocationStack((prevStack: LocationUpdate[]) => [...prevStack, location]);
    });

    return () => {
      unlisten();
    };
  }, [history, location]);

  return locationStack;
}
