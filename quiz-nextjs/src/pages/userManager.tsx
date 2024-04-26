import React, { useEffect, useState, useCallback } from "react";
import { Pagination, Drawer, Row, Col } from "antd";
import {
  Container,
  BodyStyles,
  HeaderMobile,
  ImageTab,
  SiderPC,
} from "@/styles/dashboard";
import tab from "@/assets/images/tab.jpg";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { User, Question } from "@/data/contants";
import { getCurrentUser } from "@/pages/api/user/user.service";
import SiderManager, { ItemComponent } from "../components/SiderManager";
import { HeaderPCText, TextFrontHeader } from "@/styles/userManager";
import UserTable from "@/components/UserTable";
import ExamTable from "@/components/ExamTable";

const UserManager: React.FC = () => {
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [open, setOpen] = useState(false);
  const page: string = searchParams.get("pageIndex") || "1";
  const [locationPage, setLocationPage] = useState<number>(0);
  const handleChangeLocationPage = (num: number) => {
    
    setLocationPage(num);
    router.push("/userManager", { scroll: false });
    
  };
  console.log(page);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  interface ComponentSider {
    topic?: string;
    value?: number;
    component?: any;
  }
  const listComponents: ComponentSider[] = [
    {
      topic: "User Manager",
      value: 0,
      component: <UserTable />
    },
    {
      topic: "Test Manager",
      value: 1,
      component: <ExamTable />
    },
    {
      topic: "Test Quiz",
      value: 2,
      component: <UserTable />
  
    },
  ];

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
          <SiderManager
            handleChangeLocationPage={handleChangeLocationPage}
            locationPage={locationPage}
            user={user}
          />
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
          <HeaderPCText>{listComponents[locationPage]?.topic}</HeaderPCText>
          <TextFrontHeader>Home &gt; {listComponents[locationPage]?.topic}</TextFrontHeader>
          {
            listComponents.map((e,i) => {
              if(locationPage === i){
                return e.component;
              }else{
                return <></>
              }
            })
          }
          <UserTable />
        </BodyStyles>
        <ToastContainer />
      </Container>
    </>
  );
};

export default UserManager;
