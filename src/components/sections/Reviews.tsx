import {
  NrComponentCarousel,
  NrContainer,
  NrText,
  NrTitle,
} from "@/components/ui";

import { FC } from "react";

interface Reviews {
  reviews: {
    images: {};
    content: {
      title: string;
      description: string;
      reviews: {
        uuid: string;
        reviewer: string;
        avatar: string;
        rating: number;
        review: string;
      }[];
    };
  };
}

const Reviews: FC<Reviews> = ({ reviews }) => {
  const {
    content: { title, description, reviews: reviewsData },
  } = reviews;
  return (
    <section className="bg-blue-dark">
      <NrContainer
        styles={{
          css: "flex flex-col gap-20 px-xl items-start lg:max-w-screen-xl",
        }}
      >
        <div className="flex flex-col gap-lg max-w-screen-md m-auto">
          <NrTitle
            component="h2"
            styles={{
              align: "center",
            }}
          >
            {title}
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            {description}
          </NrText>
        </div>
        <NrComponentCarousel
          item={reviewsData}
          component="NrReviewCard"
          styles={{
            size: "full",
          }}
        />
      </NrContainer>
    </section>
  );
};

export default Reviews;
