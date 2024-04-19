import React, { useEffect, useState, useCallback } from "react";
import { Pagination, Drawer, Row } from "antd";
import { Alert, Flex, Spin } from "antd";
import Image from "next/image";
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
import { getCurrentUser } from "@/pages/api/user/user.service";
import { UserLogin } from "@/types/user";
import { useSelector, useDispatch } from "react-redux";
import { getUserLogin, setUserLogin } from "@/stores/slices/account";
import { AppState } from "@/stores/store";

const Dashboard: React.FC = () => {
  const user = useSelector((state: AppState) => state.account.user);
  console.log(user);
  const [pending, setPending] = useState<boolean>(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const data: UserLogin | undefined = await getCurrentUser();
        dispatch(setUserLogin(data));
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setPending(false);
      }
    }
    fetchData();
  }, []);
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
  const handleChange = (value: string) => {
    setSelectItem(value);
    router.push(
      `/dashboard?pageIndex=${1}&item=${value}&search=${textSearch}`,
      { scroll: false }
    );
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    console.log("1");
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
  return pending ? (
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
            Dashboard
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
                placeholder="Search"
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
                        Tất cả
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
                        Độ khó 1{" "}
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
                        Độ khó 2{" "}
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
                        Độ khó 3{" "}
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
                        Độ khó 4{" "}
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
                        Độ khó 5{" "}
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
                        <div>{question.time} phút</div>
                      </DescriptionItemSmall>
                      <DescriptionItemSmall>
                        <ImageExam
                          src={achive}
                          width={30}
                          height={30}
                          alt="Achive"
                        />
                        <div>{question.points}/250 điểm</div>
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
