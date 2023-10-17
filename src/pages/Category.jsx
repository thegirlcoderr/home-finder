import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import ListingItem from '../components/ListingItem';
import Spinner from '../components/Spinner';

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        //To get reference
        const listingsRef = collection(db, 'listings');

        //To create a query
        const q = query(
          listingsRef,
          where('type', '==', 'rent'),
          orderBy('timeStamp', 'desc'),
          limit(10)
        );

        //To execute query
        const querySnap = await getDocs(q);

        // log the documents
        let listings = [];

        querySnap.forEach((doc) => {
          console.log(doc);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchListings();
  }, [params.categoryName]);

  return <div>Category</div>;
}

export default Category;
