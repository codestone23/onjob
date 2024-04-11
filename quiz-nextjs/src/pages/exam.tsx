import { AnswerExam, BodyExam, ButtonExam, ButtonLeft, ButtonMove, ButtonRight, ButtonSubmit, ButtonTransfer, CheckboxItem, ContainerExam, ContainQuestion, ContentItem, ContentProgress, HeaderMobileExam, ImageTabExam, ItemAnswer, ModalExam, ProgressExam, ProgressStyles, QuestionContainer, QuestionExam, SiderExam, TimeProgress, TitleExam, TitleProgress } from "@/styles/exam"
import React, { useState } from 'react';
import tab from "@/assets/images/tab.jpg";
import { Button, Modal } from 'antd';
import { useRouter } from 'next/navigation'

import QuestionExamComponent from "@/components/QuestionExamComponent";

const Exam = () => {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    <ContainerExam>
        <BodyExam>
            <HeaderMobileExam>
                    <ImageTabExam
                        src={tab}
                        width={30}
                        height={30}
                        alt="Clock"
                        onClick={showModal}
                    />
                Làm bài thi
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
  )
}

export default Exam