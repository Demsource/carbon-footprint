import { createContext, useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import {
  GET_USER_AVATAR,
  GET_USER_CF_BY_CATEGORIES,
  GET_USER_CF_MONTHLY,
  GET_USER_CF_MONTHLY_SINGLE_MONTH,
} from "./utils/gqlQueries";

const UserAvatarContext = createContext();
const CategoryNamesContext = createContext();
const UserGoalTimingContext = createContext();
const LastYearCFCategorizedContext = createContext();
const LTMCFCategorizedContext = createContext();
const LTMCFMonthlyContext = createContext();
const BeforeLastYearCFCategorizedContext = createContext();
const LTMCFMonthlyLastMonthContext = createContext();
const LTMCFMonthlyBeforeLastMonthContext = createContext();

export const useUserAvatar = () => useContext(UserAvatarContext);
export const useCategoryNames = () => useContext(CategoryNamesContext);
export const useUserGoalTiming = () => useContext(UserGoalTimingContext);

export const useLastYearCFCategorized = () =>
  useContext(LastYearCFCategorizedContext);
export const useLTMCFCategorized = () => useContext(LTMCFCategorizedContext);
export const useLTMCFMonthly = () => useContext(LTMCFMonthlyContext);
export const useBeforeLastYearCFCategorized = () =>
  useContext(BeforeLastYearCFCategorizedContext);
export const useLTMCFMonthlyLastMonth = () =>
  useContext(LTMCFMonthlyLastMonthContext);
export const useLTMCFMonthlyBeforeLastMonth = () =>
  useContext(LTMCFMonthlyBeforeLastMonthContext);

const AppProvider = ({ children }) => {
  const categoryNames = ["Housing", "Nutrition", "Purchases", "Travel"];
  const { data: userAvatar } = useQuery(GET_USER_AVATAR);
  const [timing, setTiming] = useState("Month");

  const fakeDates = {
    fakeLTMLastMonth: "2023-07-31",
    fakeLTMLastMonthName: "July",
    fakeLastYearDec: "2022-12-31",
    fakeBeforeLastYearDec: "2021-12-31",
    fakeLTMBeforeLastMonth: "2023-06-30",
    fakeLTMBeforeLastMonthName: "June",
  };

  const {
    loading: loading_lastYear_CF_Categorized,
    error: error_lastYear_CF_Categorized,
    data: lastYear_CF_Categorized,
  } = useQuery(GET_USER_CF_BY_CATEGORIES, {
    variables: {
      ltmOf: fakeDates.fakeLastYearDec,
      timing: "Year",
    },
  });

  const {
    loading: loading_ltm_CF_Categorized,
    error: error_ltm_CF_Categorized,
    data: ltm_CF_Categorized,
  } = useQuery(GET_USER_CF_BY_CATEGORIES, {
    variables: {
      ltmOf: fakeDates.fakeLTMLastMonth,
    },
  });

  const {
    loading: loading_ltm_CF_Monthly,
    error: error_ltm_CF_Monthly,
    data: ltm_CF_Monthly,
  } = useQuery(GET_USER_CF_MONTHLY, {
    variables: {
      ltmOf: fakeDates.fakeLTMLastMonth,
    },
  });

  const {
    loading: loading_beforeLastYear_CF_Categorized,
    error: error_beforeLastYear_CF_Categorized,
    data: beforeLastYear_CF_Categorized,
  } = useQuery(GET_USER_CF_BY_CATEGORIES, {
    variables: {
      ltmOf: fakeDates.fakeBeforeLastYearDec,
      timing: "Year",
    },
  });

  const {
    loading: loading_ltm_CF_Monthly_LastMonth,
    error: error_ltm_CF_Monthly_LastMonth,
    data: ltm_CF_Monthly_LastMonth,
  } = useQuery(GET_USER_CF_MONTHLY_SINGLE_MONTH, {
    skip: timing !== "Month",
    variables: {
      ltmOf: fakeDates.fakeLTMLastMonth,
      prevMonth: fakeDates.fakeLTMLastMonth,
      prevMonthName: fakeDates.fakeLTMLastMonthName,
    },
  });

  const {
    loading: loading_ltm_CF_Monthly_BeforeLastMonth,
    error: error_ltm_CF_Monthly_BeforeLastMonth,
    data: ltm_CF_Monthly_BeforeLastMonth,
  } = useQuery(GET_USER_CF_MONTHLY_SINGLE_MONTH, {
    skip: timing !== "Month",
    variables: {
      ltmOf: fakeDates.fakeLTMLastMonth,
      prevMonth: fakeDates.fakeLTMBeforeLastMonth,
      prevMonthName: fakeDates.fakeLTMBeforeLastMonthName,
    },
  });

  return (
    <UserAvatarContext.Provider value={userAvatar}>
      <CategoryNamesContext.Provider value={categoryNames}>
        <UserGoalTimingContext.Provider value={{ timing, setTiming }}>
          <LastYearCFCategorizedContext.Provider
            value={{
              loading_lastYear_CF_Categorized,
              error_lastYear_CF_Categorized,
              lastYear_CF_Categorized,
            }}
          >
            <LTMCFCategorizedContext.Provider
              value={{
                loading_ltm_CF_Categorized,
                error_ltm_CF_Categorized,
                ltm_CF_Categorized,
              }}
            >
              <LTMCFMonthlyContext.Provider
                value={{
                  loading_ltm_CF_Monthly,
                  error_ltm_CF_Monthly,
                  ltm_CF_Monthly,
                }}
              >
                <BeforeLastYearCFCategorizedContext.Provider
                  value={{
                    loading_beforeLastYear_CF_Categorized,
                    error_beforeLastYear_CF_Categorized,
                    beforeLastYear_CF_Categorized,
                  }}
                >
                  <LTMCFMonthlyLastMonthContext.Provider
                    value={{
                      loading_ltm_CF_Monthly_LastMonth,
                      error_ltm_CF_Monthly_LastMonth,
                      ltm_CF_Monthly_LastMonth,
                    }}
                  >
                    <LTMCFMonthlyBeforeLastMonthContext.Provider
                      value={{
                        loading_ltm_CF_Monthly_BeforeLastMonth,
                        error_ltm_CF_Monthly_BeforeLastMonth,
                        ltm_CF_Monthly_BeforeLastMonth,
                      }}
                    >
                      {children}
                    </LTMCFMonthlyBeforeLastMonthContext.Provider>
                  </LTMCFMonthlyLastMonthContext.Provider>
                </BeforeLastYearCFCategorizedContext.Provider>
              </LTMCFMonthlyContext.Provider>
            </LTMCFCategorizedContext.Provider>
          </LastYearCFCategorizedContext.Provider>
        </UserGoalTimingContext.Provider>
      </CategoryNamesContext.Provider>
    </UserAvatarContext.Provider>
  );
};

export default AppProvider;
