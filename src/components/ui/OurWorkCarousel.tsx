import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const OurWorkCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit(); // Force reinitialization on mount
    }
  }, [emblaApi]);

  const styles: { [key: string]: React.CSSProperties } = {
    embla: {
      overflow: "hidden",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    emblaContainer: {
      display: "flex",
    },
    emblaSlide: {
      position: "relative",
      flex: "0 0 100%", // Ensure each slide takes up 100% of the viewport
      padding: "10px",
    },
  };

  return (
    <div style={styles.embla} ref={emblaRef}>
      <div style={styles.emblaContainer}>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/bugfront.png"
            alt="Work Image 1"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/back.png"
            alt="Work Image 2"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/carpet.png"
            alt="Work Image 3"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/IMG_7593.PNG"
            alt="Work Image 3"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/IMG_7594.PNG"
            alt="Work Image 3"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/IMG_7595.PNG"
            alt="Work Image 3"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/IMG_7596.PNG"
            alt="Work Image 3"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/IMG_7597.PNG"
            alt="Work Image 3"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
        <div style={styles.emblaSlide}>
          <Image
            src="/images/other/IMG_7598.PNG"
            alt="Work Image 3"
            layout="responsive"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default OurWorkCarousel;
