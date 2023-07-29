import { NrContainer, NrFestivalCard } from "@/components/ui";
const DjFestival = () => {
  return (
    <div className="flex justify-center items-center bg-nr-dark bg-[url('/assets/media/festival-card-1.jpg')] bg-center bg-cover">
      <NrContainer>
        <NrFestivalCard />
      </NrContainer>
    </div>
  );
};

export default DjFestival;
