
import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../constants';
import { Review } from '../types';

const ReviewsPage: React.FC = () => {
  // Initialize reviews from localStorage if available, otherwise use default REVIEWS
  const [reviews, setReviews] = useState<Review[]>(() => {
    const savedReviews = localStorage.getItem('angel_ev_reviews');
    if (savedReviews) {
      try {
        return JSON.parse(savedReviews);
      } catch (e) {
        console.error("Failed to parse saved reviews", e);
        return REVIEWS;
      }
    }
    return REVIEWS;
  });

  const [filterMood, setFilterMood] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    model: '',
    rating: 5,
    comment: '',
    mood: 'Fast'
  });

  // Save reviews to localStorage whenever the reviews state changes
  useEffect(() => {
    localStorage.setItem('angel_ev_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const MOODS = ['All', 'Comfortable', 'Fast', 'Value for Money', 'Eco-friendly'];

  const filtered = filterMood === 'All' ? reviews : reviews.filter(r => r.mood === filterMood);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const review: Review = {
      id: Date.now(),
      name: newReview.name,
      model: newReview.model || 'Angel EV Rider',
      rating: newReview.rating,
      comment: newReview.comment,
      mood: newReview.mood as any,
      avatar: `https://i.pravatar.cc/150?u=${newReview.name}`
    };

    setReviews([review, ...reviews]);
    setShowForm(false);
    setNewReview({ name: '', model: '', rating: 5, comment: '', mood: 'Fast' });
  };

  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-white mb-4 tracking-tight uppercase italic">Community <span className="text-red-600">Voices</span></h1>
        <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">Hear it from the people who ride electric every day in Jabalpur.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {MOODS.map(m => (
          <button 
            key={m}
            onClick={() => setFilterMood(m)}
            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filterMood === m ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-slate-900 text-slate-400 border border-red-900/20 hover:text-white'}`}
          >
            {m}
          </button>
        ))}
      </div>

      {showForm && (
        <div className="mb-16 bg-slate-900/60 p-10 rounded-[3rem] border border-red-600/30 max-w-2xl mx-auto backdrop-blur-md">
          <h3 className="text-2xl font-black text-white mb-8 uppercase italic">Write Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" placeholder="Your Full Name" required
                className="bg-black border border-red-900/30 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-red-600 w-full"
                value={newReview.name} onChange={e => setNewReview({...newReview, name: e.target.value})}
              />
              <input 
                type="text" placeholder="EV Model (e.g. S1 Pro)"
                className="bg-black border border-red-900/30 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-red-600 w-full"
                value={newReview.model} onChange={e => setNewReview({...newReview, model: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select 
                className="bg-black border border-red-900/30 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-red-600 w-full"
                value={newReview.mood} onChange={e => setNewReview({...newReview, mood: e.target.value})}
              >
                {MOODS.filter(m => m !== 'All').map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <div className="flex items-center gap-4 px-2">
                <span className="text-slate-400 text-sm font-bold">Rating:</span>
                <input 
                  type="range" min="1" max="5" 
                  className="accent-red-600"
                  value={newReview.rating} onChange={e => setNewReview({...newReview, rating: parseInt(e.target.value)})}
                />
                <span className="text-red-500 font-black">{newReview.rating}/5</span>
              </div>
            </div>
            <textarea 
              placeholder="Your thoughts on the ride..." required
              className="bg-black border border-red-900/30 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-red-600 w-full h-32"
              value={newReview.comment} onChange={e => setNewReview({...newReview, comment: e.target.value})}
            />
            <div className="flex gap-4">
              <button type="submit" className="bg-red-600 text-white px-8 py-3 rounded-xl font-black shadow-lg shadow-red-600/20 uppercase tracking-widest flex-1">
                Post Review
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-white/5 text-slate-400 px-8 py-3 rounded-xl font-black uppercase tracking-widest border border-red-900/20">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filtered.map(review => (
          <div key={review.id} className="bg-slate-900/40 p-8 rounded-[3rem] shadow-2xl border border-red-900/10 flex flex-col group hover:-translate-y-2 transition-all backdrop-blur-sm">
            <div className="flex justify-between items-start mb-6">
               <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                   <i key={i} className={`fas fa-star text-xs ${i < review.rating ? 'text-red-500' : 'text-slate-700'}`}></i>
                 ))}
               </div>
               <span className="text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-600/10 px-3 py-1 rounded-full border border-red-900/20">{review.mood}</span>
            </div>
            <p className="text-slate-300 italic font-medium leading-relaxed mb-8 flex-1">"{review.comment}"</p>
            <div className="flex items-center gap-4">
              <img src={review.avatar} className="w-12 h-12 rounded-full border-2 border-red-900/30" onError={(e) => (e.currentTarget.src = `https://ui-avatars.com/api/?name=${review.name}`)} />
              <div>
                <h4 className="font-black text-white leading-none uppercase italic">{review.name}</h4>
                <p className="text-xs font-bold text-slate-500 mt-1 uppercase tracking-tighter">{review.model}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-600 rounded-[3rem] p-12 text-white text-center max-w-4xl mx-auto shadow-2xl shadow-red-600/20">
        <h3 className="text-3xl font-black mb-4 uppercase italic">Love your Angel EV?</h3>
        <p className="text-white/80 font-medium mb-10 tracking-wide">Share your experience with our growing community of green riders.</p>
        <button 
          onClick={() => setShowForm(true)}
          className="bg-white text-red-600 px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 uppercase tracking-widest"
        >
          Submit Your Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsPage;
