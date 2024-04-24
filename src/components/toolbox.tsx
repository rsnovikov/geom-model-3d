import { observer } from "mobx-react-lite";
import { FC } from "preact/compat";

/**
 * Toolbox
 * @returns {JSX.Element}
 */
export const Toolbox: FC = observer(() => {
  return (
    <div className="border-b-2 border-gray-900 bg-gray-700 px-5 py-3 flex gap-2"></div>
  );
});
