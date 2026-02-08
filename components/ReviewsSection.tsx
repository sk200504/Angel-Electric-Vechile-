
import React from 'react';
import { REVIEWS } from '../constants';

const ReviewsSection: React.FC = () => {
  return (
    <div className="py-24 px-6 md:px-12 bg-slate-50" id="reviews">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Happy <span className="text-emerald-600">Riders</span></h2>
            <p className="text-lg text-slate-500 font-medium">Real stories from real owners who joined the Angel Electric family.</p>
          </div>
          <button className="bg-white border-2 border-emerald-500 text-emerald-600 px-8 py-3 rounded-2xl font-black hover:bg-emerald-500 hover:text-white transition-all shadow-xl shadow-emerald-500/5">
            Submit Your Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-xl transition-all">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`fas fa-star ${i < review.rating ? 'text-amber-400' : 'text-slate-200'}`}></i>
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 flex-1 leading-relaxed font-medium">"{review.comment}"</p>
              <div className="flex items-center gap-4">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-emerald-100" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold uppercase">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-black text-slate-900 leading-none">{review.name}</h4>
                  <p className="text-xs font-bold text-emerald-600 mt-1">{review.model}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
