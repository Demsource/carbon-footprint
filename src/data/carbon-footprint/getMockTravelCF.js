import googleData from "@dynamic-data/google-data";
import uberData from "@dynamic-data/uber-data";
import distanceToKM from "../../utils/distanceToKM";

// console.log("Mock Data: ", { googleData, uberData });

function fetchGoogleTravelData(month, year) {
  const retrievedSingleData = Number(googleData.Routes.distance);
  const distanceLabel = "meters"; /* needs validation */

  const distanceInKM = distanceToKM(retrievedSingleData, distanceLabel);

  const allTheOtherRoutes = 0;

  const totalRoutes = Math.round(distanceInKM + allTheOtherRoutes);

  if (month) {
    switch (month) {
      case "JAN":
        return 1820 / 2 + totalRoutes;
      case "FEB":
        return 1430 / 2 + totalRoutes;
      case "MAR":
        return 1550 / 2 + totalRoutes;
      case "APR":
        return 2180 / 2 + totalRoutes;
      case "MAY":
        return 1620 / 2 + totalRoutes;
      case "JUN":
        return 1420 / 2 + totalRoutes;
      case "JUL":
        return 1880 / 2 + totalRoutes;
      case "AUG":
        return 2370 / 2 + totalRoutes;
      case "SEP":
        return 1860 / 2 + totalRoutes;
      case "OCT":
        return 1630 / 2 + totalRoutes;
      case "NOV":
        return 1900 / 2 + totalRoutes;
      case "DEC":
        return 1110 / 2 + totalRoutes;

      default:
        break;
    }
  } else if (year === "year") {
    return (
      1820 / 2 +
      totalRoutes +
      1430 / 2 +
      totalRoutes +
      1550 / 2 +
      totalRoutes +
      2180 / 2 +
      totalRoutes +
      1620 / 2 +
      totalRoutes +
      1420 / 2 +
      totalRoutes +
      1880 / 2 +
      totalRoutes +
      2370 / 2 +
      totalRoutes +
      1860 / 2 +
      totalRoutes +
      1630 / 2 +
      totalRoutes +
      1900 / 2 +
      totalRoutes +
      1110 / 2 +
      totalRoutes
    );
  }
}

function fetchUberTravelData(month, year) {
  const retrievedSingleData = Number(uberData.rideReceiptDetails.distance);
  const distanceLabel = uberData.rideReceiptDetails.distance_label;

  const distanceInKM = distanceToKM(retrievedSingleData, distanceLabel);

  const allTheOtherRides = 0;

  const totalRides = Math.round(distanceInKM + allTheOtherRides);

  if (month) {
    switch (month) {
      case "JAN":
        return 1820 / 2 + totalRides;
      case "FEB":
        return 1430 / 2 + totalRides;
      case "MAR":
        return 1550 / 2 + totalRides;
      case "APR":
        return 2180 / 2 + totalRides;
      case "MAY":
        return 1620 / 2 + totalRides;
      case "JUN":
        return 1420 / 2 + totalRides;
      case "JUL":
        return 1880 / 2 + totalRides;
      case "AUG":
        return 2370 / 2 + totalRides;
      case "SEP":
        return 1860 / 2 + totalRides;
      case "OCT":
        return 1630 / 2 + totalRides;
      case "NOV":
        return 1900 / 2 + totalRides;
      case "DEC":
        return 1110 / 2 + totalRides;

      default:
        break;
    }
  } else if (year === "year") {
    return (
      1820 / 2 +
      totalRides +
      1430 / 2 +
      totalRides +
      1550 / 2 +
      totalRides +
      2180 / 2 +
      totalRides +
      1620 / 2 +
      totalRides +
      1420 / 2 +
      totalRides +
      1880 / 2 +
      totalRides +
      2370 / 2 +
      totalRides +
      1860 / 2 +
      totalRides +
      1630 / 2 +
      totalRides +
      1900 / 2 +
      totalRides +
      1110 / 2 +
      totalRides
    );
  }
}

export function calculateTravelCF(month, year) {
  const googleTravelData = fetchGoogleTravelData(month, year);
  const uberTravelData = fetchUberTravelData(month, year);
  const totalTravelData =
    googleTravelData && uberTravelData && googleTravelData + uberTravelData;

  // fake calculation

  return totalTravelData;
}
