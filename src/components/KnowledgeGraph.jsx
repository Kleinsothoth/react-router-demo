import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const KnowledgeGraph = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 600; // 画布宽度
    const height = 600; // 画布高度

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#f9f9f9");

    // 动态计算节点大小（根据文字长度调整节点半径）
    const getNodeRadius = (text) => Math.max(30, text.length * 8);

    // 节点数据
    const nodes = [
      { id: "导数", group: 1 },
      { id: "单调性", group: 1 },
      { id: "极值", group: 1 },
      { id: "最值", group: 1 },
      { id: "曲线与方程", group: 2 },
      { id: "求导公式", group: 2 },
      { id: "综合问题", group: 2 },
      { id: "位置关系", group: 3 },
      { id: "定义", group: 3 },
    ];

    // 连线数据
    const links = [
      { source: "导数", target: "单调性" },
      { source: "导数", target: "极值" },
      { source: "导数", target: "最值" },
      { source: "导数", target: "曲线与方程" },
      { source: "曲线与方程", target: "求导公式" },
      { source: "曲线与方程", target: "综合问题" },
      { source: "综合问题", target: "位置关系" },
      { source: "导数", target: "定义" },
    ];

    // 创建力导向图
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3.forceLink(links)
          .id((d) => d.id)
          .distance(120)
          .strength(0.8)
      )
      .force("charge", d3.forceManyBody().strength(-200)) // 排斥力
      .force("center", d3.forceCenter(width / 2, height / 2)) // 居中力
      .force("collide", d3.forceCollide().radius((d) => getNodeRadius(d.id) + 10)); // 碰撞检测

    // 绘制连线
    const link = svg
      .append("g")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(links)
      .join("line");

    // 绘制节点
    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", (d) => getNodeRadius(d.id)) // 根据文字长度动态调整节点大小
      .attr("fill", (d) => (d.group === 1 ? "#E0B3FF" : d.group === 2 ? "#A9D5FF" : "#FFD6E0"))
      .attr("stroke", "#666")
      .attr("stroke-width", 2)
      .call(
        d3
          .drag()
          .on("start", (event, d) => {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on("drag", (event, d) => {
            d.fx = event.x;
            d.fy = event.y;
          })
          .on("end", (event, d) => {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    // 添加文字到节点
    const text = svg
      .append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .attr("text-anchor", "middle")
      .attr("dy", 5)
      .text((d) => d.id)
      .attr("font-size", 12)
      .attr("fill", "#333");

    // 更新位置
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      text.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });

    // 添加缓慢运动效果
    const randomMotion = () => {
      nodes.forEach((d) => {
        d.x += Math.random() * 2 - 1; // 随机左右微动
        d.y += Math.random() * 2 - 1; // 随机上下微动
      });
      simulation.alpha(0.1).restart(); // 触发力导向图的重新计算
    };

    // 每1秒触发一次缓慢运动
    const interval = setInterval(randomMotion, 1000);

    // 清理函数
    return () => {
      simulation.stop();
      clearInterval(interval);
      svg.selectAll("*").remove();
    };
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default KnowledgeGraph;
