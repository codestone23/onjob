import { AnswerExam, BodyExam, ButtonExam, ButtonLeft, ButtonRight, ButtonSubmit, CheckboxItem, ContainerExam, ContentItem, ContentProgress, ItemAnswer, ProgressExam, ProgressStyles, QuestionContainer, QuestionExam, QuestionItem, SiderExam, SubmitExam, TimeProgress, TitleExam, TitleProgress } from "@/styles/exam"
import React from 'react';
import { Flex, Progress } from 'antd';
import { HeaderMobile, ImageTab} from "@/styles/dashboard";
import tab from "@/assets/images/tab.jpg";
import { useRouter } from 'next/navigation'

const QuestionExamComponent = () => {
    const router = useRouter();
    const onSubmit = () => {
        router.push('/examFinish', { scroll: false })
      };
  return (
    <>
          <QuestionContainer>
              <QuestionItem>1</QuestionItem>
              <QuestionItem>2</QuestionItem>
              <QuestionItem style={{
                  backgroundColor:' #92FD9D',
              }}>3</QuestionItem>
              <QuestionItem>4</QuestionItem>
              <QuestionItem>5</QuestionItem>
              <QuestionItem>6</QuestionItem>
              <QuestionItem>7</QuestionItem>
              <QuestionItem>8</QuestionItem>
              <QuestionItem style={{
                  backgroundColor:'#D9D9D9',
              }}>9</QuestionItem>
              <QuestionItem>10</QuestionItem>
              <QuestionItem>11</QuestionItem>
              <QuestionItem>12</QuestionItem>
              <QuestionItem>13</QuestionItem>
          </QuestionContainer>
          <ButtonSubmit onClick={onSubmit}>
              <SubmitExam>
                  Nộp Bài
              </SubmitExam>
          </ButtonSubmit>
            
      </>
  )
}

export default QuestionExamComponent