export default function distanceToKM(value, distanceLabel) {
  switch (distanceLabel) {
    case "meters":
      return value / 1000;
    case "miles":
      return value * 1.609344;
    case "kilometers":
      return value;
    default:
      break;
  }
}
