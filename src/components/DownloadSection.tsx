import Image from "next/image";
import Button from "./Button";

export default function DownloadSection() {
  return (
    <section className="flexCenter w-full flex-col pb-24">
      <div className="get-app">
        <div className="z-20 flex flex-col w-full flex-1 items-start justify-center fade-down">
          <h2 className="bold-40 lg:bold-64">Get for Free now </h2>
          <p className="regular-16 text-gray-10 mt-4">
            Aviable on Ois and Android
          </p>
          <div className="flex flex-col w-full whitespace-nowrap lg:flex-row gap-3 mt-5">
            <Button
              label="App Store"
              type="button"
              variant="btn_white"
              icon="/img/apple.svg"
              full={true}
            ></Button>
            <Button
              label="Play Store"
              type="button"
              variant="btn_dark_green_outline"
              icon="/img/android.svg"
              full={true}
            ></Button>
          </div>
        </div>
        <div className="flex justify-center items-center fade-up">
          <Image src="/img/phones.webp" alt="phones" width={500} height={800} />
        </div>
      </div>
    </section>
  );
}
