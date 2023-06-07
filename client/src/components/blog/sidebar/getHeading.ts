interface TocProps {
  text: string;
  depth: number;
}

export const getHeadings = (): TocProps[] => {
  const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4")).map(
    (heading) => {
      const depth = parseInt(heading.tagName.substring(1)); // 見出しの深さを取得
      heading.id = heading.textContent || "";
      const text = heading.textContent ?? ""; // nullの場合は空文字列を指定
      return { text, depth };
    }
  );
  const nullPoppedHeadings = headings.filter(
    (heading) => heading.text !== null
  );
  return nullPoppedHeadings;
};
