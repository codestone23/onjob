import {
  ButtonSubmit,
  QuestionContainer,
  QuestionItem,
  SubmitExam,
} from "@/styles/exam";
import React from "react";
import { useRouter } from "next/navigation";

const QuestionExamComponent = () => {
  const router = useRouter();
  const onSubmit = () => {
    router.push("/examFinish", { scroll: false });
  };
  return (
    <>
      <QuestionContainer>
        <QuestionItem>1</QuestionItem>
        <QuestionItem>2</QuestionItem>
        <QuestionItem>3</QuestionItem>
        <QuestionItem>4</QuestionItem>
        <QuestionItem>5</QuestionItem>
        <QuestionItem>6</QuestionItem>
        <QuestionItem>7</QuestionItem>
        <QuestionItem>8</QuestionItem>
        <QuestionItem>9</QuestionItem>
        <QuestionItem>10</QuestionItem>
        <QuestionItem>11</QuestionItem>
        <QuestionItem>12</QuestionItem>
        <QuestionItem>13</QuestionItem>
        <QuestionItem>14</QuestionItem>
        <QuestionItem>15</QuestionItem>
        <QuestionItem>16</QuestionItem>
      </QuestionContainer>
      <ButtonSubmit onClick={onSubmit}>
        <SubmitExam>Nộp Bài</SubmitExam>
      </ButtonSubmit>
    </>
  );
};

export default QuestionExamComponent;
