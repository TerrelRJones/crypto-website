import * as React from "react";

interface AppProps {
  children?: React.ReactNode;
}

export const App = ({ children }: AppProps) => {
  return <div>{children}</div>;
};
