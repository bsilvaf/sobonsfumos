import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import Imagin from "../../helpers/Image.js";
import ExperiencesImage from "images/sobonsfumos/contactcard.png"

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container = styled.div`
  ${tw`relative`}
`;


const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const Image = styled(Imagin)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw.img`rounded`}
`;


export default () => {
  return (
    <Container>
      <HeroContainer>
        <StyledHeader/>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              <span>TOURS  </span>
              <br />
              <span>CANABICOS</span>
            </Heading>
          </LeftColumn>
          <RightColumn>
            <Image
              url={ExperiencesImage}
            />
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};