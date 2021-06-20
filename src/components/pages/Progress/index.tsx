import React, { useEffect, useState } from "react";
import './styles.scss';

export interface ProgressLineProps {
    visualParts: any[];
    label: string;
    end:string;
}


const ProgressLine: React.FC<ProgressLineProps> = ({ visualParts, label,end }) => {
  debugger
      const [widths, setWidths] = useState(
        visualParts.map(() => {
          return 0;
        })
      );


      // useEffect(() => {
      //   requestAnimationFrame(() => {
      //     setWidths(
      //       visualParts.map((item) => {
      //         return item.climate;
      //       })
      //     );
      //   });
      // }, [visualParts]);


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
