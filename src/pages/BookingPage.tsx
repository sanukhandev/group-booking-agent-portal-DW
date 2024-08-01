// src/pages/BookingPage.tsx
import React from 'react';
import Modal from '../components/Modal';
import BookNowForm from '../components/Search/BookNow/BookNowForm';

const BookingPage: React.FC = () => {
  return (
    <div className="booking-page">
      
        <BookNowForm />
      
    </div>
  );
};

export default BookingPage;
