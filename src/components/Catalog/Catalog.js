import { useContext } from 'react';
import { AdventureContext } from '../../contexts/AdventureContext';
import './catalog.css';
import CatalogItem from './CatalogItem/CatalogItem';

const Catalog = () => {
  const {adventures} = useContext(AdventureContext);
  
  return (
  
      <section className="catalog">
        <h1>All posts</h1>
        <div className="adventure">

          {adventures.length > 0
            ? adventures.map(x => <CatalogItem key={x._id} adventure={x} />)
            : <p className="no-offer">There are no posts yet...</p>
          }
        </div>
      </section>
  
  );
};
export default Catalog;