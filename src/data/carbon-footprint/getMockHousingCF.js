export function calculateHousingCF(month, year) {
  // fake fetch
  // fake calculation

  if (month) {
    switch (month) {
      case "JAN":
        return 950;
      case "FEB":
        return 560;
      case "MAR":
        return 1160;
      case "APR":
        return 1500;
      case "MAY":
        return 1050;
      case "JUN":
        return 760;
      case "JUL":
        return 1680;
      case "AUG":
        return 3360;
      case "SEP":
        return 2150;
      case "OCT":
        return 960;
      case "NOV":
        return 1960;
      case "DEC":
        return 1560;

      default:
        break;
    }
  } else if (year === "year") {
    return (
      950 +
      560 +
      1160 +
      1500 +
      1050 +
      760 +
      1680 +
      3360 +
      2150 +
      960 +
      1960 +
      1560
    );
  }
}
