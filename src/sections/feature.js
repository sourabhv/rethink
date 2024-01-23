/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Marketplace from "assets/feature/marketplace.svg";
import Gift from "assets/feature/gift.svg";
import Award from "assets/feature/award.svg";

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: "Marketplace",
    title: "Bespoke Software Artistry",
    text: "    Experience the perfect blend of innovation and precision as we create tailored software solutions that redefine technological sophistication for your business.",
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: "Gift",
    title: "Pinnacle of Digital Craftsmanship",
    text: "    Explore top-tier digital craftsmanship in our web and app development services. From design elegance to flawless functionality, we shape visually captivating digital landscapes that go beyond the ordinary.",
  },
  {
    id: 3,
    imgSrc: Award,
    altText: "Awards",
    title: "Strategic Techno-Orchestration",
    text: "    Witness the seamless orchestration of your digital infrastructure. Marvel at our skill in harmonizing cloud efficiency, cybersecurity strength, and network stability, ensuring your digital framework operates as a flawless masterpiece.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }} id="feature">
      <Container>
        <SectionHeader
          title="Unlock Limitless Potential"
          description="From ideation to delivery, we help you every step of the way."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      "40px",
      "45px",
      "45px 30px",
      null,
      "60px 30px",
      "50px 40px",
      null,
      "75px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
