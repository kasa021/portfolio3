export const getHeadings = () => {
  const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4")).map(
    (heading) =>{
      heading.id = heading.textContent || "";
      return heading.textContent;
    }
  );
  const nullPoppedHeadings = headings.filter((heading) : heading is string => heading !== null);
  return nullPoppedHeadings;
};

