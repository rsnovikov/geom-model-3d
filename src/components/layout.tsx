import { FC } from "preact/compat";
import { useRef, useEffect } from "preact/hooks";
import { observer } from "mobx-react-lite";

/**
 * Layout
 * @returns {JSX.Element}
 */
export const Layout: FC = observer(() => {
  const layoutWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return <div className="w-full h-full relative" ref={layoutWrapperRef}></div>;
});
