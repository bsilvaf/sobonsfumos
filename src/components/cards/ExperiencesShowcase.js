import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border  bg-gray-900 max-w-sm border-black sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold text-white`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4 text-white`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-white`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-white`;
const Text2 = tw.div``;


const Center = tw.div`ml-2 text-2xl font-semibold text-white relative`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "MOROCCO SBF'S EXPERIENCE 1PAX",
      datesOne: "July 24th - July 31st",
      datesTwo: "August 3rd - August 10th",
      datesThree: "August 14th - August 21st",
      description: "Enjoy the spoils of visiting moroccos guided by SBF himself to help you find the best experience in moroccos.",
      locationText: "Morocco",
      pricingText: "750€",
      pax: 1,
      totalText: "",
      url: "https://sbftv.com/itenerary.pdf"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "MOROCCO SBF'S EXPERIENCE 2PAX",
      datesOne: "July 24th - July 31st",
      datesTwo: "August 3rd - August 10th",
      datesThree: "August 14th - August 21st",
      description: "Enjoy the spoils of visiting moroccos guided by SBF himself to help you find the best experience in moroccos.",
      locationText: "Morocco",
      pricingText: "700€/pax",
      pax: 2,
      totalText: "total: 1400€",
      url: "https://sbftv.com/itenerary.pdf"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "MOROCCO SBF'S EXPERIENCE 4PAX",
      datesOne: "July 24th - July 31st",
      datesTwo: "August 3rd - August 10th",
      datesThree: "August 14th - August 21st",
      description: "Enjoy the spoils of visiting moroccos guided by SBF himself to help you find the best experience in moroccos.",
      locationText: "Morocco",
      pricingText: "680€/pax",
      pax: 4,
      totalText: "total: 2720€",
      url: "https://sbftv.com/itenerary.pdf"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
      title: "MOROCCO SBF'S EXPERIENCE 6PAX",
      datesOne: "July 24th - July 31st",
      datesTwo: "August 3rd - August 10th",
      datesThree: "August 14th - August 21st",
      description: "Enjoy the spoils of visiting moroccos guided by SBF himself to help you find the best experience in moroccos.",
      locationText: "Morocco",
      pricingText: "630€/pax",
      pax: 6,
      totalText: "total: 3780€",
      url: "https://sbftv.com/itenerary.pdf"
    }  
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Our Experiences</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{card.rating}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pax}</Text>
                  </IconWithText>
                  
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <Center>
              <IconWithText>
                      <PriceIcon /><Text2>{card.pricingText}<br />{card.totalText}</Text2>
              </IconWithText>
              </Center>

              <PrimaryButton as="a" href={card.url}>View Itenerary</PrimaryButton>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};