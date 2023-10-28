import { useState, useEffect } from 'react';

interface useOffsetHeightProps {
  id: string;
}

export default function useOffsetHeight({ id }: useOffsetHeightProps): number {
  const [offsetHeight, setOffsetHeight] = useState<number>(0);

  useEffect(() => {
    const node = document.getElementById(id);

    if (node) {
      setOffsetHeight((node.offsetHeight));
    }
    return () => {
      setOffsetHeight(0);
    }
  }, [id]);

  return offsetHeight;
}
