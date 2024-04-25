import React, { useEffect, useState, useCallback } from "react";
import { Pagination, Drawer, Row } from "antd";
import { Alert, Flex, Spin } from "antd";
import {
  Container,
  BodyStyles,
  HeaderDashboard,
  InputSearch,
  HeaderItemLeft,
  HeaderItemRight,
  IconSearch,
  SearchContain,
  BodyDashboard,
  ItemExam,
  FooterDashboard,
  DescriptionItem,
  DescriptionItemSmall,
  ListStar,
  TitleExam,
  HeaderMobile,
  ImageTab,
  SiderPC,
  ColStyles,
  DifficultQuestion,
  DisplaySpin,
  DrawerStyles,
  SelectStyles,
  ImageSelect,
  ImageExam,
} from "@/styles/dashboard";
import achive from "@/assets/images/achive.svg";
import clock from "@/assets/images/clock.svg";
import star1 from "@/assets/images/star1.svg";
import star2 from "@/assets/images/star2.svg";
import SiderDashboard from "@/components/SiderDashboard";
import tab from "@/assets/images/tab.jpg";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { User, Question } from "@/data/contants";
import { questions } from "@/data/contants";
import { getCurrentUser, getProducts, refreshToken } from "@/pages/api/user/user.service";
import { UserLogin } from "@/types/user";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "@/stores/store";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import { GetStaticPropsContext } from "next";
import { useQuery, useMutation } from "react-query";
import { setCookie, getCookie, deleteCookie, hasCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { setUserLogin } from "@/stores/slices/account";
import { differenceInHours } from "date-fns";

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useQuery("getProducts", getProducts);
  console.log({ data, isLoading, error });
  const user = useSelector((state: AppState) => state.account.user);
  const { t, i18n } = useTranslation("common");
  console.log(user);
  const [pending, setPending] = useState<boolean>(true);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const data: UserLogin | undefined = await getCurrentUser();
  //       console.log(data);
  //       // dispatch(setUserLogin(data));
  //     } catch (error) {
  //       console.error("Error:", error);
  //     } finally {
  //       setPending(false);
  //     }
  //   }
  //   fetchData();
  // }, []);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [listQuestion, setListQuestion] = useState<Question[]>(questions);
  const [totalQuestion, setTotalQuestion] = useState<Question[]>(
    questions || []
  );
  const page: string = searchParams.get("pageIndex") || "1";
  const pageNumber: number = parseInt(page);
  const [pageIndex, setPageIndex] = useState<number>(parseInt(page));
  const [pageSize, setPageSize] = useState(6);
  const [textSearch, setTextSearch] = useState<string>(
    searchParams.get("search-text") || ""
  );
  const [selectItem, setSelectItem] = useState<string>(
    searchParams.get("item") || "0"
  );
  const router = useRouter();
  const handleChange = (value: string | number) => {
    const selectedValue = typeof value === "number" ? value.toString() : value;
    console.log(textSearch);
    router.push(
      `/dashboard?pageIndex=${1}&item=${value}&search=${textSearch}`,
      { scroll: false }
    );
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    console.log("1");
    setTextSearch(searchParams.get("search") || "");
    setSelectItem(searchParams.get("item") || "0");
    if (searchParams.get("item") == "0" || !searchParams.get("item")) {
      setTotalQuestion(
        questions.filter((e) =>
          e.topic.includes(searchParams.get("search") || "")
        )
      );
    } else {
      setTotalQuestion(
        questions.filter(
          (e) =>
            e.topic.includes(searchParams.get("search") || "") &&
            e.level === parseInt(searchParams.get("item") || "1") - 1
        )
      );
    }
    setPageIndex(1);
  }, [textSearch, selectItem, searchParams]);

  useEffect(() => {
    const updatedListQuestion = totalQuestion.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
    setListQuestion(updatedListQuestion);
  }, [totalQuestion, pageNumber, searchParams]);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  console.log(pending);
  console.log(textSearch);
  // const token: string = JSON.parse(getCookie("token") || "");
  // const decoded = jwtDecode(token);
  // if (decoded && decoded.exp) {
  //   const expiresAt = new Date(decoded.exp * 1000);
  //   console.log(expiresAt);
  // } else {
  //   console.log("Token or expiration time not found");
  // }
  // useEffect(() => {
    // const interval = setInterval(async () => {
      // const now = Date.now();
      // const token: string = JSON.parse(getCookie("token") || "");
      // const decoded = jwtDecode(token);
      // if (decoded && decoded.exp) {
      //   const expiresAt = new Date(decoded.exp * 1000).getTime();
      //   console.log(expiresAt);
      //   console.log(now);
      //   console.log(differenceInHours(expiresAt, now));
      //   const date = new Date(expiresAt - now).getTime();
      //   console.log(date / ( 1000 * 60));
      //   if (date < 5) {
      //     refreshToken().then((response) => {
      //       console.log(response);
      //       if (response) {
      //         setCookie("token", JSON.stringify(response.token), {
      //           maxAge: 60 * 60 * 10,
      //         });
      //         dispatch(setUserLogin(response));
      //         router.push("/dashboard", { scroll: false });
      //       }
      //       return response;
      //     });
      //   }
      // } else {
      //   console.log("Token or expiration time not found");
      // }
    // }, 1000 * 60 * 25);
    // return () => clearInterval(interval);
  // }, []);

  return pending && isLoading ? (
    <DisplaySpin>
      <Flex align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    </DisplaySpin>
  ) : (
    <>
      <DrawerStyles
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <SiderDashboard user={user} />
      </DrawerStyles>
      <Container>
        <SiderPC>
          <SiderDashboard user={user} />
        </SiderPC>

        <BodyStyles>
          <HeaderMobile>
            <ImageTab
              src={tab}
              width={30}
              height={30}
              alt="Clock"
              onClick={showDrawer}
            />
            {t("dashboard")}
          </HeaderMobile>
          <HeaderDashboard>
            <HeaderItemLeft>
              <InputSearch
                type="text"
                name="search"
                value={searchParams.get("search") || textSearch}
                onChange={(e) => {
                  setTextSearch(e.target.value);
                  router.push(
                    `/dashboard?pageIndex=${1}&item=${selectItem}&search=${
                      e.target.value
                    }`,
                    { scroll: false }
                  );
                }}
                alt="search"
                placeholder={t("search")}
              />
              <SearchContain>
                <IconSearch />
              </SearchContain>
            </HeaderItemLeft>
            <HeaderItemRight>
              <SelectStyles
                value={searchParams.get("item") || selectItem}
                onChange={handleChange}
                options={[
                  {
                    value: "0",
                    label: (
                      <DifficultQuestion>
                        {t("allDifficult")}
                        <ImageSelect
                          src={star2}
                          width={30}
                          height={30}
                          alt="Achieve"
                        />
                      </DifficultQuestion>
                    ),
                  },
                  {
                    value: "1",
                    label: (
                      <DifficultQuestion>
                        {t("oneDifficult")}{" "}
                        <ImageSelect
                          src={star2}
                          width={30}
                          height={30}
                          alt="Achieve"
                        />
                      </DifficultQuestion>
                    ),
                  },
                  {
                    value: "2",
                    label: (
                      <DifficultQuestion>
                        {t("twoDifficult")}{" "}
                        <ImageSelect
                          src={star2}
                          width={30}
                          height={30}
                          alt="Achieve"
                        />
                      </DifficultQuestion>
                    ),
                  },
                  {
                    value: "3",
                    label: (
                      <DifficultQuestion>
                        {t("threeDifficult")}{" "}
                        <ImageSelect
                          src={star2}
                          width={30}
                          height={30}
                          alt="Achieve"
                        />
                      </DifficultQuestion>
                    ),
                  },
                  {
                    value: "4",
                    label: (
                      <DifficultQuestion>
                        {t("fourDifficult")}{" "}
                        <ImageSelect
                          src={star2}
                          width={30}
                          height={30}
                          alt="Achieve"
                        />
                      </DifficultQuestion>
                    ),
                  },
                  {
                    value: "5",
                    label: (
                      <DifficultQuestion>
                        {t("fiveDifficult")}{" "}
                        <ImageSelect
                          src={star2}
                          width={30}
                          height={30}
                          alt="Achieve"
                        />
                      </DifficultQuestion>
                    ),
                  },
                ]}
              />
            </HeaderItemRight>
          </HeaderDashboard>
          <BodyDashboard>
            <Row gutter={16}>
              {listQuestion.map((question, i) => (
                <ColStyles
                  key={i}
                  onClick={(e) => {
                    router.push("/exam?index=" + question.id, {
                      scroll: false,
                    });
                  }}
                  className="gutter-row"
                  span={12}
                >
                  <ItemExam key={i}>
                    <TitleExam>{question.topic}.</TitleExam>
                    <DescriptionItem>
                      <DescriptionItemSmall>
                        <ImageExam
                          src={clock}
                          width={30}
                          height={30}
                          alt="Clock"
                        />
                        <div>
                          {question.time} {t("minutes")}
                        </div>
                      </DescriptionItemSmall>
                      <DescriptionItemSmall>
                        <ImageExam
                          src={achive}
                          width={30}
                          height={30}
                          alt="Achive"
                        />
                        <div>
                          {question.points}/250 {t("points")}
                        </div>
                      </DescriptionItemSmall>
                    </DescriptionItem>
                    <ListStar>
                      {Array.from({ length: question.level + 1 }).map(
                        (_, index) => (
                          <ImageExam
                            key={index}
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achieve"
                          />
                        )
                      )}
                      {Array.from({ length: 4 - question.level }).map(
                        (_, index) => (
                          <ImageExam
                            key={index}
                            src={star1}
                            width={30}
                            height={30}
                            alt="Achieve"
                          />
                        )
                      )}
                    </ListStar>
                  </ItemExam>
                </ColStyles>
              ))}
            </Row>
          </BodyDashboard>
          <FooterDashboard>
            <Pagination
              current={parseInt(searchParams.get("pageIndex") || "1")}
              pageSize={6}
              pageSizeOptions={[6, 12, 20]}
              total={totalQuestion.length}
              defaultPageSize={6}
              onChange={(index, size) => {
                setPageIndex(index);
                router.push(
                  `/dashboard?pageIndex=${index}&item=${selectItem}&search=${textSearch}`,
                  { scroll: false }
                );
              }}
            />
          </FooterDashboard>
        </BodyStyles>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Dashboard;

export const getStaticProps = async (
  context: GetStaticPropsContext<{ locale: string | undefined }>
) => {
  const locale = context.locale || "vn";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
