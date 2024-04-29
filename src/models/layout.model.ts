import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

class LayoutModel {
  private scene: THREE.Scene | null = null;
  private renderer: THREE.WebGLRenderer | null = null;
  private mesh: THREE.Mesh | THREE.LineSegments | null = null;
  public a: number = 1.5;
  public b: number = 2.2;
  public polygons: number = 40;
  public size: number = 5;
  public isFill: boolean = false;
  constructor() {}

  public init(parent: HTMLElement) {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(parent.clientWidth, parent.clientHeight);
    this.renderer.setClearColor(0x3d3635);
    parent.appendChild(this.renderer.domElement);

    let light = new THREE.DirectionalLight(0xffffff, 1);
    // light.position.setScalar(1);
    this.scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

    let camera = new THREE.PerspectiveCamera(
      40,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 50);
    camera.lookAt(this.scene.position);

    this.scene.add(new THREE.AxesHelper(10));
    new OrbitControls(camera, this.renderer.domElement);
    this.render();
    this.startTicker(camera);
  }

  private render() {
    if (!this.scene) {
      return;
    }
    if (this.mesh) {
      this.scene.remove(this.mesh);
    }

    const vertices = [];
    const indices = [];

    for (let i = 0; i <= this.polygons; i++) {
      for (let j = 0; j <= this.polygons; j++) {
        const x = (i / this.polygons - 0.5) * this.size * 2;
        const y = (j / this.polygons - 0.5) * this.size * 2;
        const z = (x ** 2 / this.a ** 2 - y ** 2 / this.b ** 2) / 2;

        vertices.push(x, y, z);
        if (i < this.polygons && j < this.polygons) {
          const a = i * (this.polygons + 1) + j;
          const b = (i + 1) * (this.polygons + 1) + j;
          const c = i * (this.polygons + 1) + j + 1;
          const d = (i + 1) * (this.polygons + 1) + j + 1;
          indices.push(a, b, c, b, d, c);
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setIndex(indices);
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(vertices), 3, true)
    );
    geometry.rotateX(-30);
    geometry.computeVertexNormals();

    // Создание материала и модели
    const material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      color: 0x25b38b,
    });
    if (this.isFill) {
      this.mesh = new THREE.Mesh(geometry, material);
    } else {
      this.mesh = new THREE.LineSegments(geometry, material);
    }
    this.scene.add(this.mesh);
  }

  private startTicker(camera: THREE.Camera) {
    const tick = () => {
      requestAnimationFrame(tick);
      // controls.update();
      if (!this.renderer || !this.scene) {
        return;
      }
      this.renderer.render(this?.scene, camera);
    };

    tick();
  }

  setA(value: this["a"]) {
    this.a = value;
    this.render();
  }

  setB(value: this["b"]) {
    this.b = value;
    this.render();
  }

  setPolygons(value: this["polygons"]) {
    this.polygons = value;
    this.render();
  }

  setSize(value: this["size"]) {
    this.size = value;
    this.render();
  }

  setIsFill(value: this["isFill"]) {
    this.isFill = value;
    this.render();
  }
}

export const layoutModel = new LayoutModel();
