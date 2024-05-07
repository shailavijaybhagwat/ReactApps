import { useEffect, useRef } from "react";



export default function Demo2() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tutorial">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}