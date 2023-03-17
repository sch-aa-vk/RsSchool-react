export const SearchIcon = () => (
  <svg
    width={20}
    height={20}
    className="search-icon"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        id="a"
        d="M11.71.573C9.47 1.29 8 3.054 7.3 5.865 6.251 10.08 4.952 10.618.72 9.119c1.52 2.807 4.6 3.932 6.58 3.932 1.98 0 7.11-2.757 6.522-7.998A21.678 21.678 0 0 0 11.71.573Z"
      />
      <path
        id="c"
        d="m14.18 12.77 5.53 5.54a.99.99 0 0 1-1.4 1.4l-5.53-5.539a7.92 7.92 0 1 1 1.399-1.401ZM7.92 13.86a5.94 5.94 0 1 0 0-11.88 5.94 5.94 0 0 0 0 11.88Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2 2)">
      <g transform="translate(1 2)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#D8D8D8" xlinkHref="#a" />
        <g fill="#B6EADA" mask="url(#b)">
          <path d="M-3-4h24v24H-3z" />
        </g>
      </g>
      <mask id="d" fill="#fff">
        <use xlinkHref="#c" />
      </mask>
      <use fill="#000" fillRule="nonzero" xlinkHref="#c" />
      <g fill="#5B8FB9" mask="url(#d)">
        <path d="M-2-2h24v24H-2z" />
      </g>
    </g>
  </svg>
);
