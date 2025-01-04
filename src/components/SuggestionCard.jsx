import React from "react";

const SuggestionCard = ({ title, details }) => (
  <div className="bg-purple-50 shadow rounded-md p-4">
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-gray-600 text-sm">{details}</p>
  </div>
);

export default SuggestionCard;
