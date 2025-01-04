import React from "react";
import KnowledgeGraph from "../components/KnowledgeGraph";
import QuestionCard from "../components/QuestionCard";
import SuggestionCard from "../components/SuggestionCard";

const DatabasePage = () => {
  return (
    <div className="flex h-full">
      {/* 左侧知识点图 */}
      <div className="w-1/3 p-4 bg-white shadow">
        <h2 className="text-xl font-bold mb-4">选中知识点</h2>
        <KnowledgeGraph />
      </div>

      {/* 中间题目列表 */}
      <div className="w-1/3 p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4">与知识点相关题目</h2>
        <div className="space-y-4">
          <QuestionCard
            title="题目1：难度5"
            description="已知函数f(x)=e^x - a(x+2)..."
          />
          <QuestionCard
            title="题目2：难度3"
            description="已知函数f(x)=sinx/sin2x..."
          />
        </div>
      </div>

      {/* 右侧老师建议 */}
      <div className="w-1/3 p-4 bg-white shadow">
        <h2 className="text-xl font-bold mb-4">老师建议</h2>
        <SuggestionCard
          title="求导公式"
          details="在您的考试数据库中出现了10次..."
        />
      </div>
    </div>
  );
};

export default DatabasePage;
