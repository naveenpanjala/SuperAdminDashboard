import { VictoryPie, VictoryTooltip } from "victory";
import { useEffect, useState } from "react";

const DoughnutChart = () => {
  const data = [
    { x: "Hyderabad", y: 35 },
    { x: "Delhi", y: 10 },
    { x: "Chennai", y: 20 },
    { x: "Bangalore", y: 20 },
  ];

  const colorScale = ["#FF9A62", "#85B6FF", "#FFD233", "#b1a9f5"];

  const [display, setDisplay] = useState(true);

  useEffect(() => {
    for (const { y } of data) {
      if (y) {
        setDisplay(true);
        break;
      }
    }
  }, [data]);

  const renderLegend = () => {
    const legendSize = 12;

    return (
      <g transform={`translate(30, 280)`}>
        {data.map((item, index) => (
          <g
            key={item.x}
            transform={`translate(${(index % 2) * 200}, ${
              Math.floor(index / 2) * 25
            })`}
          >
            <circle r={legendSize / 2} fill={colorScale[index]} />
            <text
              x={legendSize + 5}
              y={legendSize / 3}
              style={{ fontSize: 14 }}
            >
              {item.x} <tspan fontWeight="bold">{item.y}%</tspan>
            </text>
          </g>
        ))}
      </g>
    );
  };

  return (
    <div >
      {display ? (
        <svg viewBox="0 20 400 800">
          <VictoryPie
            standalone={false}
            width={370}
            height={290}
            data={data}
            innerRadius={0}
            colorScale={colorScale}
            labels={({ datum }) =>
              `${
                datum.x.slice(0, 1).toUpperCase() +
                datum.x.slice(1).toLowerCase()
              }: ${datum.y}%`
            }
            style={{
              labels: {
                fill: "transparent",
              },
              data: {
                stroke: "white",
                strokeWidth: "0.5%",
              },
            }}
            labelComponent={
              <VictoryTooltip
                style={{ fill: "white", cursor: "pointer" }}
                flyoutStyle={{ fill: "black" }}
                renderInPortal={false}
                constrainToVisibleArea
              />
            }
            events={[
              {
                target: "data",
                eventHandlers: {
                  onMouseOver: () => [
                    {
                      target: "labels",
                      mutation: () => ({ active: true }),
                    },
                  ],
                  onMouseOut: () => [
                    {
                      target: "labels",
                      mutation: () => ({ active: false }),
                    },
                  ],
                },
              },
            ]}
          />
          {renderLegend()}
        </svg>
      ) : (
        "Data not available"
      )}
    </div>
  );
};

export default DoughnutChart;
