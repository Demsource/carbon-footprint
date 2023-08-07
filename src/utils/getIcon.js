import {
  HousingIcon,
  NutritionIcon,
  PurchasesIcon,
  TravelIcon,
} from "../assets/icons/CategoryIcons";
import { CloseIcon, ExpandIcon } from "../assets/icons/OtherIcons";
import {
  DashboardIcon,
  DonationsIcon,
  LeaderboardIcon,
  TipsIcon,
  YourProgressIcon,
} from "../assets/icons/SideBarIcons ";

function getIcon(name, color, restSVGProps) {
  switch (name) {
    // Category Icons
    case "Housing":
      return <HousingIcon color={color} {...restSVGProps} />;
    case "Nutrition":
      return <NutritionIcon color={color} {...restSVGProps} />;
    case "Purchases":
      return <PurchasesIcon color={color} {...restSVGProps} />;
    case "Travel":
      return <TravelIcon color={color} {...restSVGProps} />;
    // Side Navbar Icons
    case "Dashboard":
      return <DashboardIcon color={color} {...restSVGProps} />;
    case "Leaderboard":
      return <LeaderboardIcon color={color} {...restSVGProps} />;
    case "Tips":
      return <TipsIcon color={color} {...restSVGProps} />;
    case "Your Progress":
      return <YourProgressIcon color={color} {...restSVGProps} />;
    case "Donations":
      return <DonationsIcon color={color} {...restSVGProps} />;
    // Other Icons
    case "Expand":
      return <ExpandIcon color={color} {...restSVGProps} />;
    case "Close":
      return <CloseIcon color={color} {...restSVGProps} />;
    default:
      break;
  }
}

export default getIcon;
