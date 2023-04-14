import { Layout } from "../components";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="Home">
      <div className="flex min-h-screen justify-center items-center flex-col">
        <Image
          src="/assets/logo.jpeg"
          width={200}
          height={200}
          alt="1"
          quality={30}
        />
        <h1 className="text-gray-500">საიტი მალე დაემატება!</h1>
      </div>
    </Layout>
  );
}
