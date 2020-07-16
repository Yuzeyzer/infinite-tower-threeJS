export function getBrick(index, number, odd, color) {
  let radius = 3;
  let angle = (index * 2 * Math.PI) / number;

  let width = 2 * radius * Math.sin(Math.PI / number) + odd*Math.PI/number;

  let mesh = new THREE.Mesh(
    new THREE.BoxBufferGeometry(width, 1, 1),
    new THREE.MeshLambertMaterial({ color: color? 0xcccccc : 0x333333 }),
  );
  mesh.position.set((radius + 0.45) * Math.sin(angle), 0, (radius + 0.45) * Math.cos(angle));
  mesh.rotation.y = angle;
  return mesh;
}