import { FC } from "preact/compat";
import { useRef, useEffect } from "preact/hooks";
import { layoutModel } from "../models/layout.model";

/**
 * Layout
 * @returns {JSX.Element}
 */
export const Layout: FC = () => {
  const layoutWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!layoutWrapperRef.current) return;
    layoutModel.init(layoutWrapperRef.current);
  }, []);

  return (
    <div className="w-full h-full relative bg-white" ref={layoutWrapperRef} />
  );
};
