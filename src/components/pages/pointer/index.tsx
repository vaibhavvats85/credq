import React, { useEffect, useState } from "react";
import './styles.scss';

export interface PointerProps {
    visualParts: any[];
    label: string;
    end:string;
}


const ProgressLine: React.FC<PointerProps> = ({ visualParts, label,end }) => {
      const [widths, setWidths] = useState(
        visualParts.map(() => {
          return 0;
        })
      );


      useEffect(() => {
        requestAnimationFrame(() => {
          setWidths(
            visualParts.map((item) => {
              return item.climate;
            })
          );
        });
      }, [visualParts]);


  return (
    <>
     
      <div
        className="progressVisualFull"
      >
         <div className="progressLabel">{label}</div>
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
                backgroundColor: item.color
              }}
              className="item"
            />
          );
        })}
         <div className="end">{end}</div>
      </div>
     
    </>
  );
};

export default ProgressLine;
