export function calculatePurchasesCF(month, year) {
  // fake fetch
  // fake calculation

  if (month) {
    switch (month) {
      case "JAN":
        return 240;
      case "FEB":
        return 140;
      case "MAR":
        return 980;
      case "APR":
        return 390;
      case "MAY":
        return 440;
      case "JUN":
        return 340;
      case "JUL":
        return 1280;
      case "AUG":
        return 590;
      case "SEP":
        return 540;
      case "OCT":
        return 640;
      case "NOV":
        return 1100;
      case "DEC":
        return 550;

      default:
        break;
    }
  } else if (year === "year") {
    return (
      240 + 140 + 980 + 390 + 440 + 340 + 1280 + 590 + 540 + 640 + 1100 + 550
    );
  }
}
