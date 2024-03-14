import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          consequuntur harum suscipit magnam, esse magni eveniet officiis
          deserunt corrupti pariatur dignissimos qui, repellat non vitae ut
          molestiae cum dolorem, ad quaerat! Eius adipisci, praesentium odit
          dolorum beatae mollitia neque pariatur harum voluptate nisi iste.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure
          possimus quod amet magni ratione, neque consequuntur odit odio
          voluptas nemo nostrum consectetur.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
