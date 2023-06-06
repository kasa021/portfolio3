export const getHeadings = () => {
  const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4")).map(
    (heading) => {
      const depth = parseInt(heading.tagName.substring(1)); // 見出しの深さを取得
      heading.id = heading.textContent || "";
      return { text: heading.textContent, depth };
    }
  );
  const nullPoppedHeadings = headings.filter(
    (heading) => heading.text !== null
  );
  return nullPoppedHeadings;
};
