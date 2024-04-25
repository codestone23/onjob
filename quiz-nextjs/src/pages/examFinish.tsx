import {
  ButtonBack,
  ButtonBackDashboard,
  ContainerExamFinish,
  ContentForm,
  ContentItem,
  ContentItemNumber,
  ContentItemTitle,
  ContentLeft,
  ContentRight,
  FormFinish,
  TitleForm,
} from "@/styles/examFinish";
import React from "react";
import { useRouter } from "next/navigation";

const ExamFinish = () => {
  const router = useRouter();
  const onBackDashboard = () => {
    router.push("/dashboard", { scroll: false });
  };
  return (
    <ContainerExamFinish>
      <FormFinish>
        <TitleForm>Kiểm tra an toàn bảo mật thông tin lần 2</TitleForm>
        <ContentForm>
          <ContentLeft>
            <ContentItem>
              <ContentItemTitle>Số câu trả lời đúng: </ContentItemTitle>
              <ContentItemNumber>12</ContentItemNumber>
            </ContentItem>
            <ContentItem>
              <ContentItemTitle>Số câu trả lời sai:</ContentItemTitle>
              <ContentItemNumber>3</ContentItemNumber>
            </ContentItem>
            <ContentItem>
              <ContentItemTitle>Số câu chưa trả lời đúng:</ContentItemTitle>
              <ContentItemNumber>1</ContentItemNumber>
            </ContentItem>
            <ContentItem>
              <ContentItemTitle>Tổng số câu hỏi:</ContentItemTitle>
              <ContentItemNumber>16</ContentItemNumber>
            </ContentItem>
          </ContentLeft>
          <ContentRight>Điểm số: 120 / 160</ContentRight>
        </ContentForm>
        <ButtonBackDashboard onClick={onBackDashboard}>
          <ButtonBack>DashBoard</ButtonBack>
        </ButtonBackDashboard>
      </FormFinish>
    </ContainerExamFinish>
  );
};

export default ExamFinish;
