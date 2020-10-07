import React from "react";
import Web from "./images/img1.PNG";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        title="AI Creative Agency"
        name=" AI Creative is a boutique marketing agency providing a perfect balance of strategy, creative and delivery. 

*Ah yes. Meraki. We were just coming to that. When we say that we do everything with meraki, we mean that we put a piece of ourselves – our soul, our creativity, our love – into everything we do, every day.

That could easily just be marketing chat, couldn’t it? After all, we are a marketing agency and this is our website. But when you work with us, you’ll discover that we really mean it. And that’s what makes us different.

We believe in true partnership and in delivering straight-talking, insightful creative solutions. As experts and problem-solvers, we have the knowledge and experience to challenge you when needed.

Your next scroll will bring you to some of the values we hold most dear. If they chime with you, give us a call!"
        name2="We are a small creative agency helping small business to grow and make thier pressence on the Internet!"
        imgsrc={Web}
        visit="/service"
        btname="Lets Begin"
      />
    </>
  );
};
export default Home;
