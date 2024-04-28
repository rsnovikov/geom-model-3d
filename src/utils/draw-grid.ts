// import * as THREE from "three";

// const drawGrid = async (scene: THREE.Scene) => {
//   // Создаем материал для осей
//   const axesLineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });

//   // Создаем геометрию для осей X, Y, Z
//   const axesLineGeometryX = new THREE.BufferGeometry().setFromPoints([
//     new THREE.Vector3(0, 0, 0),
//     new THREE.Vector3(5, 0, 0),
//   ]);
//   const axesLineGeometryY = new THREE.BufferGeometry().setFromPoints([
//     new THREE.Vector3(0, 0, 0),
//     new THREE.Vector3(0, 5, 0),
//   ]);
//   const axesLineGeometryZ = new THREE.BufferGeometry().setFromPoints([
//     new THREE.Vector3(0, 0, 0),
//     new THREE.Vector3(0, 0, 5),
//   ]);

//   // Создаем объекты для осей X, Y, Z
//   const axesLineX = new THREE.Line(axesLineGeometryX, axesLineMaterial);
//   const axesLineY = new THREE.Line(axesLineGeometryY, axesLineMaterial);
//   const axesLineZ = new THREE.Line(axesLineGeometryZ, axesLineMaterial);

//   // Добавляем оси на сцену
//   scene.add(axesLineX);
//   scene.add(axesLineY);
//   scene.add(axesLineZ);

//   // Создаем материалы для числовых значений
//   const materialX = new THREE.MeshBasicMaterial({ color: 0x000000 });
//   const materialY = new THREE.MeshBasicMaterial({ color: 0x000000 });
//   const materialZ = new THREE.MeshBasicMaterial({ color: 0x000000 });

//   const loader = new FontLoader();

//   // Создаем геометрии для числовых значений
//   const geometryX = new TextGeometry("X", {
//     font,
//     size: 0.5,
//     height: 0.1,
//   });
//   const geometryY = new TextGeometry("Y", {
//     font,
//     size: 0.5,
//     height: 0.1,
//   });
//   const geometryZ = new TextGeometry("Z", {
//     font,
//     size: 0.5,
//     height: 0.1,
//   });

//   // Создаем объекты для числовых значений
//   const textX = new THREE.Mesh(geometryX, materialX);
//   const textY = new THREE.Mesh(geometryY, materialY);
//   const textZ = new THREE.Mesh(geometryZ, materialZ);

//   // Устанавливаем позиции числовых значений
//   textX.position.set(4.5, 0, 0);
//   textY.position.set(0, 4.5, 0);
//   textZ.position.set(0, 0, 4.5);

//   // Добавляем числовые значения на сцену
//   scene.add(textX);
//   scene.add(textY);
//   scene.add(textZ);
// };
