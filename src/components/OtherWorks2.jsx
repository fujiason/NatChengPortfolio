import styles from "../style";
import { arrowUp } from "../assets";

const OtherWorks2 = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mb-96`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-nohemi font-bold text-start ss:text-[72px] text-[60px] text-dimBlack ss:leading-[100.8px] leading-[75px]">
            other{" "}
            <span className="text-dimCyan">works</span>
          </h1>
        </div>

        <p className={`${styles.paragraph} mt-10 mb-10 w-full`}>
          Besides UX design, I enjoy doing{" "}
          <span className="text-dimCyan font-bold ">graphic design</span>{" "}
          and{" "}
          <span className="text-dimCyan font-bold ">photography</span>{" "}
          on the side. 
          This is a collection of my graphic design works and photos.
        </p>

        <a href={`#${"designs"}`}>
          <img src={arrowUp} alt="designs" className="w-[124px] h-[32px] rotate-130 mt-20" />
        </a>

      </div>

    </section>
  );
};

export default OtherWorks2;
