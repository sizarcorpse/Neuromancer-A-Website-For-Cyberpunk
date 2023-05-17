import {
  NrComponentCarousel,
  NrContainer,
  NrText,
  NrTitle,
} from "@/components/ui";
import { reviewsData } from "@/mock/data";

const Reviews = () => {
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
            And here’s what our happy customers have to say...
          </NrTitle>
          <NrText
            styles={{
              align: "center",
            }}
          >
            Whether you visit alone or with friends and family, we always aim to
            make every minute you spend with us enjoyable.
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
