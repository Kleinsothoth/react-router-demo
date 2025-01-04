import React from "react";

const QuestionCard = ({ title, description }) => (
  <div className="bg-white shadow rounded-md p-4">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default QuestionCard;
