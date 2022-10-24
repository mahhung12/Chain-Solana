import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <div className="container mx-auto grid place-content-center place-content-stretch h-36">
      <WalletMultiButton />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
