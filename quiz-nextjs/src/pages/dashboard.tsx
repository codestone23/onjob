import React, { useState } from 'react';
import { Avatar, Space,Pagination,ConfigProvider } from 'antd';
import { Layout, Menu, Button, theme,Drawer, Radio, } from 'antd';
import avatar from '../assets/images/avatar.jpg';
import Image from 'next/image'
import { Container,BodyStyles, SiderStyles, ImageAvatar, TextProfile, ButtonLogout, HeaderDashboard, InputSearch, HeaderItemLeft, HeaderItemRight, IconSearch, SearchContain, IconDown, BodyDashboard, ItemExam, FooterDashboard, DescriptionItem, DescriptionItemSmall, ListStar, TitleExam, HeaderMobile, ImageTab, SiderPC} from "@/styles/dashboard";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import achive from "@/assets/images/achive.svg";
import clock from "@/assets/images/clock.svg";
import star1 from "@/assets/images/star1.svg";
import star2 from "@/assets/images/star2.svg";
import SiderDashboard from "@/components/SiderDashboard";
import tab from "@/assets/images/tab.jpg";

import type { DrawerProps, RadioChangeEvent } from 'antd';


const Dashboard: React.FC = () => {
    const [open, setOpen] = useState(false);
  
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
                background :'#D9D9D9',
                // width: '70%',
                borderRight:'1px solid #a4a5a5',
            }}
        >
            <SiderDashboard />
        </Drawer>
    <Container>
        <SiderPC>
            <SiderDashboard />
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
                    <InputSearch type="text" name="search" alt="search" placeholder="Search"/>
                    <SearchContain>
                        <IconSearch />
                    </SearchContain>
               </HeaderItemLeft>
               <HeaderItemRight>
                    <div>
                        Difficult
                    </div>
                    <div>
                        <IconDown />
                    </div>
               </HeaderItemRight>

            </HeaderDashboard>
            <BodyDashboard>
                <ItemExam>
                    <TitleExam>Kiểm tra an toàn bảo mật thông tin 2...</TitleExam>
                    <DescriptionItem>
                        <DescriptionItemSmall>
                            <Image
                                src={clock}
                                width={30}
                                height={30}
                                alt="Clock"
                                style={{
                                    paddingRight:'0.5rem',
                                }}
                                />
                            <div>7 phút</div>
                        </DescriptionItemSmall>
                        <DescriptionItemSmall>
                        <Image
                            src={achive}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}
                            />
                            <div>200/250 điểm</div>
                        </DescriptionItemSmall>
                    </DescriptionItem>
                    <ListStar>
                        <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star1}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                    </ListStar>
                </ItemExam>
                <ItemExam>
                    <TitleExam>Kiểm tra an toàn bảo mật thông tin 2...</TitleExam>
                    <DescriptionItem>
                        <DescriptionItemSmall>
                            <Image
                                src={clock}
                                width={30}
                                height={30}
                                alt="Clock"
                                style={{
                                    paddingRight:'0.5rem',
                                }}
                                />
                            <div>7 phút</div>
                        </DescriptionItemSmall>
                        <DescriptionItemSmall>
                        <Image
                            src={achive}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}
                            />
                            <div>200/250 điểm</div>
                        </DescriptionItemSmall>
                    </DescriptionItem>
                    <ListStar>
                        <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star1}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                    </ListStar>
                </ItemExam>
                 <ItemExam>
                    <TitleExam>Kiểm tra an toàn bảo mật thông tin 2...</TitleExam>
                    <DescriptionItem>
                        <DescriptionItemSmall>
                            <Image
                                src={clock}
                                width={30}
                                height={30}
                                alt="Clock"
                                style={{
                                    paddingRight:'0.5rem',
                                }}
                                />
                            <div>7 phút</div>
                        </DescriptionItemSmall>
                        <DescriptionItemSmall>
                        <Image
                            src={achive}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}
                            />
                            <div>200/250 điểm</div>
                        </DescriptionItemSmall>
                    </DescriptionItem>
                    <ListStar>
                        <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star1}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                    </ListStar>
                </ItemExam>
                <ItemExam>
                    <TitleExam>Kiểm tra an toàn bảo mật thông tin 2...</TitleExam>
                    <DescriptionItem>
                        <DescriptionItemSmall>
                            <Image
                                src={clock}
                                width={30}
                                height={30}
                                alt="Clock"
                                style={{
                                    paddingRight:'0.5rem',
                                }}
                                />
                            <div>7 phút</div>
                        </DescriptionItemSmall>
                        <DescriptionItemSmall>
                        <Image
                            src={achive}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}
                            />
                            <div>200/250 điểm</div>
                        </DescriptionItemSmall>
                    </DescriptionItem>
                    <ListStar>
                        <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star1}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                    </ListStar>
                </ItemExam>
                <ItemExam>
                    <TitleExam>Kiểm tra an toàn bảo mật thông tin 2...</TitleExam>
                    <DescriptionItem>
                        <DescriptionItemSmall>
                            <Image
                                src={clock}
                                width={30}
                                height={30}
                                alt="Clock"
                                style={{
                                    paddingRight:'0.5rem',
                                }}
                                />
                            <div>7 phút</div>
                        </DescriptionItemSmall>
                        <DescriptionItemSmall>
                        <Image
                            src={achive}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}
                            />
                            <div>200/250 điểm</div>
                        </DescriptionItemSmall>
                    </DescriptionItem>
                    <ListStar>
                        <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star1}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                    </ListStar>
                </ItemExam>
                 <ItemExam>
                    <TitleExam>Kiểm tra an toàn bảo mật thông tin 2...</TitleExam>
                    <DescriptionItem>
                        <DescriptionItemSmall>
                            <Image
                                src={clock}
                                width={30}
                                height={30}
                                alt="Clock"
                                style={{
                                    paddingRight:'0.5rem',
                                }}
                                />
                            <div>7 phút</div>
                        </DescriptionItemSmall>
                        <DescriptionItemSmall>
                        <Image
                            src={achive}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}
                            />
                            <div>200/250 điểm</div>
                        </DescriptionItemSmall>
                    </DescriptionItem>
                    <ListStar>
                        <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star2}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                            <Image
                            src={star1}
                            width={30}
                            height={30}
                            alt="Achive"
                            style={{
                                paddingRight:'0.5rem',
                            }}/>
                    </ListStar>
                </ItemExam>


            </BodyDashboard>
            <FooterDashboard>
            <Pagination defaultCurrent={1} total={50} />
            </FooterDashboard>
        </BodyStyles>
    </Container>
    </>
  )
}

export default Dashboard