import React from 'react';
import { Plus } from 'lucide-react';

const AddYourOwnSection = () => {
  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-1 bg-cyan-500 rounded-full">
          <Plus className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-900">Add your own</h2>
      </div>

      <p className="text-gray-700 mb-6">
        Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
      </p>

      <button className="px-6 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
        Add new
      </button>
    </div>
  );
};

export default AddYourOwnSection;