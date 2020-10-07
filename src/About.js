import React from "react";
import Web from "./images/about.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        title="About US"
        name="And that's true for The Good Marketer!
We’re a small but perfectly assembled team of expert marketers that have come together through a common desire to defy outdated marketing ideologies. The Good Marketer focuses on each unique project with acute originality, relaying the most beneficial marketing techniques differently for each client.

Based in London, our team are incredibly proactive, creative and dedicated to providing only the best work within their field. Now, we know you’ve heard this kind of talk before. But we can assure you we walk the walk. We actually deliver on our promises"
        imgsrc={Web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};
export default About;
