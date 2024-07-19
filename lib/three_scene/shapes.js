import {
  SphereGeometry,
  MeshStandardMaterial,
  Mesh,
  CapsuleGeometry,
  BoxGeometry,
} from "three";

export function createSphereMesh(radius, color) {
  const geometry = new SphereGeometry(radius, 64, 64);
  const material = new MeshStandardMaterial({ color: color });
  const mesh = new Mesh(geometry, material);
  return mesh;
}

export function createCapsuleMesh(length, radius, color) {
  const geometry = new CapsuleGeometry(radius, length, 64, 64);
  const material = new MeshStandardMaterial({ color: color });
  const mesh = new Mesh(geometry, material);
  return mesh;
}

export function createBoxMesh(width, height, depth, color) {
  const geometry = new BoxGeometry(width, height, depth, 1, 1, 2);
  const material = new MeshStandardMaterial({ color: color });
  const mesh = new Mesh(geometry, material);
  return mesh;
}
