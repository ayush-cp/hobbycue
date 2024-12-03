import React from 'react';
import { Plus } from 'lucide-react';

const AddYourOwnSection = () => {
  return (
    <div className="max-w-[1240px] h-[284px] mx-auto mt-24 px-24 bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-1 bg-cyan-500 rounded-full">
          <Plus className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Add your own</h2>
      </div>
      <div className="space-y-6">
        <p className="text-gray-700 max-w-4xl leading-relaxed">
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
        </p>
        <button className="px-6 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition">
          Add new
        </button>
      </div>
    </div>
  );
};

export default AddYourOwnSection;