import CharacterCard from "@/src/components/characterCard";

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center">
			<h1 className="text-2xl  font-bold mt-10 text-center">Selecione seu investigador!</h1>
			<CharacterCard />
		</main>
	);
}
