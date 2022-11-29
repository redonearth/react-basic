import { useEffect, useState } from 'react';

export default function useProducts({ isSalesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${isSalesOnly ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥 뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((error) => setError('에러가 발생했음!'))
      .finally(() => setLoading(false));
    return () => {
      console.log('🧹 깨끗하게 청소');
    };
  }, [isSalesOnly]);

  return [loading, error, products];
}
