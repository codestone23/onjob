import React, { useEffect, useState, useCallback } from "react";
import { Pagination, Drawer, Row, Col } from "antd";
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
import { users } from "@/data/contants";
import { Select } from "antd";
import { getCurrentUser } from "@/pages/api/user/user.service";
import SiderManager from "../components/SiderManager";
import {
  BodyManager,
  ColUser,
  HeaderRightManager,
  ImageAdd,
  RowItem,
  TextCol,
  TextFrontHeader,
} from "@/styles/userManager";
import addcolor from "../assets/images/addcolor.png";
import change from "../assets/images/change.png";
import trash from "../assets/images/trash.png";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | Object>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCurrentUser();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [listUser, setListUser] = useState<User[]>(users);
  const [totalUser, setTotalUser] = useState<User[]>(users || []);
  const page: string = searchParams.get("pageIndex") || "1";
  const pageNumber: number = parseInt(page);
  console.log(page);
  const [pageIndex, setPageIndex] = useState<number>(parseInt(page));
  const [pageSize, setPageSize] = useState(6);
  const [textSearch, setTextSearch] = useState<string>(
    searchParams.get("search-text") || ""
  );
  const router = useRouter();
  useEffect(() => {
    if (searchParams.get("item") == "0" || !searchParams.get("item")) {
      setTotalUser(
        users.filter((e) => e.email.includes(searchParams.get("search") || ""))
      );
    }
    setPageIndex(1);
  }, [textSearch, searchParams]);

  useEffect(() => {
    const updatedListUser = totalUser.slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    );
    setListUser(updatedListUser);
    console.log((pageNumber - 1) * pageSize + 1, pageNumber * pageSize);
    console.log(updatedListUser);
  }, [totalUser, pageNumber, searchParams]);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        style={{
          background: "#D9D9D9",
          // width: '70%',
          borderRight: "1px solid #a4a5a5",
        }}
      >
        <SiderManager user={user} />
      </Drawer>
      <Container>
        <SiderPC>
          <SiderManager user={user} />
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
            User Manager
          </HeaderMobile>
          <TextFrontHeader>Home &gt; User Manager</TextFrontHeader>
          <HeaderDashboard>
            <HeaderItemLeft>
              <InputSearch
                type="text"
                name="search"
                value={searchParams.get("search") || textSearch}
                onChange={(e) => {
                  setTextSearch(e.target.value);
                  router.push(
                    `/userManager?pageIndex=${1}&search=${e.target.value}`,
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
            <HeaderRightManager>
              <ImageAdd
                src={addcolor}
                width={30}
                height={30}
                alt="Clock"
                // onClick={showDrawer}
              />
              New User
            </HeaderRightManager>
          </HeaderDashboard>
          <TextFrontHeader>Tổng số tài khoản: 85</TextFrontHeader>
          <BodyManager>
            <RowItem gutter={16}>
              {listUser.map((u, i) => {
                return (
                  <ColUser key={i}>
                    <TextCol>
                      <div>Username: {u.email}</div>
                      <div>Name: {u.username}</div>
                    </TextCol>
                    <div>
                      <ImageAdd
                        src={change}
                        width={30}
                        height={30}
                        alt="Clock"
                        // onClick={showDrawer}
                      />
                      <ImageAdd
                        src={trash}
                        width={30}
                        height={30}
                        alt="Clock"
                        // onClick={showDrawer}
                      />
                    </div>
                  </ColUser>
                );
              })}
            </RowItem>
          </BodyManager>
          <FooterDashboard>
            <Pagination
              current={parseInt(searchParams.get("pageIndex") || "1")}
              pageSize={6}
              pageSizeOptions={[6, 12, 20]}
              total={totalUser.length}
              defaultPageSize={6}
              onChange={(index, size) => {
                setPageIndex(index);
                router.push(
                  `/userManager?pageIndex=${index}&search=${textSearch}`,
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
