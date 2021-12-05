import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/stats-illustration.svg";
//import Calendar from "./Calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-8/12 mt-16 md:mt-0`, //16
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first` //16
    : tw`md:ml-12 lg:ml-16 md:order-last`, //16
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-right text-3xl sm:text-4xl lg:text-5xl text-left md:text-left leading-tight`;

const Description = tw.p`mt-4 text-right md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`;

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
  );
};

export default ({
  subheading = "Contact Us",
  heading = (
    <>
      <span tw="text-primary-500">원하는 시간에</span>
      <wbr /> 브리핑 듣기
    </>
  ),
  description = "브리핑 유형, 날짜, 시간을 정해주세요",
  space = " ",
  submitButtonText = "등록",
  submitNews = "News",
  submitWeather = "Weather",
  submitWork = "Campus",
  submitSchedule = "Schdule",
  formAction = "/secretary_project/#/briefing",
  formMethod = "get",
  textOnLeft = true,
}) => {
  const [BriefingType, setBriefingType] = useState("");
  const onTypeHandler = (e) => {
    e.preventDefault();
    setBriefingType(e.target.textContent);
    //console.log("Type", e.target.textContent);
    console.log(BriefingType);
  };

  const [newsKeyword, setNewsKeyword] = useState("");
  const onKeyWordHandler = (e) => {
    e.preventDefault();
    setNewsKeyword(e.target.value);
    console.log(newsKeyword);
  };

  const [startDate2, setStartDate2] = useState(new Date());

  const onSubmitHandler = () => {
    let body = {
      briefingTime: { startDate2 },
      contentList: [{ BriefingType }],
      campusDay: 3,
      newsKeywordList: [{ newsKeyword }],
      newsCount: 3,
      scheduleCount: 5,
    };
  };

  return (
    <Container>
      {/*<TwoColumn>*/}
      {/*<Image>
        <Image imageSrc={StatsIllustrationSrc} />
      </Image>*/}
      {/*<TextColumn textOnLeft={textOnLeft}>*/}
      {/*<TextColumn textOnLeft={textOnLeft}>*/}
      <TextColumn>
        <TextContent>
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
          <SubmitButton type="click" onClick={onTypeHandler}>
            {submitNews}
          </SubmitButton>
          {space}
          <SubmitButton type="click" onClick={onTypeHandler}>
            {submitWeather}
          </SubmitButton>
          {space}
          <SubmitButton type="click" onClick={onTypeHandler}>
            {submitWork}
          </SubmitButton>
          {space}
          <SubmitButton type="click" onClick={onTypeHandler}>
            {submitSchedule}
          </SubmitButton>
          <Form action={formAction} method={formMethod}>
            <Input
              type="text"
              name="name"
              placeholder="만약 뉴스를 선택하셨다면 뉴스 키워드를 정해주세요"
              onChange={onKeyWordHandler}
            />
            {space && <Description>{space}</Description>}
            <Calendar />
            {space && <Description>{space}</Description>}
            <DatePicker
              selected={startDate2}
              onChange={(date) => {
                setStartDate2(date);
                console.log(date);
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <SubmitButton type="submit" onSubmit={onSubmitHandler}>
              {submitButtonText}
            </SubmitButton>
          </Form>
        </TextContent>
      </TextColumn>
      {/*</TwoColumn>*/}
    </Container>
  );
};
