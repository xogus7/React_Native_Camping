import {useState, useEffect} from 'react';
import axios from 'axios';

const useAccounts = () => {
  const [accountsInfo, setAccountsInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAccounts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://13.209.27.220:8080/accounts/info`,
      );
      console.log('API response:', response.data);
      setAccountsInfo(response.data);
    } catch (err) {
      setError(err.message);
      console.error('API error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return {
    accountsInfo,
    isLoading,
    error,
    getAccounts,
  };
};

export default useAccounts;
