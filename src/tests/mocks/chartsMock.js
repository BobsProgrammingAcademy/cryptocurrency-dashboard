function Doughnut({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

function Line({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

function Bar({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

function Pie({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

function PolarArea({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

export { Doughnut, Line, Bar, Pie, PolarArea };
