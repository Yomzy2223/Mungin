import React, { useEffect } from "react";
import { plantation } from "../assets/images";
import ImageList from "../components/Reusable components/CropDetails/ImageList";
import Sidebar from "../components/Reusable components/sidebar/index";
import DetailsLayout from "../layout/DetailsLayout";
import { getCrops } from "../services/auth.service";

const Test = () => {
  useEffect(() => {
    getCrops();
  }, []);

  return (
    <div>
      {/* <Sidebar /> */}
      <DetailsLayout>Hello from details layout</DetailsLayout>
      {/* <ImageList
        title="Leaf Blight"
        image={plantation}
        text="hello from platations"
      /> */}
    </div>
  );
};

export default Test;
