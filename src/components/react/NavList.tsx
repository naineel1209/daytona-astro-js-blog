export default () => {
  const navListItems = [{
    id: 0,
    name: 'Home',
    url: '/'
  }, {
    id: 1,
    name: 'About Me',
    url: '/about-me'
  }, {
    id: 2,
    name: 'Articles',
    url: '/articles'
  }
  ]

  return (
    <>
      <style>
        {
          `
      /* src/styles/global.css or any other CSS file you include */
.gradient-text-shadow:hover {
  /* Create multiple text-shadow layers to simulate a gradient */
  text-shadow:
    5px 1px 2px rgba(0, 0, 139, 0.3),
    6px 2px 4px rgba(0, 0, 139, 0.3),
    7px 3px 6px rgba(0, 0, 139, 0.2),
    8px 4px 8px rgba(0, 0, 139, 0.2),
    9px 5px 10px rgba(0, 0, 139, 0.1);
}`
        }
      </style>
      <ul className="text-white flex flex-row gap-1">
        {navListItems.map((item) => (
          <li style={{ width: '100px' }} key={item.id} className="text-center">
            <a className=" relative text-xl hover:font-medium font-bold transition-all duration-200 gradient-text-shadow after:flex after:items-center after:justify-center after:absolute after:h-1 after:w-0 hover:after:w-full after:transition-all after:duration-200 after:bg-blue-950 after:left-0 after:bottom-[-.5rem] after:rounded-lg" href={item.url}>{item.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
