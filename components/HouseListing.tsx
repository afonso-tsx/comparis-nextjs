"use client";

import { CSSProperties, useEffect, useRef, useState } from "react";
import { Listing } from "../types/Listing";
import styles from "../app/page.module.css";
import { useSearchParams } from "next/navigation";
import { HouseImage } from "./HouseImage";
import { HousePrice } from "./HousePrice";
const MAX_HEIGHT = 200;

const collapsedStyle: CSSProperties = {
  maxHeight: "200px",
  overflow: "hidden",
};

const expandButtonStyle: CSSProperties = {
  marginTop: "1rem",
  zIndex: 2,
  color: "#27a082",
};

export const HouseListing: React.FC<{ listing: Listing }> = ({ listing }) => {
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const [expanded, setExpanded] = useState<boolean | null>(null);
  const searchParams = useSearchParams();

  const price = searchParams.get("price");
  const houseNumber = searchParams.get("houseNumber");

  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    setDescriptionHeight(ref.current?.clientHeight ?? 0);
  }, []);

  useEffect(() => {
    setExpanded(window.localStorage.getItem("descriptionExpanded") === "true");
  }, []);

  useEffect(() => {
    expanded !== null &&
      window.localStorage.setItem(
        "descriptionExpanded",
        expanded ? "true" : "false"
      );
  }, [expanded]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {houseNumber && (
        <HouseImage
          number={houseNumber}
          size={200}
          style={{ alignSelf: "center" }}
        />
      )}
      {price && (
        <HousePrice
          price={price}
          style={{ alignSelf: "center", marginTop: "1rem" }}
        />
      )}
      <div className={styles.houseCard}>
        <div
          style={
            !expanded && descriptionHeight > MAX_HEIGHT ? collapsedStyle : {}
          }
        >
          <h2>{listing.Title}</h2>
          <p
            ref={ref}
            dangerouslySetInnerHTML={{ __html: listing.Description }}
          />
        </div>
        {descriptionHeight > MAX_HEIGHT && (
          <div
            className={styles.expandButton}
            style={expandButtonStyle}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Less -" : "More +"}
          </div>
        )}
      </div>
    </div>
  );
};
