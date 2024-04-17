import { AnswerExam, BodyExam, ButtonExam, ButtonLeft, ButtonMove, ButtonRight, ButtonSubmit, ButtonTransfer, CheckboxItem, ContainerExam, ContainQuestion, ContentItem, ContentProgress, HeaderMobileExam, ImageTabExam, ItemAnswer, ModalExam, ProgressExam, ProgressStyles, QuestionContainer, QuestionExam, SiderExam, TimeProgress, TitleExam, TitleProgress } from "@/styles/exam"
import React, { useEffect, useState } from 'react';
import tab from "@/assets/images/tab.jpg";
import { Modal } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation'
import { Layout, Menu, Button, theme,Drawer, Radio, } from 'antd';
import QuestionExamComponent from "@/components/QuestionExamComponent";
import SiderDashboard from "@/components/SiderDashboard";
import { questions } from "@/data/contants";

const Exam = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [indexAnswer, setIndexAnswer] = useState<string | null>(searchParams.get('index'));
    console.log(indexAnswer);
    const [itemAnswer, setItemAnswer] = useState({});
    useEffect(()=> {
        setIndexAnswer(searchParams.get('index'));
        let relItem = questions.filter((e,i) => e.id.toString() == indexAnswer)[0];
        setItemAnswer(relItem);
        console.log(indexAnswer);
        console.log(itemAnswer);
        console.log(questions)
    },[indexAnswer])
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const onSubmit = () => {
        router.push('/examFinish', { scroll: false })
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
    <ContainerExam>
        <BodyExam>
            <HeaderMobileExam>
                    <ImageTabExam
                        src={tab}
                        width={30}
                        height={30}
                        alt="Clock"
                        onClick={showDrawer}
                    />
                {itemAnswer.topic}
            </HeaderMobileExam>
            <ProgressExam>
                <TitleProgress>Kiểm tra an toàn bảo mật thông tin lần 2</TitleProgress>
                <TimeProgress>Còn lại: 14 phút 22 giây</TimeProgress>
                <ContentProgress>
                    <ProgressStyles></ProgressStyles>
                </ContentProgress>
            </ProgressExam>
            <QuestionExam>
                <TitleExam>Câu 3. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?</TitleExam>
                <AnswerExam>
                    <ItemAnswer>
                        <CheckboxItem type="checkbox" name="item"></CheckboxItem>
                        <ContentItem>A. 12 ngày nếu làm đủ cả năm</ContentItem>
                    </ItemAnswer>
                    <ItemAnswer>
                        <CheckboxItem type="checkbox" name="item"></CheckboxItem>
                        <ContentItem>B. 16 ngày nếu làm đủ cả năm</ContentItem>
                    </ItemAnswer>
                    <ItemAnswer>
                        <CheckboxItem type="checkbox" name="item"></CheckboxItem>
                        <ContentItem>C. Không có nghỉ phép vẫn hưởng lương</ContentItem>
                    </ItemAnswer>
                    <ItemAnswer>
                        <CheckboxItem type="checkbox" name="item"></CheckboxItem>
                        <ContentItem>D. 8 ngày nếu làm đủ cả năm</ContentItem>
                    </ItemAnswer>
                </AnswerExam>
                <ButtonExam>
                    <ButtonLeft>Câu trước</ButtonLeft>
                    <ButtonRight>Câu sau</ButtonRight>
                </ButtonExam>
                <ButtonMove>
                    <ButtonTransfer onClick={showModal}>
                        Chuyển đến
                    </ButtonTransfer>
                    
                </ButtonMove>
            </QuestionExam>
        </BodyExam>
        <SiderExam>
            <QuestionExamComponent /> 
        </SiderExam>
        <ModalExam open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]}>
            <QuestionExamComponent /> 
      </ModalExam>
    </ContainerExam>
    </>
  )
}

export default Exam