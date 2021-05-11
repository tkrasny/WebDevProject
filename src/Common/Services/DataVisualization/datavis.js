import React, { useState, useEffect, useRef } from "react";
import * as d3 from 'd3'
import Parse from "parse";

export function BarChart({ data }) {
    const ref = useD3(
        (svg) => {
            const height = 500;
            const width = 900;
            const margin = { top: 20, right: 30, bottom: 30, left: 40 };

            const x = d3.scaleBand()
                .domain(data.map((d) => d.TeamAbbr))
                .range([50, 800])
                .padding([0.1])

            const y1 = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => d.W)])
                .rangeRound([height - margin.bottom, margin.top]);

            const xAxis = (g) =>
                g.attr("transform", `translate(0,${height - margin.bottom})`).call(
                    d3
                        .axisBottom(x)
                );

            const y1Axis = (g) =>
                g
                    .attr("transform", `translate(${margin.left},0)`)
                    .style("color", "steelblue")
                    .call(d3.axisLeft(y1).ticks(null, "s"))
                    .call((g) => g.select(".domain").remove())
                    .call((g) =>
                        g
                            .append("text")
                            .attr("x", -margin.left)
                            .attr("y", 10)
                            .attr("fill", "currentColor")
                            .attr("text-anchor", "start")
                            .text(data.y1)
                    );

            svg.select(".x-axis").call(xAxis);
            svg.select(".y-axis").call(y1Axis);

            svg
                .select(".plot-area")
                .attr("fill", "steelblue")
                .selectAll(".bar")
                .data(data)
                .join("rect")
                .attr("class", "bar")
                .attr("x", (d) => x(d.TeamAbbr))
                .attr("width", x.bandwidth())
                .attr("y", (d) => y1(d.W))
                .attr("height", (d) => y1(0) - y1(d.W));

        },
        [data.length]
    );

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: "100%",
                marginRight: "0px",
                marginLeft: "0px",
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    );
}

export default BarChart;

export const useD3 = (renderChartFn, dependencies) => {
    const ref = useRef();

    useEffect(() => {
        renderChartFn(d3.select(ref.current));
        return () => {};
    }, dependencies);
    return ref;
}