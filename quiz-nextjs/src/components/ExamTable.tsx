import React, { useEffect, useState, useCallback } from "react";
import { Pagination, Drawer, Row, Col } from "antd";
import Image from "next/image";
import {
  HeaderDashboard,
  InputSearch,
  HeaderItemLeft,
  IconSearch,
  SearchContain,
} from "@/styles/dashboard";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { User, Question } from "@/data/contants";
import { users } from "@/data/contants";
import { getCurrentUser } from "@/pages/api/user/user.service";
import {
  BodyManager,
  ColUser,
  FooterUserManager,
  HeaderRightManager,
  ImageAdd,
  RowItem,
  TextCol,
  TextFrontHeader,
} from "@/styles/userManager";
import addcolor from "../assets/images/addcolor.png";
import change from "../assets/images/change.png";
import trash from "../assets/images/trash.png";
import plus from "../assets/images/plus.png";

const ExamTable: React.FC = () => {
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
                src={plus}
                width={30}
                height={30}
                alt="Clock"
                // onClick={showDrawer}
              />
              New Test
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
          <FooterUserManager>
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
          </FooterUserManager>
    
    
    </>
  )
}

export default ExamTable;