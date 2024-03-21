import PokemonCard from "@/components/PokemonCard";

type Props = {};

const SectionList = (props: Props) => {
  return (
    <section className="flex flex-wrap w-full">
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </section>
  );
};

export default SectionList;
