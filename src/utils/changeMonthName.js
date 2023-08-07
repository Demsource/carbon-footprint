export const getMonthFullName = (label) => {
  switch (label) {
    case "JAN":
      return `January`;
    case "FEB":
      return `February`;
    case "MAR":
      return `March`;
    case "APR":
      return `April`;
    case "MAY":
      return `May`;
    case "JUN":
      return `June`;
    case "JUL":
      return `July`;
    case "AUG":
      return `August`;
    case "SEP":
      return `September`;
    case "OCT":
      return `October`;
    case "NOV":
      return `November`;
    case "DEC":
      return `December`;
    default:
      break;
  }
};

export const getMonthABBR = (label) => {
  switch (label) {
    case "January":
      return `JAN`;
    case "February":
      return `FEB`;
    case "March":
      return `MAR`;
    case "April":
      return `APR`;
    case "May":
      return `MAY`;
    case "June":
      return `JUN`;
    case "July":
      return `JUL`;
    case "August":
      return `AUG`;
    case "September":
      return `SEP`;
    case "October":
      return `OCT`;
    case "November":
      return `NOV`;
    case "December":
      return `DEC`;
    default:
      break;
  }
};
