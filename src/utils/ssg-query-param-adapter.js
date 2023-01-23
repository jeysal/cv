import { useEffect, useState } from 'react';

function makeStubAdapter() {
  const adapter = {
    replace(location) {},
    push(location) {},
    get location() {
      return new URL('http://localhost/');
    },
  };
  return adapter;
}
function makeWindowAdapter() {
  const adapter = {
    replace(location) {
      window.history.replaceState(location.state, '', location.search || '?');
    },
    push(location) {
      window.history.pushState(location.state, '', location.search || '?');
    },
    get location() {
      return window.location;
    },
  };
  return adapter;
}

export const SsgAdapter = ({ children }) => {
  const [adapter, setAdapter] = useState(makeStubAdapter);
  useEffect(() => {
    setAdapter(makeWindowAdapter());
  }, []);
  return children(adapter);
};
