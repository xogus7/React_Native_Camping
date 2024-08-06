import { getAccountsInfo } from "@libs/apis";
import { useEffect, useState } from "react";

const useAccounts = () => {
    useEffect(() => {
        getAccounts();

    }, []);

    const getAccounts = async () => {
        setIsLoading(true);
        const result = await getAccountsInfo();
        setAccountsInfo(result ?? []);
        setIsLoading(false);
    }
    const [accountsInfo, setAccountsInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    return { accountsInfo, isLoading, getAccounts };
};

export default useAccounts;