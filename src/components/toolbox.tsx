import { Checkbox, Input } from "antd";
import { ChangeEvent, FC } from "preact/compat";
import { layoutModel } from "../models/layout.model";

/**
 * Toolbox
 * @returns {JSX.Element}
 */
export const Toolbox: FC = () => {
  return (
    <div className="border-b-2 border-gray-900 bg-gray-700 px-5 py-3 flex gap-2">
      <Checkbox
        className="text-white text-center"
        onChange={(event) => {
          layoutModel.setIsFill(event.target.checked);
        }}
      >
        <div className="mt-1">Поверхностная</div>
      </Checkbox>
      <Input
        rootClassName="bg-white"
        defaultValue={layoutModel.a}
        addonBefore={"a"}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Number((event.target as HTMLInputElement)?.value);
          console.log(value);

          if (Number.isNaN(value)) {
            return;
          }
          layoutModel.setA(value);
        }}
      />
      <Input
        rootClassName="bg-white"
        defaultValue={layoutModel.b}
        addonBefore={"b"}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Number((event.target as HTMLInputElement)?.value);
          console.log(value);

          if (Number.isNaN(value)) {
            return;
          }
          layoutModel.setB(value);
        }}
      />
      <Input
        rootClassName="bg-white"
        defaultValue={layoutModel.polygons}
        addonBefore={"Полигоны"}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Number((event.target as HTMLInputElement)?.value);
          console.log(value);

          if (!Number.isInteger(value)) {
            return;
          }
          layoutModel.setPolygons(value);
        }}
      />
      <Input
        rootClassName="bg-white"
        defaultValue={layoutModel.size}
        addonBefore={"Размер"}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Number((event.target as HTMLInputElement)?.value);
          console.log(value);

          if (!Number.isInteger(value)) {
            return;
          }
          layoutModel.setSize(value);
        }}
      />
    </div>
  );
};
