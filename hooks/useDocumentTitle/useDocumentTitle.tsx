import { useEffect, useState } from "react";

interface useDocumentTitleProps {
  title: string;
}

export default function useDocumentTitle({ title }: useDocumentTitleProps): string | undefined {
  const [documentTitle, setDocumentTitle] = useState<string | undefined>();

  useEffect(() => {
    setDocumentTitle(title);
    const titleTag = document.querySelector('title');

    if (titleTag) {
      titleTag.textContent = title;
    }

    return () => {
      setDocumentTitle(undefined);
    }
  }, [title]);

  return documentTitle;
}
