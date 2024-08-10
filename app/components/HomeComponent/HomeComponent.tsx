import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";

const HomeComponent = () => {
  return (
    <>
      <div>MENUMAKER</div>
      <Link color="primary" href="/menumaking">
        CREA IL TUO MENU
      </Link>
    </>
  );
};

export default HomeComponent;
