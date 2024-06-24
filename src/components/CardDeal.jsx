import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Enjoy exclusive offers  <br className="sm:block hidden" />hassle-free
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Discover user-friendly interface and attractive deals. Easily check stock availability for any product while enjoying great offers.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
