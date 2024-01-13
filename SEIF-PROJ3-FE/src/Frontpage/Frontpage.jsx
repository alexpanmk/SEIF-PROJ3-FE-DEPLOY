import React from "react";
import DisplayCard from "../DisplayCard/DisplayCard";

function Frontpage() {
  return (
    <>
      <div class="ml-6 mr-6 gap-8 columns-3 ">
        <DisplayCard />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=1"
        />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=2"
        />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=3"
        />

        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=4"
        />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=5"
        />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=6"
        />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=7"
        />
        <img
          class="w-full aspect-video mb-6"
          src="https://picsum.photos/500/300?random=8"
        />
        <DisplayCard />
        <img
          class="w-full aspect-square mb-6"
          src="https://picsum.photos/500/300?random=9"
        />
        <DisplayCard />
      </div>
    </>
  );
}

export default Frontpage;
