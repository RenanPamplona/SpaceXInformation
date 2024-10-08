import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import * as S from "../../pagesStyles/companyInfo";
import SmallCard from "../../src/components/Cards/SmallCard";
import LabelAndInfo from "../../src/components/shared/LabelAndInfo";
import TitleWithImage from "../../src/components/shared/TitleWithImage";
import { CompanyType, fetchCompanyData } from "../../src/services/company";

export const getServerSideProps: GetServerSideProps = async () => {
  const companyInfo = await fetchCompanyData();

  return {
    props: {
      companyInfo,
    },
  };
};

const CompanyInfo: NextPage = (props: {
  children?: ReactNode;
  companyInfo?: CompanyType;
}) => {
  return (
    <>
      <Head>
        <title>Company Info</title>
      </Head>
      <TitleWithImage
        title="Company Data"
        subtitle={props.companyInfo?.summary}
        image="https://live.staticflickr.com/65535/52568149769_068064ebbd_3k.jpg"
      />
      <S.Wrapper>
        <S.ButtonsDiv>
          <SmallCard
            id="0"
            name="Elon Twitter"
            linkToPush={props.companyInfo?.links.elon_twitter!}
          />
          <SmallCard
            id="0"
            name="SpaceX Flickr"
            linkToPush={props.companyInfo?.links.flickr!}
          />
          <SmallCard
            id="0"
            name="SpaceX Twitter"
            linkToPush={props.companyInfo?.links.twitter!}
          />
          <SmallCard
            id="0"
            name="SpaceX Website"
            linkToPush={props.companyInfo?.links.website!}
          />
        </S.ButtonsDiv>

        <S.MainInfo>
          <LabelAndInfo label="Founder" info={props.companyInfo?.founder!} />

          <LabelAndInfo
            label="Foundation date"
            info={props.companyInfo?.founded!}
          />

          <LabelAndInfo
            label="Employees"
            info={props.companyInfo?.employees!}
          />

          <LabelAndInfo label="CEO" info={props.companyInfo?.ceo!} />

          <LabelAndInfo label="CTO" info={props.companyInfo?.cto!} />

          <LabelAndInfo label="COO" info={props.companyInfo?.coo!} />

          <LabelAndInfo
            label="Valuation"
            info={
              props.companyInfo?.valuation.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })!
            }
          />
        </S.MainInfo>

        <S.Location>
          <span style={{ fontWeight: 700 }}>Headquarters</span>
          <SmallCard
            id="0"
            linkToPush="https://www.google.com.br/maps/place/Spacex/@33.9213135,-118.3290723,17z/data=!4m13!1m7!3m6!1s0x80c2b5ded9a490b5:0x3095ae5795c500b3!2sRocket+Rd,+Hawthorne,+CA+90250,+EUA!3b1!8m2!3d33.9213135!4d-118.3268783!3m4!1s0x80c2b5dee46db32d:0x5589bf4232c10232!8m2!3d33.9207525!4d-118.3280246"
            name={`${props.companyInfo?.headquarters.address}, ${props.companyInfo?.headquarters.city}, ${props.companyInfo?.headquarters.state}`}
          />
        </S.Location>
      </S.Wrapper>
    </>
  );
};

export default CompanyInfo;
