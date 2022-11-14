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
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          width: "40rem",
          border: "1px solid #ccc",
          marginTop: "1rem",
        }}
      >
        {houseNumber && <HouseImage number={houseNumber} size={150} />}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginLeft: "1rem",
            textAlign: "right",
            padding: "0.5rem",
          }}
        >
          <h2 style={{ marginTop: 0 }}>{listing.Title}</h2>
          {price && <HousePrice price={price} />}
        </div>
      </div>

      <div className={styles.houseCard}>
        <div
          style={
            !expanded && descriptionHeight > MAX_HEIGHT ? collapsedStyle : {}
          }
        >
          <h2>Description:</h2>
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
