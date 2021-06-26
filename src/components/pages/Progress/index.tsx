import React, { useState } from "react";
import './styles.scss';

export interface ProgressLineProps {
    visualParts: any[];
    label: string;
    end:string;
}


const ProgressLine: React.FC<ProgressLineProps> = ({ visualParts, label,end }) => {
      const [widths] = useState(
        visualParts.map(() => {
          return 0;
        })
      );



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
