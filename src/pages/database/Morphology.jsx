import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ImageWithLabel from "../../components/Reusable components/CropDetails/ImageWithLabel";
import TextWithDetails from "../../components/Reusable components/CropDetails/TextWithDetails";
import { storeTitle } from "../../redux/slices";
import { store } from "../../redux/store";

const Morphology = () => {
  const { cropDetails } = useSelector((store) => store.database);

  useEffect(() => {
    store.dispatch(storeTitle("Morphology"));
  }, []);

  const morphologyObj = cropDetails.morphology ? cropDetails?.morphology : {};

  let imageIncluded = morphologyObj?.root?.includes("http");

  const image = imageIncluded ? morphologyObj?.root : "";

  let branches = morphologyObj?.branches;
  let flower = morphologyObj?.flower;
  let foilage = morphologyObj?.foliage;
  let fruit = morphologyObj?.fruit;
  let root = morphologyObj?.root?.includes("http") ? "" : morphologyObj?.root;
  let seed = morphologyObj?.seed;
  let stem = morphologyObj?.stem;

  return (
    <div>
      {image && (
        <ImageWithLabel
          image={image ? image : ""}
          list={[]}
          imgStyle={{ maxHeight: "100%" }}
        />
      )}
      {branches && <TextWithDetails title="Branches" text={branches} />}
      {flower && <TextWithDetails title="Flower" text={flower} />}
      {foilage && <TextWithDetails title="Foliage" text={foilage} />}
      {fruit && <TextWithDetails title="Fruit" text={fruit} />}
      {root && <TextWithDetails title="Root" text={root} />}
      {seed && <TextWithDetails title="Seed" text={seed} />}
      {stem && <TextWithDetails title="Stem" text={stem} />}
    </div>
  );
};

export default Morphology;
