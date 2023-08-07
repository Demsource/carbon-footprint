import { gql } from "@apollo/client";

export const GET_USER_AVATAR = gql`
  query {
    user: myCFUser(where: { id: "clkk8ue3kdzx10ataqxn5zidx" }) {
      id
      image {
        id
        url
      }
    }
  }
`;

export const GET_USER_ID = gql`
  query {
    user: myCFUser(where: { id: "clkk8ue3kdzx10ataqxn5zidx" }) {
      id
    }
  }
`;

export const GET_PLAYERS = gql`
  query {
    leaderboard(where: { type: Players }) {
      id
      players(first: 100) {
        id
        user: myCFUser {
          id
        }
        placement
        avatar {
          id
          url
        }
        username
        points
      }
    }
  }
`;

export const GET_TIPS_DASHBOARD = gql`
  query {
    tips(where: { title: "All" }) {
      id
      dashboardTips: tip_All(first: 100, where: { dashboardTip: true }) {
        content
        category
      }
    }
  }
`;

export const GET_TIPS_TIPS_PAGE = gql`
  query {
    tips(where: { title: "All" }) {
      id
      Housing: tip_All(first: 100, where: { category: Housing }) {
        content
        category
      }
      Nutrition: tip_All(first: 100, where: { category: Nutrition }) {
        content
        category
      }
      Purchases: tip_All(first: 100, where: { category: Purchases }) {
        content
        category
      }
      Travel: tip_All(first: 100, where: { category: Travel }) {
        content
        category
      }
    }
  }
`;

export const GET_USER_CF_BY_CATEGORIES = gql`
  query ($ltmOf: Date, $timing: Timing) {
    user: myCFUser(where: { id: "clkk8ue3kdzx10ataqxn5zidx" }) {
      id
      oneYearData: carbonFootprints(where: { lastTwelveMonthsOf: $ltmOf }) {
        id
        lastTwelveMonthsOf
        Housing: cO2E_EMISSION(first: 100, where: { category: Housing }) {
          co2e
          month
          category
          date
        }
        Nutrition: cO2E_EMISSION(first: 100, where: { category: Nutrition }) {
          co2e
          month
          category
          date
        }
        Purchases: cO2E_EMISSION(first: 100, where: { category: Purchases }) {
          co2e
          month
          category
          date
        }
        Travel: cO2E_EMISSION(first: 100, where: { category: Travel }) {
          co2e
          month
          category
          date
        }
      }
      userGoals(where: { date: $ltmOf, timing: $timing }) {
        id
        timing
        offsetGoalHousingCF
        offsetGoalNutritionCF
        offsetGoalPurchasesCF
        offsetGoalTravelCF
        date
      }
    }
  }
`;

export const GET_USER_CF_MONTHLY = gql`
  query ($ltmOf: Date) {
    user: myCFUser(where: { id: "clkk8ue3kdzx10ataqxn5zidx" }) {
      id
      oneYearData: carbonFootprints(where: { lastTwelveMonthsOf: $ltmOf }) {
        id
        lastTwelveMonthsOf
        January: cO2E_EMISSION(first: 100, where: { month: January }) {
          co2e
          month
          category
          date
        }
        February: cO2E_EMISSION(first: 100, where: { month: February }) {
          co2e
          month
          category
          date
        }
        March: cO2E_EMISSION(first: 100, where: { month: March }) {
          co2e
          month
          category
          date
        }
        April: cO2E_EMISSION(first: 100, where: { month: April }) {
          co2e
          month
          category
          date
        }
        May: cO2E_EMISSION(first: 100, where: { month: May }) {
          co2e
          month
          category
          date
        }
        June: cO2E_EMISSION(first: 100, where: { month: June }) {
          co2e
          month
          category
          date
        }
        July: cO2E_EMISSION(first: 100, where: { month: July }) {
          co2e
          month
          category
          date
        }
        August: cO2E_EMISSION(first: 100, where: { month: August }) {
          co2e
          month
          category
          date
        }
        September: cO2E_EMISSION(first: 100, where: { month: September }) {
          co2e
          month
          category
          date
        }
        October: cO2E_EMISSION(first: 100, where: { month: October }) {
          co2e
          month
          category
          date
        }
        November: cO2E_EMISSION(first: 100, where: { month: November }) {
          co2e
          month
          category
          date
        }
        December: cO2E_EMISSION(first: 100, where: { month: December }) {
          co2e
          month
          category
          date
        }
      }
    }
  }
`;

export const GET_USER_CF_MONTHLY_SINGLE_MONTH = gql`
  query ($ltmOf: Date, $prevMonth: Date, $prevMonthName: Month) {
    user: myCFUser(where: { id: "clkk8ue3kdzx10ataqxn5zidx" }) {
      id
      oneYearData: carbonFootprints(where: { lastTwelveMonthsOf: $ltmOf }) {
        id
        lastTwelveMonthsOf
        singleMonthData: cO2E_EMISSION(
          first: 100
          where: { month: $prevMonthName }
        ) {
          co2e
          month
          category
          date
        }
      }
      userGoals(where: { date: $prevMonth }) {
        id
        timing
        offsetGoalHousingCF
        offsetGoalNutritionCF
        offsetGoalPurchasesCF
        offsetGoalTravelCF
        date
      }
    }
  }
`;

export const GET_USER_GOAL = gql`
  query ($user: MyCFUserWhereInput, $date: Date, $timing: Timing) {
    userGoals(where: { myCFUser: $user, date: $date, timing: $timing }) {
      id
      timing
      offsetGoalHousingCF
      offsetGoalNutritionCF
      offsetGoalPurchasesCF
      offsetGoalTravelCF
      myCFUser {
        id
      }
      date
    }
  }
`;

export const UPDATE_USER_GOAL = gql`
  mutation (
    $user: MyCFUserWhereInput
    $date: Date
    $timing: Timing
    $data: UserGoalUpdateManyInput!
  ) {
    updateManyUserGoalsConnection(
      where: { myCFUser: $user, date: $date, timing: $timing }
      data: $data
    ) {
      edges {
        node {
          id
        }
      }
      __typename
    }
  }
`;
